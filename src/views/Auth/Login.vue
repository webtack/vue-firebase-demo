<template>
    <app-main>
        <app-container centerable>
            <app-sheet>
                <v-form
                    ref="form"
                    v-model="valid"
                    class="p-login-form"
                >
                    <h1 class="title mb-3 text-center">Login</h1>
                    <div class="p-login-form__field">
                        <label class="text--secondary" for="email">E-mail</label>
                        <v-text-field
                            id="email"
                            ref="email"
                            v-model="email"
                            :rules="emailRules"
                            placeholder="example@gmail.com"
                            autocomplete="no"
                            outlined
                            required
                            dense
                            background-color="input-bg"
                            @focus="autocomplete = 'on'"
                        ></v-text-field>
                    </div>
                    <div class="p-login-form__field">
                        <div class="d-flex">
                            <label class="text--secondary" for="password">Password</label>
                        </div>
                        <v-text-field
                            v-model="password"
                            :rules="passwordRules"
                            autocomplete="new-password"
                            :type="show1 ? 'text' : 'password'"
                            :append-icon="show2 ? 'mdi-eye' : 'mdi-eye-off'"
                            outlined
                            required
                            dense
                            background-color="input-bg"
                            @click:append="showPassword"
                        />
                        <div class="d-flex justify-end">
                            <a>Don't remember password?</a>
                        </div>
                    </div>
                    <div class="p-login-form__submit pt-3">
                        <v-btn
                            color="primary"
                            width="100%"
                            class="mr-4"
                            @click="validate"
                        >
                            Continue
                        </v-btn>
                    </div>
                </v-form>
            </app-sheet>
            <app-sheet class="mt-4">
            <span class="subtitle-1 text--secondary">I have no account 
                <router-link
                    :to="{name: 'register'}"
                    color="primary"
                    class="text-uppercase"
                >
                    Register now
                </router-link>
            </span>
            </app-sheet>
        </app-container>
    </app-main>
</template>

<script>

export default {
	name: 'Login',
	data: () => ({
		valid: true,
		show1: false,
		show2: false,
		password: null,
		passwordRules: [
			v => !!v || 'The field is required'
		],
		email: null,
		emailRules: [
			v => !!v || 'The field is required',
			v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
		]
	}),
	methods: {
		validate () {
			this.$refs.form.validate()

			if(this.valid) {
				this.login()
			}
		},
		showPassword() {
			this.show1 = !this.show1
			this.show2 = !this.show2
		},
		// Logging in
		async login() {
			// Loading
			this.loading = true;

			const payload = {
				email: this.email,
				password: this.password
			}
			
			console.log('Login', payload)
		},
	}
}

</script>

<style lang="scss">
    .p-login-form {
        @media(min-width: 320px) {
            min-width: 320px;
        }
    }

</style>