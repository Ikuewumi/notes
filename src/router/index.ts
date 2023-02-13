	import { createRouter, createWebHistory, type RouteRecordRaw } from "vue-router"

const routes = [
  { path: '/', component: () => import('../views/main/Home.vue') },
  { path: '/index', component: () => import('../views/main/Index.vue') },
  { path: '/you', component: () => import('../views/user/You.vue') },
  { path: '/create', component: () => import('../views/user/CreateNote.vue') },
  { path: '/dev', component: () => import('../views/Dev.vue') },
] as RouteRecordRaw[]

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes,
	scrollBehavior(to, from, savedPosition) {
		return { top: 0 }
 }
})

export default router