<template>
  <div class="area" v-if="cityInfo">
    <div class="alphabet">
      <div class="scroll-wrap">
        <!-- 热门城市 -->
        <div class="hot-wrap">
          <div class="title">热门城市</div>
          <ul class="hot-city">
            <li v-for="(item, index) in cityInfo.hotCities" :key="index">
              {{ item.name }}
            </li>
          </ul>
        </div>

        <!-- 所有城市 -->
        <div class="city-wrap">
          <!-- 循环字母 -->
          <div
            class="city-content"
            v-for="(character, index) in keys"
            :key="index"
          >
            <div class="title">{{ character }}</div>
            <!-- 循环城市 -->
            <ul>
              <li v-for="(city, i) in cityInfo[character]" :key="i">
                {{ city.name }}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    cityInfo: {},
    keys: {},
  },
};
</script>

<style scoped>
.area {
  margin-top: 10px;
  box-sizing: border-box;
  padding: 0 16px;
  background: #fff;
  height: calc(100% - 65px);
  overflow: hidden;
}
.scroll-wrap {
  background: #fff;
  overflow: auto;
}
.title {
  color: #aaa;
  padding: 15px 0;
}
.hot-city {
  padding: 0 16px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
}
.hot-city li {
  width: 30%;
  background: #f1f1f1;
  margin: 0 10px 10px 0;
  text-align: center;
  padding: 10px;
  box-sizing: border-box;
}
.city-content li {
  padding: 10px;
  border-bottom: 1px solid #eee;
}
</style>