/*
 * @描述 业务逻辑层
*/
(function () {
  Object.assign(xtl.methods, {
    /*
    * @ 将search或hash转换成键值对
    */
    changeHashToObj(key) {
      let hash = location.hash.substring(1)
      let arr = hash.split('&')
      let obj = {}
      for (let i = 0; i < arr.length; i++) {
        let ar = arr[i].split('=')
        obj[ar[0]] = ar[1]
      }
      return obj[key]
    },
    /*
    * @ 描述 页面初始化跳转
    * @参数 url 可选 跳转地址
    *
    */
    go(url) {
      if (url) {
        if (xtl.getCookie('username')) {
          location.href = url
        }
      } else {
        if (!xtl.getCookie('username')) {
          location.href = './login.html'
        }
      }
    },
    /*
    * @描述 去除字符串所有空格
    */
    trim(s) {
      let reg = /\s/g
      return s.replace(reg, "")
    }
  })

})();
