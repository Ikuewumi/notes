	import { createRouter, createWebHistory, type RouteRecordRaw } from "vue-router"

const routes = [
  { path: '/', component: () => import('../views/main/Home.vue') },
  { path: '/index', component: () => import('../views/main/Index.vue') },
] as RouteRecordRaw[]

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes,
	scrollBehavior(to, from, savedPosition) {
		return { top: 0 }
 }
})

export default router