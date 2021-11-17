<template>
  <!-- 顶部路由 -->
  <nav>顶部路由</nav>

  <!-- 头部路由 -->
  <header>头部路由</header>

  <!-- 内容区 -->
  <main class="aaa">
    <!-- 二级路由 -->
    <RouterView />
  </main>

  <!-- 底部路由 -->
  <footer>底部路由</footer>
</template>

<script>
export default {};
</script>

<style lang="less" scoped>
// .hoverShadow ();
// @import "../assets/style/mixins.less";
.aaa {
  .hoverShadow ();
}
</style>