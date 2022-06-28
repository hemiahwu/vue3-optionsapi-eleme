<template>
  <div class="city">
    <div class="search-wrap">
      <div class="search">
        <i class="fa fa-search"></i>
        <input v-model="cityValue" type="text" placeholder="输入城市名" />
      </div>
      <button
        @click="$router.replace({ name: 'Address', params: { city: city } })"
      >
        取消
      </button>
    </div>
    <div v-if="searchList.length === 0">
      <div class="location">
        <Location @click="handleSelectCity({ name: city })" :address="city" />
      </div>
      <Alphabet
        @selectCity="handleSelectCity"
        ref="allCity"
        :cityInfo="cityInfo"
        :keys="keys"
      />
    </div>

    <ul class="search-list" v-else>
      <li
        @click="handleSelectCity(item)"
        v-for="(item, index) in searchList"
        :key="index"
      >
        {{ item.name }}
      </li>
    </ul>
  </div>
</template>

<script>
import Location from "../components/Location.vue";
import Alphabet from "../components/Alphabet.vue";
export default {
  data() {
    return {
      cityValue: "",
      cityInfo: {},
      keys: {},
      allCities: [],
      searchList: [],
    };
  },
  computed: {
    city() {
      return this.$store.getters?.location?.addressComponent?.city || "全国";
    },
  },
  created() {
    this.getCityInfo();
  },
  watch: {
    cityValue() {
      this.handleSearch();
    },
  },
  methods: {
    async getCityInfo() {
      const res = await this.$axios("/api/posts/cities");
      this.cityInfo = res.data;

      this.keys = Object.keys(res.data);
      this.keys.pop();
      this.keys.sort();

      this.$nextTick(() => {
        this.$refs.allCity.initScroll();
      });

      // 将所有城市放到一个容器中
      this.keys.forEach((key) => {
        this.cityInfo[key].forEach((city) => {
          this.allCities.push(city);
        });
      });
    },
    handleSelectCity(item) {
      this.$router.push({ name: "Address", params: { city: item.name } });
    },
    handleSearch() {
      if (!this.cityValue) {
        this.searchList = [];
      } else {
        this.searchList = this.allCities.filter((item) => {
          return item.name.indexOf(this.cityValue) != -1;
        });
      }
    },
  },
  components: { Location, Alphabet },
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

.search-list {
  background: #fff;
  padding: 5px 16px;
}
.search-list li {
  padding: 10px;
  border-bottom: 1px solid #eee;
}
</style>