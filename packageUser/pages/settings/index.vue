<template>
	<view class="container">
		<view class="title">设置</view>
		<section class="list-box">
			<view class="box">
				<view class="avatar">
					<text>头像</text>
					<image :src="avatarUrl" mode="aspectFit"></image>
				</view>
				<uni-icons type="forward" size="10" color="rgba(207, 207, 207, 1)" class="icon"></uni-icons>
			</view>
			<view class="box">
				<view class="user-name">
					<text>用户名</text>
					<text>{{nickName}}</text>
				</view>
				<uni-icons type="forward" size="10" color="rgba(207, 207, 207, 1)" class="icon"></uni-icons>
			</view>
			<view class="box">
				<view class="change-number">
					<text>手机号修改</text>
					<text>18888888</text>
				</view>
				<uni-icons type="forward" size="10" color="rgba(207, 207, 207, 1)" class="icon"></uni-icons>
			</view>
			<view class="address" @click="gotoaddress">
				<text>地址管理</text>
				<uni-icons type="forward" size="10" color="rgba(207, 207, 207, 1)" class="icon"></uni-icons>
			</view>

		</section>
	</view>
</template>

<script>
	export default {
		data() {
			return {

			};
		},
		methods: {
			gotoaddress() {
				uni.navigateTo({
					url: '/packageUser/pages/settings/address'
				})
			}
		},
		computed: {
			nickName() {
				return uni.getStorageSync('nickName')
			},
			avatarUrl() {
				return uni.getStorageSync('avatarUrl') || require(`@/static/user-order-index/avatar.png`)
			}
		}
	}
</script>

<style lang="scss" scoped>
	.container {
		width: 100vw;
		// position: relative;
		padding-top: 2.76vh;

		.title {
			margin-top: 2.76vh;
			font-size: 18px;
			margin-left: 3.85vw;
			letter-spacing: 0px;
			line-height: 0px;
			margin-bottom: 30px;
		}

		.list-box {
			width: 83.85vw;
			margin: 0px auto;
			// height: 30.5vh;
			padding: 7px 16px 19px 17px;
			border-radius: 10px;
			background: rgba(255, 255, 255, 1);

			.box {
				display: flex;
				flex-direction: row;
				align-items: center;
			}

			.icon {
				margin-right: -12px;
			}

			.avatar {
				width: 87.95vw;
				height: 60px;
				display: flex;
				flex-direction: row;
				align-items: center;
				justify-content: space-between;
				border-bottom: 1px solid rgba(0, 0, 0, 0.04);



				text {
					line-height: 24px;
				}

				image {
					width: 60px;
					height: 60px;
					border-radius: 50%;
					overflow: hidden;
				}
			}

			.user-name {
				width: 100%;
				height: 56px;
				display: flex;
				flex-direction: row;
				align-items: center;
				justify-content: space-between;
				border-bottom: 1px solid rgba(0, 0, 0, 0.04);
			}

			.change-number {
				width: 100%;
				height: 56px;
				display: flex;
				flex-direction: row;
				align-items: center;
				justify-content: space-between;
				border-bottom: 1px solid rgba(0, 0, 0, 0.04);
			}

			.address {
				width: 100%;
				height: 56px;
				display: flex;
				flex-direction: row;
				align-items: center;
				justify-content: space-between;
				border-bottom: 1px solid rgba(0, 0, 0, 0.04);

			}
		}
	}
</style>