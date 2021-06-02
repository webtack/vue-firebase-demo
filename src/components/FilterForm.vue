<template>
    <div class="filter-form">
        <v-row no-gutters class="align-center">
            <v-col cols="12" md="5">
                <v-select
                    outlined
                    dense
                    hide-details
                    prepend-inner-icon="mdi-view-grid"
                    placeholder="Choose Category"
                    background-color="input-bg"
                ></v-select>
            </v-col>
            <v-col cols="12" md="5" class="d-flex align-center flex-row pl-3">
                <v-text-field
                    outlined
                    dense
                    hide-details
                    placeholder="Price from (USD)"
                    background-color="input-bg"
                ></v-text-field>
                <div class="px-1">-</div>
                <v-text-field
                    outlined
                    dense
                    hide-details
                    placeholder="Price to (USD)"
                    background-color="input-bg"
                ></v-text-field>
            </v-col>
            <v-col cols="12" md="2" class="pl-3">
                <v-btn
                    dark
                    outlined
                    color="primary"
                    class="filter-form__submit"
                    @click="onFilter"
                >
                    <v-icon>mdi-filter</v-icon>
                    Filter
                </v-btn>
            </v-col>
        </v-row>
    </div>
</template>

<script>

export default {
	name: 'FilterForm',
	methods: {
		onFilter() {
			console.log('FilterForm.onFilter')
			this.$emit('filter')
		}
	}
}

</script>

<style lang="scss">
    .filter-form {

        > .row > div {
            display: flex;
            justify-content: center;
            padding: 12px !important;
        }
        
        &__submit {
            width: 100%;
            height: 40px !important;
        }
    }

</style>
