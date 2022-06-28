<template>
  <div class="addresss">
    <Header :isLeft="true" title="选择收货地址" />
    <div class="city-search">
      <div class="search">
        <span class="city" @click="$router.push('/city')">
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
      <Location @click="selectAddress()" :address="address" />
    </div>
    <!-- 列表 -->
    <ul class="area">
      <li
        v-for="(item, index) in areaList"
        :key="index"
        @click="selectAddress(item)"
      >
        <h4>{{ item.name }}</h4>
        <p>{{ item.district }} {{ item.address }}</p>
      </li>
    </ul>
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
      areaList: [],
    };
  },
  computed: {
    address() {
      return this.$store.getters.address;
    },
  },
  watch: {
    searchValue() {
      this.handleSearch();
    },
  },
  methods: {
    handleSearch() {
      // console.log(this.searchValue);
      const self = this;
      AMap.plugin("AMap.AutoComplete", function () {
        var autoOptions = {
          //city 限定城市，默认全国
          city: self.city,
        };
        // 实例化AutoComplete
        var autoComplete = new AMap.AutoComplete(autoOptions);
        // 根据关键字进行搜索
        autoComplete.search(self.searchValue, function (status, result) {
          // 搜索成功时，result即是对应的匹配数据
          self.areaList = result.tips;
        });
      });
    },
    selectAddress(item) {
      // console.log(item);
      if (item) {
        this.$store.dispatch(
          "setAddress",
          item.district + item.address + item.name
        );
      } else {
        this.$store.dispatch("setAddress", this.address);
      }

      // 跳转到Home组件
      this.$router.push("/home");
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

.area {
  margin-top: 16px;
  background: #fff;
}
.area li {
  border-bottom: 1px solid #eee;
  padding: 8px 16px;
  color: #aaa;
}
.area li h4 {
  font-weight: bold;
  color: #333;
  margin-bottom: 5px;
}
</style>