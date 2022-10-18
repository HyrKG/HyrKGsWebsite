import {createRouter, createWebHistory} from "vue-router";

import CommonPage from "./components/pages/common/CommonView.vue"
import HomePage from "./components/pages/common/HomePage.vue"
import DocumentPage from './components/pages/common/DocumentPage.vue'
import AboutMePage from './components/pages/about/AboutMePage.vue'
import PlayGroundPage from "./components/pages/playground/PlaygroundPage.vue"
import ShareDesk from "./components/pages/common/ShareDeskPage.vue"

const routes = [
    // 这是一个common页面，默认开启header，并且页面可有header跳转
    {path: '/', redirect: "/home"},
    {
        path: '/common', alias: "/", component: CommonPage, children: [
            {path: 'home', name: "HomePage", component: HomePage},
            {path: "share-desk", name: "ShareDesk", component: ShareDesk},
            {path: 'doc', name: "Documents", component: DocumentPage},
            {path: "playground", name: "Playground", component: PlayGroundPage}
        ]
    },
    // 这是一个singleton页面，对应组件即对应页面。
    {path: '/about', name: "About", component: AboutMePage}
]

export const router = createRouter({
    history: createWebHistory(),
    routes
})

router.beforeEach((to, from, next) => {
    const newTitle = to.name ? String(to.name) : "Web"
    document.title = "HyrKG's " + newTitle;
    next()
})
