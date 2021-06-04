<template>
    <v-dialog
        v-model="dialog"
        max-width="480"
    >
        <template v-slot:activator="{ on, attrs }">
            <v-btn
                icon
                v-bind="attrs"
                v-on="on"
            >
                <v-icon>mdi-filter</v-icon>
            </v-btn>
        </template>
        <v-card>
            <v-card-title class="text-h5">
                Filter products
            </v-card-title>
            <v-divider></v-divider>
            <v-card-text class="mt-2 pa-3">
                <filter-form @filter="filterHandler"></filter-form>
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
import FilterForm from '@/components/FilterForm'

export default {
	name: 'FilterFormDialog',
    components: { FilterForm },
	data () {
		return {
			dialog: false,
		}
	},
	methods: {
		filterHandler(filters) {
			this.dialog = false
			this.$emit('filter', filters)
		}
	}
}
</script>