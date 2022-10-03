import {createRouter, createWebHistory} from "vue-router";

import CommonPage from "./components/pages/common/CommonPage.vue"
import HomePage from "./components/pages/common/HomePage.vue"
import DocumentPage from './components/pages/common/DocumentPage.vue'
import AboutMePage from './components/pages/about/AboutMePage.vue'


const routes = [
    {
        path: '/common', alias: "/", component: CommonPage, children: [
            {path: 'home', alias: "/", component: HomePage},
            {path: 'doc', component: DocumentPage},
        ]
    },
    {path: '/about', component: AboutMePage}
]

export const router = createRouter({
    history: createWebHistory(),
    routes
})
