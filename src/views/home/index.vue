<template>
  <div class="home-entry">
    <div class="container">
      <!-- 左侧分类 -->
      <HomeCategory />
      <!-- 轮播图 -->
      <HomeBanner />
    </div>
  </div>
</template>
<script>
import HomeCategory from "./components/home-category";
import HomeBanner from "./components/home-banner";
export default {
  name: "PageHome",
  components: { HomeCategory, HomeBanner },
  methods: {},
};
</script>
<style scoped lang="less">
.xtx-carousel {
  ::v-deep .carousel-btn.prev {
    left: 270px;
  }
  ::v-deep .carousel-indicator {
    padding-left: 250px;
  }
}
</style>