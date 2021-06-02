<template>
    <v-sheet
        :max-width="maxWidth"
        :class="wrapperClass"
    >
        <slot></slot>
    </v-sheet>
</template>

<script>

export default {
	name: 'AppSheet',
    props: {
		padding: {
			type: String,
            default: '5'
        },
        maxWidth: {
	        type: Number,
	        default: null
        }        
    },
    computed: {
		wrapperClass() {
			return `pa-${this.padding} app-sheet`
        }
    }
}

</script>