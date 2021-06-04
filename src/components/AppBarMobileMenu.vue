<template>
    <div v-if="items.length > 0">
        <v-menu offset-y>
            <template v-slot:activator="{ on, attrs }">
                <v-btn
                    color="primary"
                    icon
                    v-bind="attrs"
                    v-on="on"
                >
                    <v-icon>mdi-menu</v-icon>
                </v-btn>
            </template>
            <v-list dense>
                <v-list-item
                    v-for="item in items"
                    :key="item.to"
                    :to="{name: item.to}"
                    :color="item.color"
                >
                    <v-list-item-icon v-if="item.icon">
                        <v-icon dense>{{ item.icon }}</v-icon>
                    </v-list-item-icon>
                    <v-list-item-title>
                        {{ item.text }}
                    </v-list-item-title>
                </v-list-item>
            </v-list>
        </v-menu>
    </div>
</template>

<script>

export default {
	name: 'AppBarMobileMenu',
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