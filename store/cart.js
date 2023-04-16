export default {
	namespaced: true,

	state: () => ({
		//购物车的数组，用来存储购物车中每个商品的信息对象
		//每个商品的信息对象，都包含如下6个属性
		//{goods_id,goods_name,goods_price,goods_count,goods_logo,goods_state}

		cart: []
	}),
	mutations: {
		//将商品加入到购物车里存储
		addToCart(state, goods) {
			const findResult = state.cart.find(x => x.goods_id === goods.goods_id)

			if (!findResult) {
				state.cart.push(goods)
			} else {
				// findResult.goods_count++;
			}
		}
	},
	getters: {}
}