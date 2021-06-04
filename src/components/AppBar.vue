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
            <app-bar-menu v-if="!isMobile" :items="menuItems"/>
            <app-bar-mobile-menu v-else :items="menuItems"/>
            <span class="ml-2">
                <favorites-btn></favorites-btn>
            </span>
            <span class="ml-3">
                <user-menu></user-menu>
            </span>
            
        </v-container>
    </v-app-bar>
</template>

<script>
import Logo from '@/components/Logo'
import UserMenu from '@/components/UserMenu'
import AppBarMenu from '@/components/AppBarMenu'
import AppBarMobileMenu from '@/components/AppBarMobileMenu'
import FavoritesBtn from '@/components/FavoritesBtn'
import Auth from '@/services/Auth'

export default {
	name: 'AppBar',
	components: {Logo, UserMenu, AppBarMenu, AppBarMobileMenu, FavoritesBtn},
	props: {
		dark: {
			type: Boolean,
			default: false
		}
	},
    data() {
		return {
			menu: [
                {
                	text: 'Sell',
                    icon: 'mdi-view-list',
                    color: 'success',
                    to: 'sell.list'
                },
				{
					text: 'Add',
					icon: 'mdi-plus',
					color: 'primary',
					to: 'sell.create'
				}
            ]
        }
    },
    computed: {
		isMobile() {
		    return this.$vuetify.breakpoint['mdAndDown']	
        },
		menuItems() {
			const items = []
            
            for (const index in this.menu) {
	            if(Auth.can(this.menu[index].to)) {
		            items.push(this.menu[index])
                }
            } 
            
            return items
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