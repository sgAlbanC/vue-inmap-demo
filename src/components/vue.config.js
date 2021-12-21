module.exports = {
    devServer: {
      proxy: {  // 这里  你要去了解下 不然后面接口可能还会出现这个问题  只有知道原理了 才能正确的去处理问题
        '/':  { 
            target: 'http://api.map.baidu.com/geocoder?output=json&key=zSSQF0IkTliIBjcZlbNeNaDsWIHrCS0u&address=',
            changeOrigin: true,
            withCredentials: true
        }
      }
    }
  }