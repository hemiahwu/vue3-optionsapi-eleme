<template>
  <div class="city">
    <div class="search-wrap">
      <div class="search">
        <i class="fa fa-search"></i>
        <input v-model="cityValue" type="text" placeholder="输入城市名" />
      </div>
      <button @click="$router.go(-1)">取消</button>
    </div>
    <div class="location">
      <Location :address="city" />
    </div>
  </div>
</template>

<script>
import Location from "../components/Location.vue";
export default {
  data() {
    return {
      cityValue: "",
    };
  },
  computed: {
    city() {
      return this.$store.getters?.location?.addressComponent?.city || "全国";
    },
  },
  components: { Location },
};
</script>

<style scoped>
.city {
  width: 100%;
  height: 100%;
  overflow: auto;
  box-sizing: border-box;
  padding-top: 45px;
}
.search-wrap {
  position: fixed;
  top: 0;
  height: 45px;
  width: 100%;
  background: #fff;
  box-sizing: border-box;
  padding: 3px 16px;
  display: flex;
  justify-content: space-between;
}
.search {
  background-color: #eee;
  border-radius: 10px;
  line-height: 40px;
  width: 85%;
  box-sizing: border-box;
  padding: 0 16px;
}
.search input {
  background: #eee;
  outline: none;
  border: none;
  margin-left: 5px;
}
.search-wrap button {
  outline: none;
  color: #009eef;
}

.location {
  background: #fff;
  padding: 8px 16px;
  height: 65px;
  box-sizing: border-box;
}
</style>