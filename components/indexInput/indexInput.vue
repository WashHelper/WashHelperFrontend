<template>
	<view class="indexInput-container">

	</view>
</template>

<script>
	export default {
		name: "indexInput",
		data() {
			return {

			};
		}
	}
</script>

<style lang="scss">
	.indexInput-container {
		.indexInput-box {
			display: flex;
			flex-direction: column;
			align-items: center;

			.input {
				display: flex;
				flex-direction: row;
				align-items: center;
				background-color: #EDF2F2;
				width: 81.5vw;
				height: 45px;
				border-radius: 10px;

				&:first-child {
					margin-bottom: 8px;
				}

				&:last-child {
					margin-bottom: 20px;
				}

				image {
					height: 70rpx;
					width: 70rpx;
					margin-left: 50rpx;
					margin-right: 50rpx;
				}

				.placeholder {
					font-size: 38rpx;
					color: #C9C9C9;
					margin-top: 8rpx;
				}
			}
		}
	}
</style>