<template>
	<view class="mine-container">
		<header class="header-box">
			<view class="head-picture">
				<button class="avatar-wrapper" open-type="chooseAvatar" @chooseavatar="onChooseAvatar">
					<image class="avatar" mode="aspectFit" :src="wxAvatarUrl"></image>
				</button>
				<!-- <image :src="avatarUrl" mode="aspectFit"></image> -->
			</view>
			<view class="user-name">
				<view class="flex_box">
					<text>{{nickName||'柚小宝'}}</text>
					<view class="phonebutton" v-if="!hasPhoneNumber">
						<button class="getphonenumber" open-type="getPhoneNumber"
							@getphonenumber="getPhoneNumber">点击获取手机号</button>
					</view>
					<text v-else>{{phoneNumber}}</text>
				</view>

				<button class="user-btn" @click="gotoCharge()">
					开通会员立享优惠
				</button>
			</view>
			<image class="set-icon" src="@/static/user-order-index/setting.png" mode="aspectFit" @click="gotosetting">
			</image>
		</header>
		<section class="mine-body">
			<ul class="set-list">
				<li>
					<view class="link">
						<navigator url="../../packageUser/pages/card" open-type="navigate">我的卡劵</navigator>
						<uni-icons type="forward" size="10" color="rgba(207, 207, 207, 1)" class="icon"></uni-icons>
					</view>

				</li>
				<div-line></div-line>
				<li>
					<view class="link">
						<navigator>我的回收</navigator>
						<uni-icons type="forward" size="10" color="rgba(207, 207, 207, 1)" class="icon"></uni-icons>
					</view>

				</li>
				<div-line></div-line>
				<li>
					<view class="link">
						<navigator>我的碳积分</navigator>
						<uni-icons type="forward" size="10" color="rgba(207, 207, 207, 1)" class="icon"></uni-icons>
					</view>

				</li>
				<div-line></div-line>
				<li>
					<view class="link">
						<navigator url="/pages/order/index" open-type="switchTab">我的订单</navigator>
						<uni-icons type="forward" size="10" color="rgba(207, 207, 207, 1)" class="icon"></uni-icons>
					</view>

				</li>
				<div-line></div-line>
				<li>
					<view class="link">
						<navigator>常见问题</navigator>
						<uni-icons type="forward" size="10" color="rgba(207, 207, 207, 1)" class="icon"></uni-icons>
					</view>

				</li>
				<div-line></div-line>
				<li @click="makeCall">
					<view class="link">
						<navigator>在线客服</navigator>
						<uni-icons type="forward" size="10" color="rgba(207, 207, 207, 1)" class="icon"></uni-icons>
					</view>

				</li>
				<div-line></div-line>
				<li>
					<view class="link">
						<navigator>加盟我们</navigator>
						<uni-icons type="forward" size="10" color="rgba(207, 207, 207, 1)" class="icon"></uni-icons>
					</view>

				</li>
				<div-line></div-line>
				<li>
					<view class="link">
						<navigator>我的云洗店</navigator>
						<uni-icons type="forward" size="10" color="rgba(207, 207, 207, 1)" class="icon"></uni-icons>
					</view>

				</li>
				<div-line></div-line>
				<li>
					<view class="link">
						<navigator>合作品牌</navigator>
						<uni-icons type="forward" size="10" color="rgba(207, 207, 207, 1)" class="icon"></uni-icons>
					</view>

				</li>
				<div-line></div-line>
				<li>
					<view class="link">
						<navigator>协议与政策</navigator>
						<uni-icons type="forward" size="10" color="rgba(207, 207, 207, 1)" class="icon"></uni-icons>
					</view>

				</li>
				<div-line></div-line>
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
				wxAvatarUrl: uni.getStorageSync('avatarUrl') || require(`@/static/user-order-index/avatar.png`),
				phoneNumber: uni.getStorageSync('phoneNumber')
				// type: 'center'
			};
		},

		onLoad() {
			this.getUserDate();
		},
		computed: {

			hasPhoneNumber() {
				if (!this.phoneNumber) return false

				return true
			},
			nickName() {
				return uni.getStorageSync('nickName')
			}
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
			gotosetting() {
				uni.navigateTo({
					url: '/packageUser/pages/settings/index'
				})
			},
			gotocard() {
				uni.navigateTo({
					url: '/pages/user/card'
				})
			},
			makeCall() {
				uni.makePhoneCall({
					phoneNumber: '18851187568' //仅为示例
				});
				plue.device.dial('18851187568', true)
			},
			gotoCharge() {
				uni.navigateTo({
					url: '/packageUser/pages/chargeMoney'
				})
			},
			async getUserDate() {
				const {
					data: res
				} = await this.$axios.getUserInfoList();
			},
			onChooseAvatar(e) {
				const {
					avatarUrl
				} = e.detail

				this.wxAvatarUrl = avatarUrl
				uni.setStorageSync('avatarUrl', avatarUrl)
			},
			async getPhoneNumber(e) {
				let {
					data: {
						phone
					}
				} = await this.$axios.getPhoneNumber(e.detail.code)
				uni.setStorageSync('phoneNumber',
					phone)
				this.phoneNumber = uni.getStorageSync('phoneNumber')
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
				border-radius: 50%;
				overflow: hidden;

				button {
					width: 100%;
					height: 100%;
				}

				image {
					width: 100%;
					height: 100%;
				}
			}


			.user-name {
				margin-top: 10px;
				margin-left: 15px;

				.flex_box {
					display: flex;
					align-items: center;
					font-size: 12px;
				}

				.phonebutton {
					button {
						height: 16px;
						line-height: 16px;
						font-size: 12px;
					}

					margin-left: 10px;
				}

				text {
					margin-left: 10px;
				}

				.user-btn {
					margin-top: 18px;
					width: 41vw;
					border: transparent;
					color: rgba(255, 255, 255, 1);
					padding-left: 13px;
					font-size: 12px;
					border-radius: 10px;
					background: linear-gradient(223.13deg, rgba(87, 182, 230, 1) 0%, rgba(141, 242, 234, 0.5) 90.99%, rgba(247, 247, 193, 0.01) 100%);

					&:after {
						border: none;
					}
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
				padding-left: 17px;
				padding-right: 17px;

				li {
					width: 100%;

					// height: 100%;
					font-size: 16px;
					line-height: 24px;
					margin: 16px 0px;
				}

				.link {
					display: flex;
					// flex-direction: column;
					align-items: center;
					justify-content: space-between;
				}
			}

		}
	}
</style>