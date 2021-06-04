const getters = {
	locations: state => state.products.locations,
	categories: state => state.products.categories,
	liked: state => state.products.liked,
	user: state => state.user.user
}

export default getters