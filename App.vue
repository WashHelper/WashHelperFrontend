<script>
	export default {
		onLaunch() {
			uni.getSystemInfo({
				success: function(res) {
					let height = res.windowHeight - res.statusBarHeight
				}
			})
		},
		onShow() {
			uni.getSystemInfo({
				success(e) {
					/* 窗口宽度大于420px且不在PC页面且不在移动设备时跳转至 PC.html 页面 */
					if (e.windowWidth > 420 && !window.top.isPC && !/iOS|Android/i.test(e.system)) {
						console.log('跳转到html页面')
					}
				}
			})
		},
		onHide() {}
	}
</script>

<style lang="scss">
	page {
		/*每个页面公共css */
		background: rgba(245, 245, 245, 1);
	}

	.status_bar {
		height: var(--status-bar-height);
		width: 100%;
	}

	// 取消地图上的 logo
	a .csssprite {
		display: none;
	}
</style>