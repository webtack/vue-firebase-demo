const state = {
	items: [
		{
			id: 1,
			name: 'Item name',
			preview: 'https://cdn.vuetifyjs.com/images/cards/sunshine.jpg',
			liked: false,
			price: '575.09'
		},
		{
			id: 2,
			name: 'Item name',
			preview: 'https://cdn.vuetifyjs.com/images/cards/sunshine.jpg',
			liked: true,
			price: '575.09'
		},
		{
			id: 3,
			name: 'Item name',
			preview: 'https://cdn.vuetifyjs.com/images/cards/sunshine.jpg',
			liked: false,
			price: '575.09'
		},
		{
			id: 4,
			name: 'Item name',
			preview: 'https://cdn.vuetifyjs.com/images/cards/sunshine.jpg',
			liked: false,
			price: '575.09'
		},
		{
			id: 5,
			name: 'Item name',
			preview: 'https://cdn.vuetifyjs.com/images/cards/sunshine.jpg',
			liked: false,
			price: '575.09'
		},
		{
			id: 6,
			name: 'Item name',
			preview: 'https://cdn.vuetifyjs.com/images/cards/sunshine.jpg',
			liked: false,
			price: '575.09'
		}
	]
}

const mutations = {
	RESET_STATE: (state) => {
		Object.assign(state, {})
	}
}

const actions = {}

export default {
	namespaced: true,
	state,
	mutations,
	actions
}
