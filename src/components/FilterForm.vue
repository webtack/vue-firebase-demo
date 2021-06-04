<template>
    <div class="filter-form">
        <v-row no-gutters class="align-center">
            <v-col cols="12" md="3">
                <v-select
                    v-model="category"
                    :items="categories"
                    item-value="id"
                    item-text="label"
                    outlined
                    dense
                    hide-details
                    clearable
                    prepend-inner-icon="mdi-view-grid"
                    placeholder="Category"
                    background-color="input-bg"
                    @focus="resetFilters"
                    @change="changeCategory"
                ></v-select>
            </v-col>
            <v-col cols="12" md="3">
                <v-select
                    v-model="location"
                    :items="locations"
                    item-value="id"
                    item-text="label"
                    outlined
                    dense
                    hide-details
                    clearable
                    prepend-inner-icon="mdi-map-marker"
                    placeholder="Location"
                    background-color="white"
                    @focus="resetFilters"
                    @change="changeLocation"
                >
                </v-select>
            </v-col>
            <v-col cols="12" md="4" class="d-flex align-center flex-row pl-3">
                <v-text-field
                    v-model="priceFrom"
                    outlined
                    dense
                    hide-details
                    placeholder="Price from (USD)"
                    background-color="input-bg"
                    @focus="resetFilters"
                ></v-text-field>
                <div class="px-1">-</div>
                <v-text-field
                    v-model="priceTo"
                    outlined
                    dense
                    hide-details
                    placeholder="Price to (USD)"
                    background-color="input-bg"
                ></v-text-field>
            </v-col>
            <v-col cols="12" md="2" class="pl-3">
                <v-btn
                    color="primary"
                    :disabled="!canPriceFilter"
                    class="filter-form__submit"
                    @click="onFilter"
                >
                    <v-icon>mdi-filter</v-icon>
                </v-btn>
                <v-tooltip top>
                    <template v-slot:activator="{ on, attrs }">
                        <v-btn
                            icon
                            class="ml-1 d-none d-md-block"
                            v-bind="attrs"
                            v-on="on"
                            @click="onRefresh"
                        >
                            <v-icon>mdi-close</v-icon>
                        </v-btn>
                    </template>
                    <span>Reset Filters</span>
                </v-tooltip>
            </v-col>
        </v-row>
    </div>
</template>

<script>
import _ from 'lodash'

export default {
	name: 'FilterForm',
	data() {
		return {
			location: '',
            category: '',
            priceFrom: '',
            priceTo: ''
		}
	},
	computed: {
		categories() {
			return this.$store.getters.categories
		},
		locations() {
			return this.$store.getters.locations
		},
        canPriceFilter() {
			return !_.isEmpty(this.priceFrom) && !_.isEmpty(this.priceTo)
        }
	},
	methods: {
		resetFilters() {
			this.priceFrom = ''
			this.priceTo = ''
			this.category = ''
			this.location = ''
        },
		changeLocation() {
            this.onFilter()
        },
		changeCategory() {
			this.onFilter()
		},
		onRefresh() {
			this.resetFilters()
			this.onFilter()
        },
		onFilter() {
			this.$emit('filter', {
				location: this.location,
				category: this.category,
				priceFrom: this.priceFrom,
				priceTo: this.priceTo
            })
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
            flex: 1;
            height: 40px !important;
        }
    }

</style>
