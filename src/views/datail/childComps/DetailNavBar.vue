<template>
  <nav-bar>
    <div slot="left" class="back" @click="backClick"><span> &lt; </span></div>
    <div slot="center" class="title">
      <div v-for="(item, index) in titles"
        :key="item.id"
        class="title-item"
        :class="{active: index === currentIndex}"
        @click="titlesClick(index)">
        {{ item }}
        </div>
    </div>
  </nav-bar>
</template>

<script>
import NavBar from "components/common/navbar/NavBar";

export default {
  name: "DetailNavBar",
  components: {
    NavBar
  },
  data() {
    return {
      titles: ["商品", "参数", "评论", "推荐"],
      currentIndex: 0
    };
  },
  methods: {
    titlesClick(index) {
       this.currentIndex = index  
    },
    backClick() {
      this.$router.back()
    }
  }
};
</script>

<style scoped>
.title {
  display: flex;
  font-size: 13px;
}

.title-item {
  flex: 1;
}

.active {
  color: var(--color-high-text);
}

.back {
  font-size: 25px;
}
</style>