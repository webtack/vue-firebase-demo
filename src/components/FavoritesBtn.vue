<template>
    <v-btn
        v-if="auth.can('sell.favorites')"
        icon
        fab
        small
        elevation="2"
        color="white"
        :to="{name: 'sell.favorites'}"
    >
        <v-icon color="primary">{{ icon }}</v-icon>
    </v-btn>
</template>

<script>
import Auth from '@/services/Auth'

export default {
	name: 'SellFavoriteAction',
	computed: {
		liked() {
		    return this.$store.getters.liked	
        },
		icon() {
			return this.liked > 0 ? 'mdi-heart' : 'mdi-heart-outline'
		},
        auth() {
			return Auth
        }
	},
	methods: {
		onClickHandler() {
			this.$router.push({name: 'sell.favorites'})
		}
	}
}

</script>