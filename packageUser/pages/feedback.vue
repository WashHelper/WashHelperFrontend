<template>
	<view>
		<view class="container">
			<view class="thank">
				感谢您的反馈与支持，我们会再接再厉！
			</view>
			<view class="feedback-container">
				<textarea name="" id="" cols="30" rows="10" placeholder="在此处写下您的意见"></textarea>
			</view>
			<view class="button-wrapper">
				<button>保存</button>
			</view>
		</view>

	</view>

</template>

<script>
</script>

<style lang="scss" scoped>
	.container {
		width: 692rpx;
		background-color: rgba(245, 245, 245, 1);
		padding: 16px 15px 0px;

		.thank {
			line-height: 19px;
		}

		.feedback-container {
			width: 92.3vw;
			background-color: #fff;
			margin-top: 16px;

		}

		.button-wrapper {
			width: 100%;
			// margin-top: 36px;
			// color: rgba(153, 153, 153, 1);
			text-align: center;
			margin: 16px auto 0px;

			button {
				width: 228px;
				height: 35px;
				border: transparent;
				border-radius: 10px;
				background: linear-gradient(223.13deg, rgba(87, 182, 230, 1) 0%, rgba(141, 242, 234, 0.5) 90.99%, rgba(247, 247, 193, 0.01) 100%);
				font-size: 18px;
				line-height: 35px;
				font-weight: 400;
				color: rgba(255, 255, 255, 1);
			}
		}
	}
</style>