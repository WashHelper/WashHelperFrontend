<template>
	<view class="container">
		<view class="bigbox">
			<!-- <view class="box"> -->
			<view class="consignee">
				<text>收货人</text>
				<input focus placeholder="请输入姓名" v-model="username" class="placeholder2" />
			</view>
			<view class="phoneNum">
				<text>联系方式</text>
				<input focus placeholder="联系方式" v-model="phoneNum" class="placeholder2">
			</view>

			<view class="address-msg" style="display: flex;">
				<view class="item-msg">所在地区</view>

				<uni-data-picker class="uni-data-picker" placeholder="请选择地址" popup-title="请选择所在地区" :localdata="dataTree"
					v-model="classes" @change="onchange" ref="location">
				</uni-data-picker>

			</view>
			<view class="detail-location">
				<text>详细地址</text>
				<textarea placeholder="请填写具体地址" class="textarea" placeholder-style="margin-left:12px"
					v-model="detail_location"></textarea>
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
		<view class="btn" @click="pushOrder(e)">保存</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				username: '',
				//电话号码
				phoneNum: '',
				icon: 'checkbox',
				classes: '0',
				// isOpened: false,
				single: '',
				tag: '',
				type: 0,
				detail_location: '',
				areadatail: '',
				dataTree: [{
					text: " 江苏省",
					value: "1",
					children: [{
						text: "南京市",
						value: "1-1",
						children: [{
								text: '高淳区',
								value: "1-1-1"
							},
							{
								text: '鼓楼区',
								value: "1-1-2"
							}, {
								text: '建邺区',
								value: "1-1-3"
							}, {
								text: '江宁区',
								value: "1-1-4"
							}, {
								text: '溧水区',
								value: "1-1-5"
							}, {
								text: '六合区',
								value: "1-1-6"
							}, {
								text: '浦口区',
								value: "1-1-7"
							}, {
								text: '栖霞区',
								value: "1-1-8"
							}, {
								text: '其他区',
								value: "1-1-9"
							}
						]
					}, {
						text: "徐州市",
						value: "1-2"
					}]
				}]
			};
		},
		computed: {},
		methods: {
			changeicon() {
				// this.icon = this.icon === 'checkbox-filled' ? 'checkbox' :
				// 	'checkbox-filled'
				if (this.icon === 'checkbox-filled') {
					this.icon = 'checkbox'
					this.type = 0;
					return true
				} else {
					this.icon = 'checkbox-filled'
					this.type = 3
					return false
				}
			},
			onchange(e) {
				console.log('关闭');
				console.log(e);
				console.log(e.detail.value[0].text);
				this.areadatail = e.detail.value[0].text + '-' + e.detail.value[1].text + '-' + e.detail.value[2].text
				this.areadatail = this.areadatail.trim()
				console.log(this.areadatail, typeof(this.areadatail))
			},
			checkboxChange: function(e) {
				let items = this.items;
				values = e.detail.value;
				for (let i = 0, lenI = items.length; i < lenI; ++i) {
					const item = items[i]
					if (values.includes(item.value)) {
						this.$set(item, 'checked', true)
					} else {
						this.$set(item, 'checked', false)
					}
				}
			},
			search(item) {
				console.log(item)
			},
			pushOrder() {
				let type1 = this.type
				let form = {
					area: this.areadatail,
					location: this.detail_location,
					name: this.username,
					phone: this.phoneNum,
					isSelf: '',
					tag: '',
					isDefault: this.changeicon()
				}
				this.$axios.addAddress(form).then(res => {
					if (res.success === true) {
						console.log('发送成功', typeof(form.area), typeof(form))
					} else {
						console.log('发送失败', res, typeof(form))
					}
				})
				// uni.navigateTo({
				// 	url: './address?isSelected=true'
				// })
			}
		}
	}
</script>

<style lang="scss">
	.container {
		.uni-date-editor--x {
			position: relative;
			display: flex;
			flex-direction: row;
		}

		.uni-date-editor--x .uni-date__icon-clear {
			display: inline-block;
			box-sizing: border-box;
			border: 9px solid transparent;
		}

		.data-pickerview {
			height: 400px;
			border: 1px #e5e5e5 solid;
		}

		.popper__arrow {
			top: -6px;
			left: 50%;
			margin-right: 3px;
			border-top-width: 0;
			border-bottom-color: #EBEEF5;
		}

		.bigbox {
			width: 327px;
			// height: 279px;
			border-radius: 10px;
			background: rgba(255, 255, 255, 1);
			margin: 0px auto;
			padding: 0px 16px 14px 17px;
			margin-top: 16px;

			.placeholder2 {
				border: 1px solid rgba(191, 191, 191, 1);
				padding-left: 10px;
				font-size: 14px;
				height: 32px;
				border-radius: 6px;
				margin-left: 25px;

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
					margin-left: 25px;
					width: 45.6vw;
					height: 55px;
					padding-left: 16px;
					border-radius: 6px;
					border: 1px solid rgba(191, 191, 191, 1);
				}
			}

			.address-msg {
				display: flex;
				align-items: center;

				.item-msg {
					margin-right: 25px;
				}

				.uni-data-picker {
					border: 1px solid rgba(191, 191, 191, 1);
					border-radius: 6px;
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