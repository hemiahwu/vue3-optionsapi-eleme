<template>
  <div class="addresss">
    <Header :isLeft="true" title="选择收货地址" />
    <div class="city-search">
      <div class="search">
        <span class="city">
          {{ city }}
          <i class="fa fa-angle-down"></i>
        </span>
        <i class="fa fa-search"></i>
        <input
          type="text"
          v-model="searchValue"
          placeholder="小区/写字楼/学校等"
        />
      </div>
      <!-- 当前定位 -->
      <Location :address="address" />
    </div>
  </div>
</template>

<script>
import Header from "../components/Header.vue";
import Location from "../components/Location.vue";
export default {
  data() {
    return {
      city: "",
      searchValue: "",
    };
  },
  computed: {
    address() {
      return this.$store.getters.address;
    },
  },
  components: { Header, Location },
  beforeRouteEnter(to, from, next) {
    // console.log(to);
    next((vm) => {
      vm.city = to.params.city;
    });
  },
};
</script>

<style scoped>
.address {
  width: 100%;
  height: 100%;
  overflow: auto;
  box-sizing: border-box;
  padding-top: 45px;
}

.city-search {
  background-color: #fff;
  padding: 10px 20px;
  color: #333;
  margin-top: 45px;
}
.search {
  background-color: #eee;
  height: 40px;
  border-radius: 10px;
  box-sizing: border-box;
  line-height: 40px;
}
.search .city {
  padding: 0 10px;
}
.city i {
  margin-right: 10px;
}
.search input {
  margin-left: 5px;
  background-color: #eee;
  outline: none;
  border: none;
}
</style>