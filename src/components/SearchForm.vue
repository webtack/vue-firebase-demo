<template>
    <div class="search-form">
        <v-row >
            <v-col cols="12" md="6">
                <v-text-field
                    outlined
                    dense
                    hide-details
                    prepend-inner-icon="mdi-magnify"
                    placeholder="Serach product by name"
                    background-color="white"
                    :color="color"
                ></v-text-field>
            </v-col>
            <v-col cols="12" md="4">
                <v-text-field
                    outlined
                    dense
                    hide-details
                    prepend-inner-icon="mdi-map-marker"
                    placeholder="Location"
                    background-color="white"
                    :color="color"
                >
                </v-text-field>
            </v-col>
            <v-col cols="12" md="2">
                <v-btn
                    dark
                    :color="color"
                    class="search-form__submit"
                    @click="onSearch"
                >
                    Search
                </v-btn>
            </v-col>
        </v-row>
    </div>    
</template>

<script>

export default {
	name: 'SearchForm',
    props: {
	    color: {
	    	type: String,
            default: 'primary'
        }	
    },
    data() {
	    return {
	    	
        }	
    },
    methods: {
		onSearch() {
			console.log('SearchForm.onSearch')
            this.$emit('search')
        }
    }
}

</script>

<style lang="scss">
    .search-form {
        > .row > div {
            display: flex;
            justify-content: center;
            padding: 6px;
        }
        
        &__submit {
            width: 100%;
            height: 40px !important;
        }
    }
    
</style>