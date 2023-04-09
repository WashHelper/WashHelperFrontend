<template>
	<!-- <<<<<<< HEAD -->
	<view class="mine-container">
		<header class="header-box">
			<view class="head-picture">
				<image src="@/static/user-order-index/avatar.png" mode="aspectFit"></image>
			</view>
			<view class="user-name">
				<text>柚小宝</text>
				<text>18888</text>
				<button class="user-btn">开通会员立享优惠</button>
			</view>
			<image class="set-icon" src="@/static/user-order-index/setting.png" mode="aspectFit" @click="gotosetting">
			</image>
		</header>
		<section class="mine-body">
			<ul class="set-list">
				<li>
					<navigator url="/pages/user/card?title=navigate" hover-class="navigator-hover">我的卡劵</navigator>
				</li>
				<div-line></div-line>
				<li>
					<navigator>我的回收</navigator>
				</li><div-line></div-line>
				<li>
					<navigator>我的碳积分</navigator>
				</li><div-line></div-line>
				<li @click="gotoorder">
					<navigator url="/pages/order/index" open-type="switchTab">我的订单</navigator>
				</li><div-line></div-line>
				<li>
					<navigator>常见问题</navigator>
				</li><div-line></div-line>
				<li @click="makeCall">
					在线客服
				</li><div-line></div-line>
				<li>
					<navigator>加盟我们</navigator>
				</li><div-line></div-line>
				<li>
					<navigator>我的云洗店</navigator>
				</li><div-line></div-line>
				<li>
					<navigator>合作品牌</navigator>
				</li><div-line></div-line>
				<li>
					<navigator>协议与政策</navigator>
				</li><div-line></div-line>
			</ul>
		</section>
		<footer class="example-body box"></footer>
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
			},
			gotoorder() {
				console.log(123)
				uni.navigateTo({
					url: '/pages/order/index'
				})
			},
			gotosetting() {
				console.log(123)
				uni.navigateTo({
					url: '/pages/user/settings/index'
				})
			},
			gotocard() {
				console.log(123)
				uni.navigateTo({
					url: '/pages/user/card'
				})
			},
			makeCall() {
				uni.makePhoneCall({
					phoneNumber: '18851187568' //仅为示例
				});
				plue.device.dial('18851187568', true)
			}
		}
	}
</script>

<style lang="scss">
	.mine-container {
		width: 100vw;
		background-color: rgba(245, 245, 245, 1);
		display: flex;
		flex-direction: column;
		align-items: center;

		.header-box {
			position: relative;
			width: 100vw;
			height: 87px;
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

				.user-btn {
					margin-top: 12px;
					width: 160px;
					border: transparent;
					color: rgba(255, 255, 255, 1);
					padding-left: 13px;
					text-align: left;
					font-size: 12px;
					border-radius: 10px;
					background: linear-gradient(223.13deg, rgba(87, 182, 230, 1) 0%, rgba(141, 242, 234, 0.5) 90.99%, rgba(247, 247, 193, 0.01) 100%);
				}
			}

			.set-icon {
				position: absolute;
				width: 25px;
				height: 25px;
				right: 5.64vw;
			}
		}

		.mine-body {
			width: 92.3vw;
			background-color: #fff;
			border-radius: 10px;

			.set-list {
				list-style: none;
				padding: 17px;

				li {
					width: 100%;

					// height: 100%;
					font-size: 16px;
					line-height: 24px;
					margin: 16px 0px;
				}
			}

		}
	}
</style>