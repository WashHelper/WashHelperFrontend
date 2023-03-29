<template>
	<view class="mine-container">
		<header class="header-box">
			<view class="head-picture">
				<image src="@/static/user-index/头像.png" mode="aspectFit"></image>
			</view>
			<text class="user-name">微信用户4037</text>
			<image class="set-icon" src="@/static/user-index/蒙版组 128.png" mode="aspectFit"></image>
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
					<navigator>联系客服</navigator>
				</li>
			</ul>
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
		width: 750rpx;
		background-color: rgba(245, 245, 245, 1);

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
				background: rgba(204, 204, 204, 1);
				border-radius: 50px;

				image {
					width: fit-content;
				}
			}


			.user-name {
				font-size: 12px;
				margin-left: 10px;
			}

			.set-icon {
				position: absolute;
				width: 25px;
				height: 25px;
				right: 61.5rpx;
			}
		}

		.mine-body {
			width: 692rpx;
			height: 416px;
			width: auto;
			background-color: #fff;
			margin-top: 17px;
			border-radius: 10px;

			.set-list {
				list-style: none;

				li {
					width: 628rpx;
					height: 41px;
					width: auto;

					&:first-child {
						padding-top: 17px;
					}

					navigator {
						width: 100%;
						height: 100%;
						text-align: left;
						margin-top: 0px;
						line-height: 16px;
					}
				}
			}
		}
	}
</style>