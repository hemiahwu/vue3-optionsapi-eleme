<template>
  <div class="index">
    <router-view></router-view>
    <Tabbar :data="tabbarData" />
  </div>
</template>

<script>
import Tabbar from "../components/Tabbar.vue";
export default {
  name: "Index",
  data() {
    return {
      tabbarData: [
        { title: "首页", icon: "home", path: "/home" },
        { title: "订单", icon: "file-text-o", path: "/order" },
        { title: "我的", icon: "user", path: "/me" },
      ],
    };
  },
  components: {
    Tabbar,
  },
};
</script>

<style scoped>
.index {
  width: 100%;
  height: calc(100% - 45px);
}
</style>