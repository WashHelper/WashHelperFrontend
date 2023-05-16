<template>
	<view class="container">
		<view class="text">地址管理</view>
		<view class="address-container" @click="changeicon()">
			<view class="name-number">
				<view class="name">张三</view>
				<view class="phone">1888888</view>
			</view>
			<view class="address-detail">
				<image class="location-icon" src="@/static/user-address/address-icon.png" mode="aspectFit"></image>
				<view class="box">
					<!-- 省市县 -->
					<view class="area">
						江苏省 南京市 栖霞区
					</view>
					<!-- 具体地址 -->
					<view class="location">
						仙林街道 文苑路
					</view>
				</view>
			</view>
			<view class="choice">
				<view class="left">
					<view class="edit">编辑</view>
					<view class="delete">删除</view>
				</view>
				<!-- <view class="default">
					<view class="text">设为默认</view>
					<uni-icons :type="icon" size="20"></uni-icons>
				</view> -->
			</view>
		</view>
		<button class="btn_address" @click="addAddress()">增添新地址</button>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				icon: 'checkbox',
				// clickedicon: 'checkbox-filled'
				isSelected: false,
				addressList: []
			};
		},
		onLoad: function(option) {
			// const res = this.$axios.getAddressList(0)
			// console.log(res)
			this.getAddress(0)
			// this.getDefaultAddress(1)

			// this.isSelected = option.isSelected
			// console.log(option.isSelected)
		},
		methods: {
			changeicon() {
				this.icon = this.icon === 'checkbox-filled' ? 'checkbox' : 'checkbox-filled'
			},
			getAddress(type) {
				type = parseInt(type)
				const {
					data: res
				} = this.$axios.getAddressList(type)
				this.addressList = res
				console.log('获得全部地址信息')
				console.log(this.addressList)
			},
			getDefaultAddress() {
				console.log('获得默认地址');
				const {
					data: res
				} = this.$axios.getDefault()
				// console.log()
				console.log(res)
			},
			addAddress() {
				uni.navigateTo({
					url: './addAddress'
				})
			}
		}
	}
</script>

<style lang="scss">
	.container {
		width: 100vw;

		.text {
			margin-top: 20px;
			font-size: 18px;
			font-weight: 400;
			margin-left: 15px;

			margin-bottom: 16px;
		}

		.address-container {
			width: 342px;
			border-radius: 10px;
			background: rgba(255, 255, 255, 1);
			padding: 6px 8px 9px 10px;
			margin: 0px auto;

			.name-number {
				margin-top: 6px;
				display: flex;
				// flex-direction: row;
				height: 21px;
				font-size: 12px;

			}

			.address-detail {
				width: 100%;
				height: 27px;
				margin-top: 13px;
				border-bottom: 1px solid rgba(235, 236, 237, 1);
				display: flex;
				flex-direction: row;
				align-items: center;

				.location-icon {
					width: 10.74px;
					height: 12.97px;
					margin-left: 4px;
				}

				.box {
					height: 21px;
					font-size: 12px;
					margin-left: 7.26px;
					display: flex;
					flex-direction: row;
				}
			}

			.choice {
				display: flex;
				flex-direction: row;
				margin-top: 11px;
				height: 21px;
				font-size: 12px;
				// justify-content: space-around;

				.left {
					display: flex;
					flex-direction: row;

					.edit {
						width: 53px;
						height: 21px;
					}

					.delete {
						width: 53px;
						height: 21px;
						margin-left: -7px;
					}

				}

				.default {
					right: 1px;
					display: flex;
					align-items: center;

					.text {
						font-size: 12px;
					}
				}
			}
		}

		.btn_address {
			margin-left: -114px;
			width: 228px;
			left: 50vw;
			height: 35px;
			border-radius: 10px;
			background: linear-gradient(223.13deg, rgba(87, 182, 230, 1) 0%, rgba(141, 242, 234, 0.5) 90.99%, rgba(247, 247, 193, 0.01) 100%);
			color: rgba(255, 255, 255, 1);
			display: flex;
			align-items: center;
			justify-content: center;
			position: absolute;
			bottom: 18px;
		}
	}
</style>