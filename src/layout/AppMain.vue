<template>
    <v-app class="apico">
        <app-bar :dark="dark"></app-bar>
        <v-main>
            <template>
                <v-overlay color="white" :value="loading">
                    <v-progress-circular
                        :size="50"
                        color="primary"
                        indeterminate
                    />
                </v-overlay>
                <slot></slot>
            </template>
        </v-main>
    </v-app>
</template>

<script>
import AppBar from '@/components/AppBar'

export default {
	name: 'AppMain',
	components: {
		AppBar
    },
	props: {
		dark: {
			type: Boolean,
			default: false
		},
        loading: {
	        type: Boolean,
	        default: false
        }
	}
}

</script>