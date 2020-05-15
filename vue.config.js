module.exports = {
  chainWebpack: config => {
    // 设置别名
    config.resolve.alias
      // 语法： .set(别名,路径)
      .set('components', '@/components')
      .set('common', '@/common')
  }
}
