<template>
  <div class="area" ref="scrollArea" v-if="cityInfo">
    <div class="scroll-wrap">
      <!-- 热门城市 -->
      <div class="hot-wrap city-list">
        <div class="title">热门城市</div>
        <ul class="hot-city">
          <li
            @click="$emit('selectCity', item)"
            v-for="(item, index) in cityInfo.hotCities"
            :key="index"
          >
            {{ item.name }}
          </li>
        </ul>
      </div>

      <!-- 所有城市 -->
      <div class="city-wrap">
        <!-- 循环字母 -->
        <div
          class="city-content city-list"
          v-for="(character, index) in keys"
          :key="index"
        >
          <div class="title">{{ character }}</div>
          <!-- 循环城市 -->
          <ul>
            <li
              @click="$emit('selectCity', city)"
              v-for="(city, i) in cityInfo[character]"
              :key="i"
            >
              {{ city.name }}
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="area-keys">
      <ul>
        <li @click="selectKey(0)">#</li>
        <li
          @click="selectKey(index + 1)"
          v-for="(item, index) in keys"
          :key="index"
        >
          {{ item }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import BScroll from "better-scroll";
export default {
  props: {
    cityInfo: Object,
    keys: Object,
  },
  methods: {
    initScroll() {
      this.scroll = new BScroll(this.$refs.scrollArea, {
        click: true,
      });
    },
    selectKey(index) {
      const cityList =
        this.$refs.scrollArea.getElementsByClassName("city-list");

      let element = cityList[index];

      // 滚动到对应的元素位置上
      this.scroll.scrollToElement(element, 250);
    },
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

.area-keys {
  position: fixed;
  right: 0;
  top: 25%;
  color: #aaa;
  font-size: 12px;
  line-height: 1.4;
  text-align: center;
  padding: 0 5px;
}
</style>