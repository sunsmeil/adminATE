var merge = require('webpack-merge')
var prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  isUglyfy: false, //是否压缩
  //build
  //baseApi: '/~lujiahua/dsp/branches/console/src/www/console.php?do='
  //dev
  baseApi: '/api/~lujiahua/dsp/branches/console/src/www/console.php?do='
})
