<template>
    <v-container v-bind="vContainerPorps" class="app-container" :style="vContainerStyles">
        <v-row v-bind="vRowPorps">
            <component :is="colComponent">
                <slot></slot>
            </component>
        </v-row>
    </v-container>
</template>

<script>

export default {
	name: 'AppContainer',
	props: {
		centerable: {
			type: Boolean,
			default: false
		},
		maxWidth: {
			type: String,
			default: null
		}
	},
	computed: {
		vContainerPorps() {
			return {
				['fill-height']: this.centerable,
				class: 'pa-4'
			}
		},
		vContainerStyles() {
			const maxWidth = this.maxWidth ? `max-width: ${this.maxWidth}px;` : ''
			return maxWidth
        },
		vRowPorps() {
			return {
				align: this.centerable ? 'center' : null,
				justify: this.centerable ? 'center' : null
			}
		},
		colComponent() {
			return this.centerable ? 'div' : 'v-col'
		}
	}
}

</script>