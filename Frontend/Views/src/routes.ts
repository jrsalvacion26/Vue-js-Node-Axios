import Vue  from "vue";
import {createRouter,createWebHistory} from "vue-router";

import Home from "../Pages/Home.vue";
import Edit from "../Pages/Edit.vue";

const routes = [
    {path:'', name:'home',component:Home},
    {path:'/edit/:id', name:'edit',component:Edit},
]

const router = createRouter({
    routes,
    history:createWebHistory()
})

export default router
