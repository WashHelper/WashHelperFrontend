<template>
	<view class="container">
		<view class="bigbox">
			<view class="banner">
				<swiper indicator-dots indicator-color="rgba(255,255,255,0.5)" indicator-active-color="#fff" circular
					autoplay interval="4000">
					<swiper-item>
						<image src="@/static/index-index/index-banner/轮播图1.png"></image>
					</swiper-item>
					<swiper-item>
						<image src="@/static/index-index/index-banner/轮播图2.png"></image>
					</swiper-item>
					<swiper-item>
						<image src="@/static/index-index/index-banner/轮播图3.png"></image>
					</swiper-item>
				</swiper>
			</view>
			<view class="choice-container">

				<view class="item" :class="navIndex==index ? 'active' : ''" v-for="(item,index) in navArr"
					:key="item.id" @click="clickNav(index)">
					{{item.title}}
				</view>
			</view>

			<indexInput></indexInput>
		</view>
		<view class="ad">
			<image src="@/static/index-index/画板 1.png" mode="aspectFit"></image>
		</view>

		<view class="serve-container">
			<text class="serve-text">服务类别</text>
			<view class="serve-choice">
				<button type="default" disabled="true">衣旧情深</button>
				<button type="default" disabled="true">商城</button>
				<button type="default" disabled="true">碳积分</button>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				navArr: [{
						id: 0,
						title: "网点自送"
					},
					{
						id: 1,
						title: "上门取件"
					}
				],
				navIndex: 0,


			};
		},
		onLoad() {
			const sysInfo = uni.getSystemInfoSync()
			this.wh = sysInfo.windowHeight
		}
	}
</script>

<style lang="scss">
	.container {
		width: 100vw;
		height: 858px;
		padding-top: 20px;
		background-color: rgba(235, 236, 237, 1);
		display: flex;
		flex-direction: column; //水平展示内容
		align-items: center;

		.bigbox {
			width: 692rpx;
			background-color: #fff;

			.banner {
				width: 692rpx;
				height: 350rpx;
				background-color: #fff;
				border-radius: 10px;

				swiper {
					width: 100%;
					height: 100%;
				}

				image {
					width: 100%;
					height: 100%;
				}
			}

			.choice-container {
				width: 692rpx;
				height: 44px;
				display: flex;
				flex-direction: row;
				justify-content: space-around;
				font-size: 14px;

				.choice {
					color: rgba(207, 207, 207, 1);

					&.active {
						color: #57B6E6;
					}
				}
			}
		}


		.ad {
			margin-top: 10px;
			width: 692rpx;
			height: 158px;

			image {
				width: 100%;
				height: 100%;
			}
		}

		.serve-container {
			width: 692rpx;
			height: 63rpx;

			.serve-text {
				font-size: 18px;
				font-family: '黑体';
				line-height: 24px;
			}

			.serve-choice {
				display: flex;
				flex-direction: row;
				margin-top: 15px;

				button {
					width: 177rpx;
					font-size: 14px;
					color: rgba(179, 179, 179, 1);
				}
			}
		}
	}
</style>