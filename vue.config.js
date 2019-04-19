module.exports = {
  css: {
    loaderOptions: {
      sass: {
        data: '@import "@/scss/variables/_all.scss";',
      },
    },
  },

  productionSourceMap: false,
  parallel: false,
  publicPath: '',
}
