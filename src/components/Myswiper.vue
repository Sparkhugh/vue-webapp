<template>
	<van-swipe :autoplay="3000">
		<van-swipe-item class="item" v-for="(image, index) in images" :key="index">
			<img :src="image" @touchstart='skipToDetail(index)' />
		</van-swipe-item>
</van-swipe>
</template>

<script>
	export default{
		data() {
			return {
				images: [
					'https://img.yzcdn.cn/vant/apple-1.jpg',
					'https://img.yzcdn.cn/vant/apple-2.jpg'
				]
			}
		},
		methods:{
			skipToDetail(index){
				this.$router.push('/detail/'+index)
			}
		}
	}
</script>

<style lang="scss" scoped>
	.item{
		display: block;
		height:4rem;
		width:100%;
		&>img{
			display:block;
			width:100%;
			height:100%;
		}
	}
</style>
