<template>
    <v-app-bar
        app
        flat
        :dark="dark"
        class="app-bar"
    >
        <v-container class="py-0 fill-height">
            <logo :dark="dark"/>
            <v-spacer/>
            <v-btn
                :to="{name: 'sell.list'}"
                color="primary"
            >
                <v-icon left>mdi-view-list</v-icon>
                Sell
            </v-btn>
            <v-btn
                :to="{name: 'sell.create'}"
                color="success"
                class="ml-3"
            >
                <v-icon left>mdi-plus</v-icon>
                Add
            </v-btn>
            <v-btn
                :to="{name: 'login'}"
                class="ml-3"
                text
            >
                Login
            </v-btn>        
        </v-container>
    </v-app-bar>
</template>

<script>
import Logo from '@/components/Logo'

export default {
	name: 'AppBar',
	components: {Logo},
	props: {
		dark: {
			type: Boolean,
			default: false
		}
	}
}

</script>

<style lang="scss">
    .app-bar {
        &.theme--dark.v-app-bar.v-toolbar.v-sheet {
            background: #090810;
        }
    }

</style>