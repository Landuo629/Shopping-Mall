<template>
  <div>
    <detail-nav-bar />
    <detail-swiper :top-images="topImages" />
  </div>
</template>

<script>
import DetailNavBar from "views/datail/childComps/DetailNavBar";
import DetailSwiper from "views/datail/childComps/DetailSwiper.vue";

import { getDetail } from "network/detail";

export default {
  name: "Detail",
  components: {
    DetailNavBar,
    DetailSwiper
  },
  data() {
    return {
      iid: null,
      topImages: []
    }
  },
  created() {
    //1. 保存传入的iid
    this.iid = this.$route.params.iid;
    //更具iid请求详情数据
    getDetail(this.iid).then(res => {
      //1.获取顶部的图片轮播数据
      console.log(res);
      this.topImages = res.data.result.itemInfo.topImages;
      //console.log(this.topImages)
    });
  }
};
</script>

<style>
</style>