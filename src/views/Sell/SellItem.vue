<template>
    <v-card
        class="sell-item mx-auto pa-2"
    >
        <v-img
            :src="item.preview"
            height="148px"
        >
        </v-img>
        <v-card-text style="position: relative">
            <div class="sell-item__favorite">
                <sell-favorite-action
                    v-if="user.data"
                    :liked="isLiked"
                    @onClick="likeHandler"
                ></sell-favorite-action>
            </div>
            <div class="subtitle-1">{{ item.name }}</div>
            <div class="caption"><b>Category:</b> {{ resolveCategory(item.category) }}</div>
            <div class="caption"><b>Location:</b> {{ resolveLocation(item.location) }}</div>
            <div class="title mt-2"><b>Price:</b> {{ item.price }}</div>
        </v-card-text>
    </v-card>
</template>

<script>
import _ from 'lodash'
import SellFavoriteAction from './SellFavoriteAction.vue'

export default {
	name: 'SellItem',
    components: { SellFavoriteAction },
    props: {
		item: {
			type: Object,
            required: true
        }
    },
	computed: {
		categories() {
			return this.$store.getters.categories
		},
		locations() {
			return this.$store.getters.locations
		},
        isLiked() {
			for (const index in this.item.likedBy) {
				if(this.item.likedBy[index] === this.user.data.uid) {
					return true
                }			
            }
			
			return false
        },
        user() {
			return this.$store.getters.user
        }
	},
    methods: {
	    likeHandler() {
	    	if(this.isLiked) {
	    		this.$emit('dislike', this.item)
            } else {
			    this.$emit('like', this.item)
            }
        },
        resolveLocation(id) {
	        return _.find(this.locations, {id: id}).label
        },
	    resolveCategory(id) {
		    return _.find(this.categories, {id: id}).label
	    }
    }
}

</script>

<style lang="scss">
    .sell-item {
        
        &__favorite {
            position: absolute;
            top: -20px;
            right: 10px;
            z-index: 1;
        }
        
    }
    
</style>