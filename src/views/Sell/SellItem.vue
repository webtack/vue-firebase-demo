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
                    :liked="item.liked"
                    @onClick="likeHandler"
                ></sell-favorite-action>
            </div>
            <div class="subtitle-1">{{ item.name }}</div>
            <h3 class="">{{ item.price }}</h3>
        </v-card-text>
    </v-card>
</template>

<script>
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
    methods: {
	    likeHandler() {
	    	if(this.item.liked) {
	    		this.$emit('dislike', this.item.id)
            } else {
			    this.$emit('like', this.item.id)
            }
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