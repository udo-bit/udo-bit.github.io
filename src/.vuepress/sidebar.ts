import {sidebar} from "vuepress-theme-hope";

export default sidebar({
    "/demo/": [
        {
            text: "概览",
            icon: "wenjianjia",
            children: 'structure'
        }],
    "/demo/front/": [
        {
            text: "前端技术",
            icon: "html5",
            children: 'structure',
        },

    ],
    "/demo/back-ends/": [
        {
            text: "后端开发",
            icon: "houduankaifa",
            children: 'structure',
        }
    ],
    "/others/":[
        {
            text:'笔记',
            icon: "code",
            children: 'structure'
        }
    ],
    '/commercial/': [
        {
            text: '商务',
            icon: 'shangwu',
            children: 'structure'
        }
    ],
    '/caijing/': [
        {
            text: '财经',
            icon: 'caijing',
            children: 'structure'
        }

    ]
});

// "/": [
//   "",
//   {
//     text: "Demo",
//     icon: "laptop-code",
//     prefix: "demo/",
//     link: "demo/",
//     children: "structure",
//   },
//   {
//     text: "Articles",
//     icon: "book",
//     prefix: "posts/",
//     children: "structure",
//   },
//   "intro",
//   {
//     text: "Slides",
//     icon: "person-chalkboard",
//     link: "https://plugin-md-enhance.vuejs.press/guide/content/revealjs/demo.html",
//   },
// ],
