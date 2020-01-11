<template>
	<div class="home">
		<Myswiper></Myswiper>
		<TabBar></TabBar>
	</div>
</template>

<script>
	const Myswiper =()=>import('@/components/Myswiper.vue')
	const TabBar=()=>import('@/components/TabBar.vue')
	export default{
		components:{
			Myswiper,
			TabBar
		}
	}
</script>

<style lang="scss" scoped>
	
</style>
