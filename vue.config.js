module.exports = {
  chainWebpack: config => {
    config
      .plugin('html')
      .tap(args => {
          args[0].title = "재홍이 블로그";
          return args;
      })
  }
}