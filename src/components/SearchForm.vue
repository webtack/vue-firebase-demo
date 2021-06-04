<template>
    <div class="search-form">
        <v-row >
            <v-col cols="12" md="9">
                <v-text-field
                    v-model="name"
                    clearable
                    outlined
                    dense
                    hide-details
                    prepend-inner-icon="mdi-magnify"
                    placeholder="Serach product by name"
                    background-color="white"
                    :color="color"
                    @click:clear="onClear"
                ></v-text-field>
            </v-col>
            <v-col cols="12" md="3">
                <v-btn
                    :disabled="!canSearch"
                    :dark="dark"
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
        },
	    dark: {
		    type: Boolean,
		    default: true
	    }
    },
    data() {
	    return {
	    	name: null,
        }	
    },
	computed: {
        canSearch() {
			return !!this.name
        }
	},
    methods: {
	    onClear() {
		    this.name = null
		    this.onSearch()
	    },
		onSearch() {
			this.$emit('search', {name: this.name})
			this.name = null            
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