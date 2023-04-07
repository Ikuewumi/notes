import { type RouteRecordRaw, createRouter, createWebHistory } from "vue-router"

const routes:RouteRecordRaw[] = [
    {
        name: "home",
        path: "/",
        component: () => import('../views/Home.vue')
    },

    {
        name: "notes",
        path: "/notes",
        component: () => import('../views/Notes.vue')
    },

    {
        name: "dev",
        path: "/dev",
        component: () => import('../views/Dev.vue')        
    }
]


// /:catchAll(.*)

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes,
    scrollBehavior() {
       return { top: 0 }
    }
})



 export default router