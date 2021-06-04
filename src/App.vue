<template>
    <router-view :key="$route.name"></router-view>
</template>

<script>
import Auth from '@/services/Auth'
import {ToastNotification} from '@/services/Notifications'

export default {
	name: 'App',
	data() {
		return {
			links: [
				{
					to: {name: 'news.list'},
					title: 'News'
				},
				{
					to: {name: 'tags.list'},
					title: 'Tags'
				}
			]
		}
	},
	watch: {
		$route(route) {		
			
//            if(!Auth.can(route.name)) {
//	            new ToastNotification({
//		            message: 'This page is available to authorized users only. First you need log in.',
//		            type: ToastNotification.type.error,
//	            })
//                
//                this.$router.replace({name: 'login'})
//            }
		}
    },
    created() {
		this.$store.dispatch('products/fetchLocations')
		this.$store.dispatch('products/fetchCategories') 
    },
}
</script>

<style lang="scss">
    .apico {
        background: #F8F8F8 !important;
    }
</style>