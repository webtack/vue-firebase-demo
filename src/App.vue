<template>
    <router-view></router-view>
</template>

<script>


export default {
	name: 'App',
	data() {
		return {
			links: [
				{
					to: {name: 'news.list'},
					title: 'News'
				},
				{
					to: {name: 'tags.list'},
					title: 'Tags'
				}
			],
		}
	},
}
</script>

<style lang="scss">
    .apico {
        background: #F8F8F8 !important;
    }
</style>