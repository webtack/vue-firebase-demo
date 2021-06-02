<template>
    <v-btn
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
        }
    },
    methods: {
	    onClickHandler() {
			this.$emit('onClick')
        }
    }
}

</script>