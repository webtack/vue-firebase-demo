<template>
    <v-btn
        v-if="auth.can('sell.favorites')"
        fab
        dark
        small
        elevation="2"
        color="white"
        @click="onClickHandler"
    >
        <v-icon color="primary">{{ icon }}</v-icon>
    </v-btn>
</template>

<script>
import Auth from '@/services/Auth'

export default {
	name: 'SellFavoriteAction',
    props: {
		liked: {
			type: Boolean,
            required: true
        }
    },
    computed: {
		icon() {
			return this.liked ? 'mdi-heart' : 'mdi-heart-outline'
        },
	    auth() {
		    return Auth
	    }
    },
    methods: {
	    onClickHandler() {
			this.$emit('onClick')
        }
    }
}

</script>