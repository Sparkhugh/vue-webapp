<template>
	<div class="tabbar">
		<router-link to="/" tag="span" active-class="on" exact>首页</router-link>
		<router-link to="/find" tag="span" active-class="on" exact>发现</router-link>
		<router-link to="/user" tag="span" active-class="on" exact>我的</router-link>
	</div>
</template>

<script>
	export default{
		
	}
</script>

<style lang="scss" scoped>
	.tabbar{
		position: fixed;
		bottom: 0;
		left:0;
		right:0;
		height:1.2rem;
		line-height:1.2rem;
		font-size:.43rem;
		display: flex;
		background:#eee;
		text-align: center;
		&>span{
			flex:1;
			color:#333;
		}
		&>span.on{
			color:#ccc;
		}
	}
</style>
