<template>
	<view class="mine-container">
		<text>hello</text>
		<header>
			<view class="head-picture">
				<image src="@/static/mine-index/用户.png" mode="aspectFit"></image>
			</view>
			<text class="user-name">微信用户4037</text>
			<image class="set-icon" src="~@/static/mine-index/蒙版组 128.png" mode="aspectFit"></image>
		</header>
		<fui-list class="mine-body">
			<fui-list-cell :highlight="false">我的订单</fui-list-cell>
			<fui-list-cell :highlight="false">我的回收</fui-list-cell>
			<fui-list-cell :highlight="false">我的碳积分</fui-list-cell>
			<fui-list-cell :highlight="false">合作品牌</fui-list-cell>
			<fui-list-cell :highlight="false">意见反馈</fui-list-cell>
			<fui-list-cell :highlight="false">加盟我们</fui-list-cell>
			<fui-list-cell :highlight="false">联系客服</fui-list-cell>
		</fui-list>
		<van-cell title="展示弹出层" is-link bind:click="showPopup" />
		<!-- <van-popup  bind:close="onClose">内容</van-popup> -->
	</view>
</template>

<script>
	import {
		uniBadge
	} from '@dcloudio/uni-ui'
	export default {
		data() {
			return {

			};
		},
		components: {
			uniBadge
		},
		methods: {
			showPopup() {
				this.setData({
					show: true
				});
			},

			onClose() {
				this.setData({
					show: false
				});
			}
		}
	}
</script>

<style lang="scss">
	.mine-container {
		width: 100vw;
		background-color: rgba(245, 245, 245, 1);

		header {
			width: 750rpx;
			height: 750rpx;
			height: 78px;
			display: flex;
			flex-direction: row;
			align-items: center;

			.head-picture {
				width: 71px;
				height: 71px;
				background: rgba(204, 204, 204, 1);
				border-radius: 50px;

				image {
					width: fit-content;
				}
			}

			.user-name {
				font-size: 12px;
				margin-left: 16px;
			}

			.set-icon {
				display: flex;
				justify-content: flex-end;
				width: 25px;
			}
		}

		.mine-body,
		fui-list-cell {
			width: 700rpx;
			height: 75rpx;
			margin-top: 0px;
		}
	}
</style>