<template>
    <div>
        <v-btn
            v-for="item in items"
            :key="item.to"
            :to="{name: item.to}"
            :color="item.color"
            class="ml-2"
        >
            <v-icon v-if="item.icon" left>{{ item.icon }}</v-icon>
            {{ item.text }}
        </v-btn>
    </div>
</template>

<script>

export default {
	name: 'AppBarMenu',
    props: {
		items: {
			type: Array,
            default: function () {
                return []
            }
        }
    }
}

</script>