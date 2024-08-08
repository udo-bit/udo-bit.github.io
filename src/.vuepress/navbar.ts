import { navbar } from "vuepress-theme-hope";

// @ts-ignore
// @ts-ignore
export default navbar([
  "/",
  // "/demo/",
  {
    text:"技术",
    icon: "code",
    prefix: "demo/",
    children:[
      {text:"前端",icon:"/logos--chrome-web-store.png",link:"前端/"},
      {text:"后端",icon:"/logos--chrome-web-store.png",link:"后端/"},
      {text:"安全",icon:"/logos--chrome-web-store.png",link:"安全/"},
      {text:"移动端",icon:"/logos--chrome-web-store.png",link:"移动端/"}
    ],
  },
  {
    text:"金融",
    icon:"money",
    prefix:"finance/",
    children:[
      {text:"股票",icon:"/logos--chrome-web-store.png",link:"金融/"},
    ]
  },

  {
    text: "项目",
    icon: 'folder',
    prefix: "/posts/",
    children: [
      {
        text: "Apple",
        icon: "pen-to-square",
        prefix: "apple/",
        children: [
          { text: "Apple1", icon: "pen-to-square", link: "1" },
          { text: "Apple2", icon: "pen-to-square", link: "2" },
          { text: "Apple2", icon: "pen-to-square", link: "3" },
          { text: "Apple2", icon: "pen-to-square", link: "4" },
        ],
      },
      {
        text: "Banana",
        icon: "pen-to-square",
        prefix: "banana/",
        children: [
          {
            text: "Banana 1",
            icon: "pen-to-square",
            link: "1",
          },
          {
            text: "Banana 2",
            icon: "pen-to-square",
            link: "2",
          },
          {
            text: "Banana 2",
            icon: "pen-to-square",
            link: "3",
          },
          {
            text: "Banana 2",
            icon: "pen-to-square",
            link: "4",
          },
        ],
      },
      { text: "Cherry", icon: "pen-to-square", link: "cherry" },
      { text: "Dragon Fruit", icon: "pen-to-square", link: "dragonfruit" },
      "tomato",
      "strawberry",
    ],
  },
  {
    text:"参考",
    icon:"book",
    children:[
      {
        text: "博客园",
        icon: "blog",
        link: "https://www.cnblogs.com/feel-myself/",
      },
      {
        text:"HOPE文档",
        icon:"book",
        link:"https://theme-hope.vuejs.press/zh/",
      },
    ],
  },

]);
