(function () {
  xtl.$qS('div.login-tab').onclick = function (e) {
    let target = e.target
    if (target.nodeName === "SPAN") {
      clearClass(xtl.$qSA('div.login-tab span'))
      addCalss(target, 'active')
      if (target.getAttribute('code') === "1" && target.className === "active") {
        xtl.$qS('div.login-con').innerHTML = xtl.plugin.config.ARROW_A
      }
      if (target.getAttribute('code') === "2" && target.className === "active") {
        xtl.$qS('div.login-con').innerHTML = xtl.plugin.config.ARROW_B
      }
    }
  }
  function clearClass(lists) {
    for (let i = 0; i < lists.length; i++) {
      lists[i].className = ''
    }
  }
  function addCalss(target, css = 'active') {
    target.className = css
  }

  xtl.$qS('button[name=login]').onclick = function () {
    let username = xtl.$qS('input[name=username]')
    let password = xtl.$qS('input[name=password]')
    console.log(xtl.service.login);
    xtl.send(xtl.service.login, function (data) {
      if (username.value === '' || password.value === '') {
        alert('用户名或密码为空！')
        return
      }
      let flag = false;
      for (let i = 0; i < data.length; i++) {
        if (data[i].username === username.value && data[i].password == password.value) {
          flag = true
          break
        }
      }
      if (flag) {
        xtl.setCookie('username', username.value)
        location.href = './main.html?username=' + username.value
      } else {
        password.value = ''
        alert('用户名或密码错误！')
      }
    })
  }
  function init() {
    xtl.methods.go('./main.html')
  }
  init()
})();
