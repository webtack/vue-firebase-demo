import NotificationAbstract from "./NotificationAbstract";
import Vue from 'vue'

/**
 * @see https://www.npmjs.com/package/vue-toast-notification
 */
export default class ToastNotification extends NotificationAbstract {

	$_defaultOptions() {
		return {
			position: 'top',
			autoplay: true,
			duration: 5 * 1000
		}
	}
	
	open() {
		Vue.$toast.open(this.options);
	}
	
}