<template>
	<div class="find">
		find
		<div class="box" @touchstart="click">你好你好你好你好你好</div>
		<TabBar></TabBar>
		
	</div>
</template>

<script>
	const TabBar=()=>import('@/components/TabBar.vue')
	export default{
		components:{
			TabBar
		},
		methods:{
			click(){
				console.log('box被点击了')
			}
		}
	}
</script>

<style lang="scss" scoped>
	.box{
		width:10rem;
		height:150px;
		background:greenyellow;
	}
</style>
