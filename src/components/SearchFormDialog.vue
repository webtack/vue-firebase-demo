<template>
    <v-dialog
        v-model="dialog"
        max-width="360"
    >
        <template v-slot:activator="{ on, attrs }">
            <v-btn
                icon
                v-bind="attrs"
                v-on="on"
            >
                <v-icon>mdi-magnify</v-icon>
            </v-btn>
        </template>
        <v-card>
            <v-card-title class="text-h5">
                Search products
            </v-card-title>
            <v-divider></v-divider>
            <v-card-text class="mt-6">
                <search-form
                    color="primary"
                    :dark="false"
                    @search="searchHandler"
                ></search-form>
            </v-card-text>
            <v-divider></v-divider>
            <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn
                    color="primary"
                    text
                    @click="dialog = false"
                >
                    Close
                </v-btn>
            </v-card-actions>
        </v-card>
    </v-dialog>
</template>

<script>
import SearchForm from '@/components/SearchForm'

export default {
	name: 'SearchFormDialog',
    components: { SearchForm },
	data () {
		return {
			dialog: false,
		}
	},
    methods: {
	    searchHandler(filters) {
	    	this.$emit('search', filters)
            this.dialog = false
        }
    }
}
</script>