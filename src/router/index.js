import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Auth from '@/services/Auth'
import {ToastNotification} from '@/services/Notifications'

Vue.use(VueRouter);

const routes = [
	{
		path: '/',
		name: 'home',
		component: () => import(/* webpackChunkName: "sell.list" */ '@/views/Sell'),
		meta: {
			protected: true,
			redirect: 'sell.list'
		}
	},
	{
		path: '/auth/login',
		name: 'login',
		// route level code-splitting
		// this generates a separate chunk (about.[hash].js) for this route
		// which is lazy-loaded when the route is visited.
		component: () => import(/* webpackChunkName: "login" */ '@/views/Auth/Login.vue'),
		meta: {
			protected: false
		}
	},
	{
		path: '/auth/register',
		name: 'register',
		component: () => import(/* webpackChunkName: "register" */ '@/views/Auth/Register.vue'),
		meta: {
			protected: false
		}
	},
	{
		path: '/sell/list',
		name: 'sell.list',
		component: () => import(/* webpackChunkName: "sell.list" */ '@/views/Sell'),
		meta: {
			protected: false
		}
	},
	{
		path: '/sell/favorites',
		name: 'sell.favorites',
		component: () => import(/* webpackChunkName: "sell.list" */ '@/views/Sell'),
		meta: {
			protected: true
		}
	},
	{
		path: '/sell/create',
		name: 'sell.create',
		component: () => import(/* webpackChunkName: "sell.create" */ '@/views/Sell/SellCreate'),
		meta: {
			protected: true
		}
	}
];

const createRouter = () => new VueRouter({
	mode: 'history',
	base: process.env.BASE_URL,
	routes
});

const router = createRouter()

// Detail see: https://github.com/vuejs/vue-router/issues/1234#issuecomment-357941465
export function resetRouter() {
	const newRouter = createRouter()
	router.matcher = newRouter.matcher // reset router
}

// Check Permissions
router.beforeEach((to, from, next) => {	
	
	if(to.meta.redirect) {
		next({name: to.meta.redirect})
	}
	
	// console.log(Auth.can(to.name), 1)

	// if(!Auth.can(to.name)) {
	// 	new ToastNotification({
	// 		message: 'This page is available to authorized users only. First you need log in.',
	// 		type: ToastNotification.type.error,
	// 	})
	//
	// 	next({ name: 'login' })
	// }
	// else {
	// 	next()
	// }

	next()
})

// export default router
export default router
