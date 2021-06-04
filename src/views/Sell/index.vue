<template>
    <app-main dark :loading="loading" :class="searchFormClasses">
        <div class="sell-list__search-form app-dark align-center px-2">
            <app-container v-if="showFilters" :maxWidth="containerMaxWidth">
                <search-form
                    color="#3E3961"
                    @search="searchHandler"
                ></search-form>
            </app-container>
        </div>
        <div class="sell-list__content">
            <app-container :maxWidth="containerMaxWidth">
                <h2 class="mb-4">{{ title }}</h2>
                <v-card class="sell-list__filter-form d-md-flex">
                    <template v-if="showFilters">
                        <div class="d-none d-md-block">
                            <filter-form @filter="filterHandler"></filter-form>
                        </div>
                        <div class="d-flex d-md-none align-center pa-2">
                            <v-spacer></v-spacer>
                            <div class="d-block">
                                <search-form-dialog @search="searchHandler"></search-form-dialog>
                            </div>
                            <div class="d-block">
                                <filter-form-dialog @filter="filterHandler"></filter-form-dialog>
                            </div>
                            <div class="d-block">
                                <v-btn
                                    icon
                                    class="ml-1"
                                    @click="filterHandler({})"
                                >
                                    <v-icon>mdi-close</v-icon>
                                </v-btn>
                            </div>
                        </div>
                    </template>                    
                </v-card>
                <div class="mt-3">
                    <sell-items
                        :items="products"
                        @like="likeHandler"
                        @dislike="dislikeHandler"
                    ></sell-items>
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
import {getProducts} from '@/api/products'
import {ToastNotification} from '@/services/Notifications'
import _ from 'lodash'
import {updateProduct} from '@/api/products'

export default {
	name: 'Sell',
	components: {SearchForm, SearchFormDialog, FilterForm, FilterFormDialog, SellItems},
	data() {
		return {
			loading: false,
			containerMaxWidth: '960',
			products: []
		}
	},
    computed: {
	    showFilters() {
	    	return this.$route.name !== 'sell.favorites'
        },
        searchFormClasses() {
	    	let base = 'sell-list'
            
            if(this.showFilters) {
	            base +=  ' sell-list--has-search-form'
            }
            
            return base
        },
        title() {
	    	return this.showFilters ? 'Sell list' : 'Favorites'
        },
        user() {
	    	return this.$store.getters.user
        }
    },
	created() {
		this.getProducts()
	},
	methods: {
		getProducts(filters) {
			this.loading = true
            
            if(this.user.data && !this.showFilters) {
				filters = {likedBy: this.user.data.uid}
            }

			getProducts(filters)
					.then((querySnapshot) => {
						const collection = []

						querySnapshot.forEach((doc) => {
							collection.push(Object.assign({id: doc.id}, doc.data()))
						})
						this.products = null
						this.products = _.concat([], collection)
                        
                        if(this.user.data)
						    this.$store.dispatch('products/fetchCountLikedProducts', this.user.data.uid)

						this.loading = false
					})
					.catch(err => {
						this.loading = false

						//
						new ToastNotification({
							message: err.message,
							type: ToastNotification.type.error,
						})
					})
		},
		searchHandler(filters) {
			this.getProducts(filters)
		},
		filterHandler(filters) {
			this.getProducts(filters)
		},
		likeHandler(item) {
			let likedBy = item.likedBy
            
			updateProduct({
				id: item.id,
				data: {
					likedBy: _.union(likedBy, [this.user.data.uid])
				}
			})
					.then(this.getProducts)
					.catch(err => {
						this.loading = false

						//
						new ToastNotification({
							message: err.message,
							type: ToastNotification.type.error,
						})
					})
		},
		dislikeHandler(item) {
			let likedBy = []
            
            for(const index in item.likedBy) {
				if(item.likedBy[index] === this.user.data.uid) {
					continue
                }

	            likedBy.push(item.likedBy[index])
            }
            
			updateProduct({
				id: item.id,
				data: {
					likedBy: likedBy
				}
			})
					.then(this.getProducts)
					.catch(err => {
						this.loading = false

						//
						new ToastNotification({
							message: err.message,
							type: ToastNotification.type.error,
						})
					})
		}
	}
}

</script>

<style lang="scss">
    .sell-list {
        $formSize: 100px;
        $breackpoint: 960px;

        &__search-form {
            position: fixed;
            width: 100%;
            z-index: 5;
            height: $formSize;
            display: none;

        }
        
        &--has-search-form {

            .sell-list__search-form {
                @media (min-width: $breackpoint) {
                    display: block;
                }
            }
            
            .sell-list__content {
                position: relative;

                @media (min-width: $breackpoint) {
                    margin-top: $formSize;
                }
            }
        }

        

    }
</style>