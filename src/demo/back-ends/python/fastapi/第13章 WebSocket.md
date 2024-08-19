---
title: 第13章 Websocket
order: 13
icon: code
---

## 13-1 WebSocket是什么



**WebSocket简介**：

-   WebSocket是一种在单个[TCP](https://baike.baidu.com/item/TCP)连接上进行[全双工](https://baike.baidu.com/item/全双工)通信的协议。

-   WebSocket使得客户端和服务器之间的数据交换变得更加简单，允许服务端主动向客户端推送数据。
-   在WebSocket API中，浏览器和服务器只需要完成一次握手，两者之间就直接可以创建持久性的连接，并进行双向数据传输。



**WebSocket和HTTP的相同点和不同点**：

-   WebSocket和HTTP都是解决 客户端-服务端 通信的网络协议。
-   HTTP是单向的，客户端先发起请求，服务端收到请求后再处理这个请求返回响应结果；即先有请求再有响应，且是一个请求对应一个响应；请求时建立连接，响应后断开连接。
-   WebSocket是双向的，客户端发起请求经过三次握手连接后，客户端和服务端就会基于这个连接保持通信，都可以主动向对方发消息。任何一端都可以主动断开这个连接。

-   HTTP是无状态的，WebSocket是有状态的。即如果使用WebSocket，那么只要建立了连接，每次通信时，服务端都知道在和谁通信，不需要借助Cookie或seesion或jwt等登录认证方式。

>参考：https://www.geeksforgeeks.org/what-is-web-socket-and-how-it-is-different-from-the-http/



**WebSocket的应用**：

-   实时web应用
-   游戏
-   聊天软件等等







## 13-2 WebSocket聊天室简易版

-   使用FastAPI演示浏览器和服务端基于WebSocket，建立连接并双向通信。
-   前端代码无需掌握，只要了解它在干什么事情即可。
-   示例中，我们使用 `HTMLResponse`，通过接口的方式把前端代码响应的浏览器上；但其实直接写一个html文件，手动打开也可以的。

-   后端使用WebSocket，需要使用WebSocket这个对象，常用如下三个 协程函数。

~~~python
await websocket.accept()				# 建立连接
data = await websocket.receive_text()	 # 收消息
await websocket.send_text()				# 发消息
~~~

想要在fastAPI中使用websocket 需要安装标准版的uvicorn

~~~
pip3 install uvicorn[standard]
~~~





实例：简单版聊天

~~~python
from fastapi import FastAPI, WebSocket
from fastapi.responses import HTMLResponse

app = FastAPI()

html = """
<!DOCTYPE html>
<html>
    <head>
        <title>Chat</title>
    </head>
    <body>
        <h1>WebSocket Chat</h1>
        <form action="" onsubmit="sendMessage(event)">
            <input type="text" id="messageText" autocomplete="off"/>
            <button>Send</button>
        </form>
        <ul id='messages'>
        </ul>
        <script>
            var ws = new WebSocket("ws://localhost:8000/ws");
            ws.onmessage = function(event) {
                var messages = document.getElementById('messages')
                var message = document.createElement('li')
                var content = document.createTextNode(event.data)
                message.appendChild(content)
                messages.appendChild(message)
            };
            function sendMessage(event) {
                var input = document.getElementById("messageText")
                ws.send(input.value)
                input.value = ''
                event.preventDefault()
            }
        </script>
    </body>
</html>
"""


@app.get("/")
async def get():
    return HTMLResponse(html)


@app.websocket("/ws")
async def websocket_endpoint(websocket: WebSocket):
    await websocket.accept()
    while True:
        data = await websocket.receive_text()
        await websocket.send_text(f"Message text was: {data}")
~~~







## 13-3 WebSocket多人在线聊天室



-   实现多人在线聊天室
-   处理客户端下线通知
-   使用时间戳做客户端id



示例1：多人在线聊天室

~~~python
from typing import List

from fastapi import FastAPI, WebSocket, WebSocketDisconnect
from fastapi.responses import HTMLResponse

app = FastAPI()

html = """
<!DOCTYPE html>
<html>
    <head>
        <title>Chat</title>
    </head>
    <body>
        <h1>WebSocket Chat</h1>
        <h2>Your ID: <span id="ws-id"></span></h2>
        <form action="" onsubmit="sendMessage(event)">
            <input type="text" id="messageText" autocomplete="off"/>
            <button>Send</button>
        </form>
        <ul id='messages'>
        </ul>
        <script>
            var client_id = Date.now()
            document.querySelector("#ws-id").textContent = client_id;
            var ws = new WebSocket(`ws://localhost:8000/ws/${client_id}`);
            ws.onmessage = function(event) {
                var messages = document.getElementById('messages')
                var message = document.createElement('li')
                var content = document.createTextNode(event.data)
                message.appendChild(content)
                messages.appendChild(message)
            };
            function sendMessage(event) {
                var input = document.getElementById("messageText")
                ws.send(input.value)
                input.value = ''
                event.preventDefault()
            }
        </script>
    </body>
</html>
"""


class ConnectionManager:
    def __init__(self):
        self.active_connections: List[WebSocket] = []

    async def connect(self, websocket: WebSocket):
        await websocket.accept()
        self.active_connections.append(websocket)

    def disconnect(self, websocket: WebSocket):
        self.active_connections.remove(websocket)

    async def send_personal_message(self, message: str, websocket: WebSocket):
        await websocket.send_text(message)

    async def broadcast(self, message: str):
        for connection in self.active_connections:
            await connection.send_text(message)


manager = ConnectionManager()


@app.get("/")
async def get():
    return HTMLResponse(html)


@app.websocket("/ws/{client_id}")
async def websocket_endpoint(websocket: WebSocket, client_id: int):
    await manager.connect(websocket)	# 接收连接
    try:
        while True:
            data = await websocket.receive_text()		# 接收数据
            await manager.send_personal_message(f"You wrote: {data}", websocket)	# 自己发的消息自己看到
            await manager.broadcast(f"Client #{client_id} says: {data}")			# 广播，发给所有在线的客户端
    except WebSocketDisconnect:
        manager.disconnect(websocket)	# 断开连接
        await manager.broadcast(f"Client #{client_id} left the chat")	# 广播
~~~



示例2：优化自己发的消息不重复展示

~~~python
from typing import List

from fastapi import FastAPI, WebSocket, WebSocketDisconnect
from fastapi.responses import HTMLResponse

app = FastAPI()

html = """
<!DOCTYPE html>
<html>
    <head>
        <title>Chat</title>
    </head>
    <body>
        <h1>WebSocket Chat</h1>
        <h2>Your ID: <span id="ws-id"></span></h2>
        <form action="" onsubmit="sendMessage(event)">
            <input type="text" id="messageText" autocomplete="off"/>
            <button>Send</button>
        </form>
        <ul id='messages'>
        </ul>
        <script>
            var client_id = Date.now()
            document.querySelector("#ws-id").textContent = client_id;
            var ws = new WebSocket(`ws://localhost:8000/ws/${client_id}`);
            ws.onmessage = function(event) {
                var messages = document.getElementById('messages')
                var message = document.createElement('li')
                var content = document.createTextNode(event.data)
                message.appendChild(content)
                messages.appendChild(message)
            };
            function sendMessage(event) {
                var input = document.getElementById("messageText")
                ws.send(input.value)
                input.value = ''
                event.preventDefault()
            }
        </script>
    </body>
</html>
"""


class ConnectionManager:
    def __init__(self):
        self.active_connections: List[WebSocket] = []

    async def connect(self, websocket: WebSocket):
        await websocket.accept()
        self.active_connections.append(websocket)	# 收集有所的在线客户端

    def disconnect(self, websocket: WebSocket):
        self.active_connections.remove(websocket)	# 当客户端断线时，更新在线客户端列表

    async def send_personal_message(self, message: str, websocket: WebSocket):
        await websocket.send_text(message)

    async def broadcast(self, message: str, websocket: WebSocket):
        for connection in self.active_connections:
            if connection == websocket:		# 判断下，如果是自己就不再发送消息
                continue
            await connection.send_text(message)


manager = ConnectionManager()


@app.get("/")
async def get():
    return HTMLResponse(html)


@app.websocket("/ws/{client_id}")
async def websocket_endpoint(websocket: WebSocket, client_id: int):
    await manager.connect(websocket)
    try:
        while True:
            data = await websocket.receive_text()
            await manager.send_personal_message(f"You wrote: {data}", websocket)
            await manager.broadcast(f"Client #{client_id} says: {data}", websocket)
    except WebSocketDisconnect:
        manager.disconnect(websocket)
        await manager.broadcast(f"Client #{client_id} left the chat", websocket)
~~~



