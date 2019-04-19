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
  publicPath: process.env.NODE_ENV === 'production'
    ? '/gwent-cards/'
    : '/',
}
