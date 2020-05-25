const express = require('express')
const app = express()
var axios = require('axios')
const apiRoutes = express.Router() //后端路由
app.use('/api', apiRoutes)
module.exports = {
  chainWebpack: config => {
    // 设置别名
    config.resolve.alias
      // 语法： .set(别名,路径)
      .set('components', '@/components')
      .set('common', '@/common')
      .set('api', '@/api')
  },
  devServer: {
    before(app) {
      // 后端代理
      app.get('/api/getDiscList', function(req, res) {
        var url = 'https://c.y.qq.com/splcloud/fcgi-bin/fcg_get_diss_by_tag.fcg'
        axios
          .get(url, {
            headers: {
              referer: 'https://c.y.qq.com/',
              host: 'c.y.qq.com'
            },
            params: req.query //前端传过来的数据
          })
          .then(response => {
            res.json(response.data)
          })
          .catch(e => {
            console.log(e)
          })
      })
    }
  }
}
