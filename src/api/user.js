import firebase from 'firebase'

export function register(payload) {
	return firebase
			.auth()
			.createUserWithEmailAndPassword(payload.email, payload.password)
}

export function login(payload) {
	return firebase
			.auth()
			.signInWithEmailAndPassword(payload.email, payload.password)
}

export function logout() {
	return firebase
			.auth()
			.signOut()
}