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
    <Alphabet
      @selectCity="handleSelectCity"
      ref="allCity"
      :cityInfo="cityInfo"
      :keys="keys"
    />
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
  methods: {
    async getCityInfo() {
      const res = await this.$axios("/api/posts/cities");
      this.cityInfo = res.data;
      console.log(this.cityInfo);

      this.keys = Object.keys(res.data);
      this.keys.pop();
      this.keys.sort();

      // 在这里调用滚动触发时机

      // 等待DOM渲染完成之后,在进行触发
      this.$nextTick(() => {
        this.$refs.allCity.initScroll();
      });
    },
    handleSelectCity(item) {
      this.$router.push({ name: "Address", params: { city: item.name } });
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
</style>