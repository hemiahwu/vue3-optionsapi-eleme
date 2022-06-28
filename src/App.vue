<template>
  <router-view />
</template>
<script>
export default {
  name: "App",
  components: {},
  created() {
    this.getLocation();
  },
  methods: {
    getLocation() {
      const self = this;
      AMap.plugin("AMap.Geolocation", function () {
        var geolocation = new AMap.Geolocation({
          // 是否使用高精度定位，默认：true
          enableHighAccuracy: true,
          // 设置定位超时时间，默认：无穷大
          timeout: 10000,
        });

        geolocation.getCurrentPosition(function (status, result) {
          if (status == "complete") {
            onComplete(result);
          } else {
            onError(result);
          }
        });

        function onComplete(data) {
          // data是具体的定位信息

          const { lng, lat } = data.position;
          self.getLngLatLocation(lng, lat);
        }

        function onError(data) {
          // 定位出错
        }
      });
    },
    getLngLatLocation(lng, lat) {
      const self = this;
      AMap.plugin("AMap.Geocoder", function () {
        var geocoder = new AMap.Geocoder({
          // city 指定进行编码查询的城市，支持传入城市名、adcode 和 citycode
          city: "",
        });

        const lnglat = [lng, lat];

        geocoder.getAddress(lnglat, function (status, result) {
          if (status === "complete" && result.info === "OK") {
            // result为对应的地理位置详细信息
            // console.log(result);
            // console.log(result.regeocode);
            // console.log(result.regeocode.addressComponent.city);
            // console.log(result.regeocode.formattedAddress);

            // 存储到vuex中
            self.$store.dispatch("setLocation", result.regeocode);
            self.$store.dispatch(
              "setAddress",
              result.regeocode.formattedAddress
            );
          }
        });
      });
    },
  },
};
</script>

<style>
#app {
  width: 100%;
  height: 100%;
  font-size: 14px;
  background: #f1f1f1;
}
</style>