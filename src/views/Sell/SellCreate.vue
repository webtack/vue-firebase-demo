<template>
    <app-main dark>
        <app-container maxWidth="1136">
            <app-sheet padding="6">
                <v-row no-gutters justify="center">
                    <v-col sm="8">
                        <v-form
                            ref="form"
                            v-model="valid"
                            class="p-sell-create-form"
                        >
                            <h1 class="title my-6 text-center">Add Product</h1>
                            <div class="p-sell-create-form__field">
                                <label class="text--secondary" for="name">Name <span class="red--text">*</span></label>
                                <v-text-field
                                    id="name"
                                    ref="name"
                                    v-model="name"
                                    :rules="nameRules"
                                    placeholder="For example: Irom man suit"
                                    outlined
                                    required
                                    background-color="input-bg"
                                ></v-text-field>
                            </div>
                            <div class="p-sell-create-form__field">
                                <label class="text--secondary" for="location">Location <span class="red--text">*</span></label>
                                <v-select
                                    id="location"
                                    ref="location"
                                    v-model="location"
                                    :rules="locationRules"
                                    placeholder="For example: Los Angeles, CA"
                                    outlined
                                    required
                                    background-color="input-bg"
                                ></v-select>
                            </div>
                            <div class="p-sell-create-form__field">
                                <label class="text--secondary" for="description">Description <span class="red--text">*</span></label>
                                <v-textarea
                                    id="description"
                                    ref="description"
                                    v-model="description"
                                    :rules="descriptionRules"
                                    placeholder="For example: Irom man suit"
                                    outlined
                                    required
                                    background-color="input-bg"
                                ></v-textarea>
                            </div>
                            <div class="p-sell-create-form__field">
                                <label class="text--secondary" for="preview">Preview <span class="red--text">*</span></label>
                                <v-file-input
                                    id="preview"
                                    ref="preview"
                                    accept="image/png, image/jpeg, image/bmp"
                                    v-model="preview"
                                    :rules="previewRules"
                                    outlined
                                    required
                                    background-color="input-bg"
                                    prepend-icon="mdi-image"
                                ></v-file-input>
                            </div>
                            <div class="p-sell-create-form__field">
                                <label class="text--secondary" for="price">Price <span class="red--text">*</span></label>
                                <v-text-field
                                    id="price"
                                    ref="price"
                                    v-model="price"
                                    :rules="priceRules"
                                    placeholder="For example: 100.56"
                                    outlined
                                    required
                                    background-color="input-bg"
                                ></v-text-field>
                            </div>
                            <div class="p-sell-create-form__submit pt-3 mb-6">
                                <v-btn
                                    color="success"
                                    class="mr-4"
                                    @click="validate"
                                >
                                    <v-icon left>mdi-plus</v-icon>
                                    Create
                                </v-btn>
                            </div>
                        </v-form>
                    </v-col>
                </v-row>
            </app-sheet>
        </app-container>
    </app-main>
</template>

<script>

export default {
	name: 'SellCreate',
	data: () => ({
        loading: false,
		valid: true,
		name: null,
		nameRules: [
			v => !!v || 'The field is required'
		],
		location: null,
		locationRules: [
			v => !!v || 'The field is required'
		],
		description: null,
		descriptionRules: [
			v => !!v || 'The field is required'
		],
		preview: null,
		previewRules: [
			v => !!v || 'The field is required'
		],
		price: null,
		priceRules: [
			v => !!v || 'The field is required'
		],
        
        
	}),
	methods: {
		validate () {
			this.$refs.form.validate()

			if(this.valid) {
				this.create()
			}
		},
		// Logging in
		async create() {
			// Loading
			this.loading = true;

			const payload = {
				name: this.name,
				location: this.location,
				description: this.description,
				preview: this.preview,
				price: this.price
			}

			console.log('create', payload)
		},
	}
}

</script>

<style lang="scss">

</style>