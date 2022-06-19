module.exports = {
  devServer: {
    open: true,
    host: "localhost",
    proxy: {
      // 配置跨域
      "/api": {
        target: "https://www.thenewstep.cn/v1/eleme/api/",
        ws: true,
        changOrigin: true,
        pathRewrite: {
          "^/api": "",
        },
      },
    },
  },
};
