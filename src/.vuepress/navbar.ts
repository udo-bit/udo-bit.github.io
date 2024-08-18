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
        // children: [
        //     {text: '概览', icon: 'wenjianjia', link: 'demo/'},
        //     {text: "前端", icon: "html5", link: "demo/front/"},
        //     {text: "后端", icon: "houduankaifa", link: "demo/back-ends/"},
        //     {text: "安全", icon: "anquan", link: "demo/安全/"},
        //     {text: "移动端", icon: "yidongduan", link: "demo/移动端/"}
        // ],
    },
    {
        text: "财经",
        icon: "jinrong-",
        link: "caijing/",
        // children: [
        //     {text: "金融", icon: "gupiao", link: "finance/"},
        //     {text: "法律", icon: "falv", link: "law/"},
        // ]
    },
    {
        text: '商务',
        icon: 'shangwu',
        link: '/commercial/'
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
