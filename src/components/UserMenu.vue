<template>
    <v-menu v-if="user" offset-y>
        <template v-slot:activator="{ on, attrs }">
            <v-btn
                color="primary"
                icon
                v-bind="attrs"
                v-on="on"
            >                
                <v-icon>mdi-account-circle</v-icon>
            </v-btn>
        </template>
        <v-list dense>
            <v-list-item>
                <v-list-item-icon>
                    <v-icon dense>mdi-account</v-icon>
                </v-list-item-icon>
                <v-list-item-title>
                    {{ user.displayName }}
                </v-list-item-title>
            </v-list-item>
            <v-list-item>
                <v-list-item-icon>
                    <v-icon dense>mdi-email</v-icon>
                </v-list-item-icon>
                <v-list-item-title>
                    {{ user.email }}
                </v-list-item-title>
            </v-list-item>
            <v-divider></v-divider>
            <v-list-item @click="logoutHandler">                
                <v-list-item-icon>
                    <v-icon dense>mdi-exit-to-app</v-icon>
                </v-list-item-icon>
                <v-list-item-title>
                    Logout
                </v-list-item-title>
            </v-list-item>
        </v-list>
    </v-menu>
    <v-btn
        v-else
        :to="{name: 'login'}"
        class="ml-3"
        text
    >
        Login
    </v-btn>
</template>

<script>
import { logout } from '@/api/user'
import Auth from '@/services/Auth'

export default {
	name: 'UserMenu',
	computed: {
		user() {
			return Auth.isAuthenticated()
					? Auth.user
					: null
		}
	},
    methods: {
	    logoutHandler() {
		    logout()
				    .then(() => {
					    this.$router.replace({
						    name: "login"
					    })
				    })
        }
    }
}
</script>