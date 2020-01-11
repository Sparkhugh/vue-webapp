import axios from 'axios'
import {Message} from 'element-ui'

var baseURL='http://localhost:8192'

const fetch = axios.create({
	baseURL:baseURL,
	timeout:2000,
	headers:{'Content-Type': 'application/json;chartset=UTF-8'}
})

//添加请求拦截器,发生在请求发起之前
fetch.interceptors.request.use(config=>{
	//console.log('请求拦截,ajax发起请求',config)
	var token=localStorage.getItem('token')
	config.headers.Authorization=token	//用户鉴权
	return config
})

//添加响应拦截器,发生在客户端接收数据之前
fetch.interceptors.response.use(response => {
	var res={}
	//console.log('响应拦截,ajax接收数据之前',response)
	if(response.data && response.data.err===0){
		res=response.data.data || {}
	}else{
		var msg=response.data.message || '请求错误'
		Message({
			message:msg,
			type:'error',
			duration:3*1000
		})
	}
  return res
}, error => {
  // 响应错误 调接口失败 弹框提示用户
	const msg=error.Message !== undefined ? error.Message : ''
	Message({
		message:'网络错误'+msg,
		type:'error',
		duration:3*1000
	})
  return Promise.reject(error);
});

export default fetch;