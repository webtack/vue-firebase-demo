<template>
    <app-main dark class="sell-list">
        <div class="sell-list__search-form app-dark d-md-flex d-none align-center px-2">
            <app-container :maxWidth="containerMaxWidth">
                <search-form
                    color="#3E3961"
                ></search-form>
            </app-container>
        </div>
        <div class="sell-list__content">
            <app-container :maxWidth="containerMaxWidth">
                <v-card class="sell-list__filter-form d-md-flex">
                    <div class="d-none d-md-block">
                        <filter-form></filter-form>
                    </div>
                    <div class="d-flex d-md-none align-center pa-2">
                        <v-spacer></v-spacer>
                        <div class="d-block">
                            <search-form-dialog></search-form-dialog>
                        </div>
                        <div class="d-block">
                            <filter-form-dialog></filter-form-dialog>
                        </div>
                    </div>
                </v-card>
                <div class="mt-3">
                    <sell-items :items="products"></sell-items>
                </div>
            </app-container>
        </div>
    </app-main>
</template>

<script>
import SearchForm from '@/components/SearchForm'
import SearchFormDialog from '@/components/SearchFormDialog'
import FilterFormDialog from '@/components/FilterFormDialog'
import FilterForm from '@/components/FilterForm'
import SellItems from './SellItems.vue'

export default {
	name: 'Sell',
	components: {SearchForm, SearchFormDialog, FilterForm, FilterFormDialog, SellItems},
	data() {
		return {
			containerMaxWidth: '900',
		}
	},
    computed: {
		products() {
			return this.$store.getters.products
        }
    }
}

</script>

<style lang="scss">
    .sell-list {
        $formSize: 100px;

        &__search-form {
            position: fixed;
            width: 100%;
            z-index: 5;
            height: $formSize;
            
            
        }

        &__content {
            position: relative;
            
            @media (min-width: 960px) {
                margin-top:$formSize;
            }
        }

    }
</style>