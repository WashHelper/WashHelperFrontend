<template>
	<view class="mine-container">
		<header class="header-box">
			<view class="head-picture">
				<image src="@/static/user-order-index/avatar.png" mode="aspectFit"></image>
			</view>
			<view class="user-name">
				<text>柚小宝</text>
				<button class="user-btn" type="primary">开通会员立享优惠</button>
			</view>
			<image class="set-icon" src="@/static/user-order-index/setting.png" mode="aspectFit"></image>
		</header>
		<section class="mine-body">
			<ul class="set-list">
				<li>
					<navigator>我的订单</navigator>
				</li>
				<li>
					<navigator>我的回收</navigator>
				</li>
				<li>
					<navigator>我的碳积分</navigator>
				</li>
				<li>
					<navigator>合作品牌</navigator>
				</li>
				<li>
					<navigator>意见反馈</navigator>
				</li>
				<li>
					<navigator>加盟我们</navigator>
				</li>
				<li>
					<navigator @click="open"><text>联系客服</text></navigator>
					<uni-popup style="height: 100px;" ref="popup" type="bottom">底部弹出 Popup</uni-popup>
				</li>
			</ul>
		</section>
		<footer class="example-body box">

		</footer>
		<view class="kong" style="height: 110rpx;"></view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				// type: 'center'
			};
		},
		methods: {
			open() {
				this.$refs.popup.open('top')
			},
			toggle(type) {
				this.type = type
				// open 方法传入参数 等同在 uni-popup 组件上绑定 type属性
				this.$refs.popup.open(type)
			}
		}
	}
</script>

<style lang="scss">
	.mine-container {
		width: 750rpx;
		background-color: rgba(245, 245, 245, 1);
		display: flex;
		flex-direction: column;
		align-items: center;

		.header-box {
			position: relative;
			width: 750rpx;
			height: 78px;
			display: flex;
			flex-direction: row;
			align-items: center;

			.head-picture {
				margin-left: 15px;
				width: 71px;
				height: 71px;

				image {
					width: 100%;
					height: 100%;
				}
			}


			.user-name {
				margin-left: 15px;

				text {
					font-size: 12px;
					margin-left: 10px;
				}

			}

			.set-icon {
				position: absolute;
				width: 25px;
				height: 25px;
				right: 61.5rpx;
			}
		}

		.mine-body {
			width: 682rpx;
			align-items: center;
			background-color: #fff;
			margin-top: 17px;
			border-radius: 10px;

			.set-list {
				list-style: none;

				li {
					width: 100%;
					height: 41px;
					margin-left: 10px;

					&:first-child {
						padding-top: 17px;
					}

					navigator {
						width: 100%;
						height: 100%;
						font-size: 16px;
						line-height: 16px;
					}
				}
			}
		}


	}
</style>