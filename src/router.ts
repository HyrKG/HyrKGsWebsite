import {createRouter, createWebHashHistory} from "vue-router";

import HomePage from "./components/pages/HomePage.vue"
import DocumentPage from './components/pages/DocumentPage.vue'
import AboutMePage from './components/pages/AboutMePage.vue'


const routes = [
    {path: '/', component: HomePage},
    {path: '/doc', component: DocumentPage},
    {path: '/me', component: AboutMePage}
]

export const router = createRouter({
    history: createWebHashHistory(),
    routes
})
