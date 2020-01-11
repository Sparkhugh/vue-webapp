<template>
	<div class="detail">
		detail
		<h1 v-text='$route.params.id'></h1>
	</div>
</template>

<script>
	export default{
		mounted() {
			console.log(this.$route)
		}
	}
	
</script>

<style>
</style>
