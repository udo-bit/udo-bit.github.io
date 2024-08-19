import {navbar} from "vuepress-theme-hope";

// @ts-ignore
// @ts-ignore
export default navbar([
    "/",
    // "/demo/",
    {
        text: "技术",
        icon: "kexuejishu-",
        link: "demo/",
    },
    // {
    //     text: "财经",
    //     icon: "jinrong-",
    //     link: "caijing/",
    // },
    // {
    //     text: '商务',
    //     icon: 'shangwu',
    //     link: '/commercial/'
    // },
    {
        text:'计划',
        icon:'plan',
        link:'/plans/'
    },
    {
        text:'笔记',
        icon:'code',
        link:'/others/'
    },
    {
        text: '友链',
        icon: 'wenjianjia',
        link: '/links/'
    },

    {
        text: "参考",
        icon: "book",
        children: [
            {
                text: "博客园",
                icon: "blog",
                link: "https://www.cnblogs.com/feel-myself/",
            },
            {
                text: "HOPE文档",
                icon: "book",
                link: "https://theme-hope.vuejs.press/zh/",
            },
            {
                text: "VITE官方文档",
                icon: "book",
                link: "https://cn.vitejs.dev/",
            },
            {
                text: "VUE官方文档",
                icon: 'book',
                link: "https://cn.vuejs.org/"
            },
            {
                text: "Naive UI官方文档",
                icon: 'book',
                link: 'https://www.naiveui.com/zh-CN/os-theme'
            }
        ],
    },

]);
