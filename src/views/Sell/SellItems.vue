<template>
    <v-row
        justify="center"
        no-gutters
        class="sell-items-row"
    >
        <v-col
            v-for="item in items"
            :key="item.id"
            md="4"
            sm="6"
            cols="10"
            offset-sm="0"
            align-self="center"
            class="pa-2 sell-items-col"
        >
            <sell-item
                :item="item"
                @like="likeHandler"
                @dislike="dislikeHandler"
            ></sell-item>
        </v-col>
        
    </v-row>
</template>

<script>
import SellItem from './SellItem.vue'

export default {
	name: 'SellItems',
    components: {SellItem},
    props: {
		items: {
			type: Array,
            default: function () {
                return []
            }
        }
    },
    methods: {
	    likeHandler(id) {
            this.$emit('like', id)
        },
	    dislikeHandler(id) {
		    this.$emit('dislike', id)
	    }
    }
}

</script>

<style lang="scss">
    .sell-items-row {
        @media (max-width: 959px) and (min-width: 600px){
            max-width: 80% !important;
            margin-left: 10% !important;
        }
        
        
        .sell-items-col {
            @media (max-width: 460px) {
                max-width: 100% !important;
            }
        }
    }
</style>