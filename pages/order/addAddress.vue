<template>
	<view class="container">
		<view class="bigbox">
			<!-- <view class="box"> -->
			<view class="consignee">
				<text>收货人</text>
				<input type="text" placeholder="请输入姓名" v-model="name" class="placeholder"
					placeholder-style="margin-left:12px">
			</view>
			<view class="phoneNum">
				<text>联系方式</text>
				<input type="text" placeholder="联系方式" v-model="phoneNum" class="placeholder"
					placeholder-style="margin-left:12px">
			</view>
			<view class="location">
				<text>所在地区</text>

			</view>
			<view class="detail-location">
				<text>详细地址</text>
				<textarea name="" id="" cols="50" rows="50" placeholder="请填写具体地址" auto-height class="textarea"
					placeholder-style="margin-left:12px"></textarea>
				<!-- </view> -->
			</view>
			<view class="default">
				<text>设为默认</text>
				<uni-icons :type="icon" size="20" @click="changeicon()"></uni-icons>
			</view>
			<view class="paste">
				整段识别粘贴输入
			</view>
		</view>


		<view class="btn">保存</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				name: '',
				phoneNum: '',
				icon: 'checkbox'
			};
		},
		methods: {
			changeicon() {
				this.icon = this.icon === 'checkbox-filled' ? 'checkbox' : 'checkbox-filled'
			},
		}
	}
</script>

<style lang="scss">
	.container {

		.bigbox {
			width: 327px;
			// height: 279px;
			border-radius: 10px;
			background: rgba(255, 255, 255, 1);
			margin: 0px auto;
			padding: 0px 16px 14px 17px;
			margin-top: 16px;

			.placeholder {
				font-size: 14px;
				height: 32px;
				font-weight: 400;
				color: rgba(207, 207, 207, 1);
				border: 1px solid rgba(191, 191, 191, 1);
				border-radius: 6px;
				margin-left: 41px;

				&::placeholder {
					margin-left: 16px;
				}

			}

			.consignee {
				display: flex;
				flex-direction: row;
				align-items: center;
				border-bottom: 1px solid rgba(0, 0, 0, 0.04);
				height: 57px;
			}

			.phoneNum {
				display: flex;
				flex-direction: row;
				align-items: center;
				border-bottom: 1px solid rgba(0, 0, 0, 0.04);
				height: 56px;
			}

			.location {
				display: flex;
				flex-direction: row;
				align-items: center;
				border-bottom: 1px solid rgba(0, 0, 0, 0.04);
				height: 56px;
			}

			.detail-location {
				display: flex;
				flex-direction: row;
				align-items: center;
				border-bottom: 1px solid rgba(0, 0, 0, 0.04);
				height: 80px;

				.textarea {
					width: 178px;
					height: 55px;
					border-radius: 6px;
					color: rgba(207, 207, 207, 1);
					border: 1px solid rgba(191, 191, 191, 1);
				}
			}

			.default {
				right: 1px;
				display: flex;
				align-items: center;
				justify-content: flex-end;

				.text {
					font-size: 12px;
					line-height: 21px;
				}
			}

			.paste {
				width: 131px;
				height: 25px;
				color: rgba(255, 255, 255, 1);
				text-align: center;
				border-radius: 10px;
				background: rgba(131, 195, 230, 1);
				font-size: 14px;
				margin: 0px auto;
				line-height: 25px;
			}
		}

		.btn {
			width: 228px;
			height: 35px;
			border-radius: 10px;
			background: linear-gradient(223.13deg, rgba(87, 182, 230, 1) 0%, rgba(141, 242, 234, 0.5) 90.99%, rgba(247, 247, 193, 0.01) 100%);
			display: flex;
			justify-content: center;
			align-items: center;
			color: rgba(255, 255, 255, 1);
			margin: 16px auto 0px;
		}
	}
</style>