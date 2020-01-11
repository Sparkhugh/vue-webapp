import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const Home =()=>import('@/views/home/Home.vue')
const Find =()=>import('@/views/find/Find.vue')
const User =()=>import('@/views/user/User.vue')
const Detail =()=>import('@/views/home/Detail.vue')

const router=new VueRouter({
	mode:'hash',
	routes:[
		{path:'/',component:Home},
		{path:'/find',component:Find},
		{path:'/user',component:User},
		{path:'/detail/:id',component:Detail}
	]
})

export default router