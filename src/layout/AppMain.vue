<template>
    <v-app class="apico">
        <app-bar :dark="dark"></app-bar>
        <v-main>
            <slot></slot>
        </v-main>
    </v-app>
</template>

<script>
import AppBar from '@/components/AppBar'

export default {
	name: 'AppMain',
	components: {AppBar},
	props: {
		dark: {
			type: Boolean,
			default: false
		}
	}
}

</script>