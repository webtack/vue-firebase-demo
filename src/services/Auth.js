import store from '@/store'
import router from '@/router'

class Auth {

	constructor() {		
		this._user = store.getters.user
		this._router = router
	}
	
	getUserData() {
		return this._user.data
	}
	
	get user() {
		return this.getUserData()
	}

	/**
	 * 
	 * @return {boolean}
	 */
	isAuthenticated() {
		return this._user.loggedIn
	}

	/**
	 * Check permissions by route name
	 * 
	 * @param routeName
	 * @return {boolean}
	 */
	can(routeName) {
		const resolveRoute = this._router.resolve({name: routeName})
		
		if(!resolveRoute) {
			return false
		}
		
		const resolved = resolveRoute.resolved
		const isProtected = resolved.meta.protected
		
		if(!isProtected) {
			return true
		}

		//console.log(resolved.name, resolved, isProtected, isProtected && this.isAuthenticated())
		
		return isProtected && this.isAuthenticated()
	}
}

export default new Auth()