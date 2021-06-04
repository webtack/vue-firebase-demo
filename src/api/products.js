import { fireStore } from '@/registerFirebaseConfig'

export function getProducts(filter) {
	const collection = "products"
	
	let query = fireStore.collection(collection)
	
	if(filter) {
		if(filter.name) {
			query = fireStore.collection(collection).where('name', '==', filter.name)
		} else if(filter.priceFrom && filter.priceTo) {
			query = fireStore.collection(collection)
					.where('price', '>=', Number(filter.priceFrom))
					.where('price', '<=', Number(filter.priceTo))
					.orderBy('price', 'asc')
		} else if(filter.category) {
			query = fireStore.collection(collection).where('category', '==', filter.category)
		} else if(filter.location) {
			query = fireStore.collection(collection).where('location', '==', filter.location)
		} else if(filter.liked) {
			query = fireStore.collection(collection).where('liked', '==', filter.liked)
		}
	}

	return query.get()
}

export function getLikedProducts(filter) {
	const collection = "products"
	
	return fireStore.collection(collection)
			.where('liked', '==', true)
			.get()
}

export function addProduct(payload) {
	return fireStore.collection("products").add(payload)
}

export function updateProduct(payload) {
	return fireStore.collection("products").doc(payload.id).update(payload.data)
}

export function getLocations(payload) {
	return fireStore.collection("locations").get()
}

export function getCategories(payload) {
	return fireStore.collection("categories").get()
}