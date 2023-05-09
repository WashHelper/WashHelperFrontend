
<template>
  <div class="container">
    <button @click="chooseImage">从相册选择图片</button>
    <img :src="imgUrl" alt="" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      imgUrl: "",
    };
  },
  methods: {
    chooseImage() {
      let that = this;
      uni.chooseImage({
        count: 4,
        sizeType: ["original", "compressed"],
        sourceType: ["album"],
        success(res) {
          console.log(res);
          that.imgUrl = res.tempFilePaths[0];
        },
      });
    },
  },
};
</script>

<style scoped>
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}
	
img {
	width: 200rpx;
	height: 200rpx;
	float: left;
}
</style>
