<template>
    <app-main>
        <app-container centerable>
            <app-sheet
            >
                <v-form
                    ref="form"
                    v-model="valid"
                    class="p-register-form"
                >
                    <h1 class="title mb-3 text-center">Register</h1>
                    <div class="p-register-form__field">
                        <label class="text--secondary" for="email">E-mail</label>
                        <v-text-field
                            v-model="email"
                            :rules="emailRules"
                            placeholder="admin@example.com"
                            autocomplete="no"
                            outlined
                            required
                            dense
                            background-color="input-bg"
                        ></v-text-field>
                    </div>
                    <div class="p-register-form__field">
                        <label class="text--secondary" for="name">Name</label>
                        <v-text-field
                            v-model="name"
                            :rules="nameRules"
                            placeholder="Piter Pan"
                            autocomplete="no"
                            outlined
                            required
                            dense
                            background-color="input-bg"
                            @focus="autocomplete = 'on'"
                        ></v-text-field>
                    </div>
                    <div class="p-register-form__field">
                        <label class="text--secondary" for="email">Password</label>
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
                        ></v-text-field>
                    </div>
                    <div class="p-register-form__field">
                        <label class="text--secondary" for="email">Password again</label>
                        <v-text-field
                            v-model="passwordAgain"
                            :rules="passwordAgainRules"
                            autocomplete="new-password"
                            :type="show3 ? 'text' : 'password'"
                            :append-icon="show4 ? 'mdi-eye' : 'mdi-eye-off'"
                            outlined
                            required
                            dense
                            background-color="input-bg"
                            @click:append="showPasswordAgain"
                        ></v-text-field>
                    </div>
                    <div class="p-register-form__submit pt-3">
                        <v-btn
                            color="primary"
                            width="100%"
                            class="mr-4"
                            @click="validate"
                        >
                            Register
                        </v-btn>
                    </div>
                </v-form>
            </app-sheet>
            <app-sheet
                class="mt-4"
            >
                <span class="subtitle-1 text--secondary">
                    I already have an account 
                    <router-link
                        :to="{name: 'login'}"
                        color="primary"
                        class="text-uppercase"
                    >
                        Log in
                    </router-link>
                </span>
            </app-sheet>
        </app-container>
    </app-main>
</template>

<script>

export default {
	name: 'Register',
	data: () => ({
		valid: true,
		show1: false,
		show2: false,
		show3: false,
		show4: false,
		name: null,
		nameRules: [
			v => !!v || 'The field is required',
			v => (v && (v.length >= 2 && v.length <= 64)) || 'From 2 to 64 characters. Letters, spaces, and signs - and ',
			v => /^[a-zA-Zа-яА-Я -]+$/.test(v) || 'From 2 to 64 characters. Letters, spaces, and signs - and'
		],
		password: null,
		passwordAgain: null,
		passwordRules: [
			v => !!v || 'The field is required',
			v => /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/.test(v) || 'The password is not save',
		],
		email: null,
		emailRules: [
			v => !!v || 'The field is required',
			v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
		]
	}),
	computed: {
		passwordAgainRules() {
			const password = this.password
			const passwordAgain = this.passwordAgain

			return [
				!!passwordAgain || 'The field is required',
				passwordAgain && passwordAgain === password || 'Password does not match',
			]
		}
	},
	methods: {
		validate() {
			this.$refs.form.validate()

			if (this.valid) {
				this.register()
			}
		},
		showPassword() {
			this.show1 = !this.show1
			this.show2 = !this.show2
		},
		showPasswordAgain() {
			this.show3 = !this.show3
			this.show4 = !this.show4
		},
		register() {
			// Loading
			this.loading = true;

			const payload = {
				name: this.name,
				surname: this.surname,
				email: this.email,
				password: this.password,
				country: this.country,
				birthDate: this.birthDate,
				policy: this.email
			}

			console.log('register', payload)
		}
	}
}

</script>

<style lang="scss">
    .p-register-form {
        @media(min-width: 320px) {
            min-width: 320px;
        }
    }

</style>
