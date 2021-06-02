import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter);

const routes = [
	{
		path: '/',
		name: 'home',
		component: Home
	},
	{
		path: '/auth/login',
		name: 'login',
		// route level code-splitting
		// this generates a separate chunk (about.[hash].js) for this route
		// which is lazy-loaded when the route is visited.
		component: () => import(/* webpackChunkName: "login" */ '@/views/Auth/Login.vue'),
	},
	{
		path: '/auth/register',
		name: 'register',
		component: () => import(/* webpackChunkName: "register" */ '@/views/Auth/Register.vue')
	},
	{
		path: '/sell/list',
		name: 'sell.list',
		component: () => import(/* webpackChunkName: "register" */ '@/views/Sell')
	},
	{
		path: '/sell/create',
		name: 'sell.create',
		component: () => import(/* webpackChunkName: "register" */ '@/views/Sell/SellCreate')
	}
];

const router = new VueRouter({
	mode: 'history',
	base: process.env.BASE_URL,
	routes
});

export default router
