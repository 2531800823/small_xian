<template>
  <!-- 顶部路由 -->
  <nav>
    <AppTopnav />
  </nav>

  <!-- 头部路由 -->
  <header>
    <AppHeader />
  </header>

  <!-- 内容区 -->
  <main>
    <!-- 二级路由 -->
    <RouterView />
  </main>

  <!-- 底部路由 -->
  <footer>
    <AppFooter />
  </footer>

  <!-- 滚动到 75px 显示 -->
  <AppHeaderSticky v-if="isShow" />
</template>

<script>
import AppTopnav from "@/components/app-topnav.vue";
import AppHeader from "@/components/app-header.vue";
import AppFooter from "@/components/app-footer.vue";
import AppHeaderSticky from "@/components/app-header-sticky.vue";
import { useStore } from "vuex";
import { onMounted, ref } from "vue";

export default {
  components: {
    AppTopnav,
    AppHeader,
    AppFooter,
    AppHeaderSticky,
  },
  setup(props) {
    const store = useStore();
    let isShow = ref(false);
    store.dispatch("category/getList");
    onMounted(() => {
      window.onscroll = () => {
        if (document.documentElement.scrollTop > 78) {
          isShow.value = true;
        } else {
          isShow.value = false;
        }
      };
    });

    return {
      isShow,
    };
  },
};
</script>

<style lang="less" scoped>
</style>