import {createRouter, createWebHashHistory} from "vue-router";

import HomePage from "./components/pages/HomePage.vue"

const routes = [
    {path: '/', component: HomePage}
]

export const router = createRouter({
    history: createWebHashHistory(),
    routes
})
