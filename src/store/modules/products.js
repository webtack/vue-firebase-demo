import Vue from 'vue'
import { getLocations, getCategories, getLikedProducts } from '@/api/products'
import {ToastNotification} from '@/services/Notifications'

const state = {
	locations: [],
	categories: [],
	liked: 0
}

const mutations = {
	SET_LOCATIONS: (state, collection) => {
		Vue.set(state, 'locations', collection)
	},

	SET_CATEGORIES: (state, collection) => {
		Vue.set(state, 'categories', collection)
	},

	SET_LIKED: (state, count) => {
		Vue.set(state, 'liked', count)
	}
}

const actions = {
	async fetchLocations({commit}) {
		getLocations()
				.then((querySnapshot) => {
					const collection = []

					querySnapshot.forEach((doc) => {
						collection.push(Object.assign({id: doc.id}, doc.data()))
					})

					commit('SET_LOCATIONS', collection)
				})
				.catch(err => {
					//
					new ToastNotification({
						message: err.message,
						type: ToastNotification.type.error,
					})
				})	
	},

	async fetchCategories({commit}) {
		getCategories()
				.then((querySnapshot) => {
					const collection = []

					querySnapshot.forEach((doc) => {
						collection.push(Object.assign({id: doc.id}, doc.data()))
					})

					commit('SET_CATEGORIES', collection)
				})
				.catch(err => {
					//
					new ToastNotification({
						message: err.message,
						type: ToastNotification.type.error,
					})
				})
	},
	
	
	async fetchCountLikedProducts({commit}, uid) {
		if(!uid) {
			return
		}
		
		getLikedProducts(uid)
				.then(snap => {			
					commit('SET_LIKED', snap.size)
				})
		
	}
	
}

export default {
	namespaced: true,
	state,
	mutations,
	actions
}
