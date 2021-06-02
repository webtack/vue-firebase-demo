<template>
    <img v-if="dark" alt="Apico logo" src="../assets/logo-wite.png">
    <img v-else alt="Apico logo" src="../assets/logo.png">
</template>

<script>

export default {
	name: 'Logo',
	props: {
		dark: {
			type: Boolean,
			default: false
		}
	}
}

</script>