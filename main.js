import App from './App'
import api from 'api/index.js'
// import piui from "sadais-piui";

//货币的计算方式
import currency from 'currency.js'

import store from '@/store/store.js'
// #ifndef VUE3
import Vue from 'vue'

Vue.prototype.currency = currency
Vue.config.productionTip = false


Vue.prototype.$axios = api

App.mpType = 'app'
const app = new Vue({
	...App,
	store
})
app.$mount()
// #endif

// #ifdef VUE3
//封装弹窗的方法
uni.$showMeg = function(title = '数据请求失败', duration = 1500) {
	uni.$showToast({
		title,
		duration,
		icon: 'none'
	})
}

import {
	createSSRApp
} from 'vue'
export function createApp() {
	const app = createSSRApp(App)
	return {
		app
	}
}
// #endif