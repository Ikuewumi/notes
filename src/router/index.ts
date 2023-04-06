import { type RouteRecordRaw, createRouter, createWebHistory } from "vue-router"

const routes:RouteRecordRaw[] = [
    {
        name: "home",
        path: "/",
        component: () => import('../views/Home.vue')
    }
]


// /:catchAll(.*)

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes,
    scrollBehavior(to, from, savedPosition) {
       return { top: 0 }
    }
})



 export default router