const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  // 不希望打包後的檔名出現雜湊值，就可以在 vue.config.js 加入 filenameHashing: false
  transpileDependencies: true
})
