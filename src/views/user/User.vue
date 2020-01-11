<template>
	<div class="user">
		user
		<TabBar></TabBar>
	</div>
</template>

<script>
	const TabBar=()=>import('@/components/TabBar.vue')
	export default{
		components:{
			TabBar
		}
	}
</script>

<style lang="scss" scoped>
</style>