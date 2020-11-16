(function () {
  /*
  * @描述 从cookie中获取用户名并设置
  */
  function getUsername() {
    let username = xtl.getCookie('username')
    xtl.$qS('.head-right a[name=username]').innerText = username
  }
  xtl.$qS('.head-right a[name=quit]').onclick = function () {
    xtl.removeCookie('username')
    history.go(0)
  }
  function getTopListNav() {
    xtl.send(xtl.service.product, function (msg) {
      let toplist = msg.toplist
      let arr = []
      for (const key in toplist) {
        if (toplist.hasOwnProperty(key)) {
          let str = xtl.plugin.config.ROW_NAV.replace(/%item%/, key)
          arr.push(str)
        }
      }
      xtl.$qS('ul#row_nav').innerHTML = arr.join('')
    })
  }
  function getTopListNavItem() {
    xtl.send(xtl.service.product, function (msg) {
      let toplist = msg.toplist
      let arr = []
      for (const key in toplist) {
        if (toplist.hasOwnProperty(key)) {
          arr.push('<li class="lis"><ul>')
          for (let i = 0; i < toplist[key].length; i++) {
            let pic, name, price, id
            pic = xtl.plugin.config.ROW_NAV_ITEM.replace(/%pic%/, toplist[key][i].pic)
            name = pic.replace(/%name%/, toplist[key][i].name)
            price = name.replace(/%price%/, toplist[key][i].price)
            if(toplist[key][i].id) {
              id = price.replace(/%id%/, '?id=' + toplist[key][i].id)
            }else {
              id = price.replace(/%id%/, '')
            }
            arr.push(id)
          }
          arr.push('</ul></li>')
        }
      }
      xtl.$qS('ol#row_nav_con').innerHTML = arr.join('')
    })
  }
  function getSideBar() {
    xtl.send(xtl.service.product, function (msg) {
      let sidebar = msg.sidebar
      let arr = []
      for (const key in sidebar) {
        if (sidebar.hasOwnProperty(key)) {
          let str = xtl.plugin.config.SIDEBAR.replace(/%item%/, key)
          arr.push(str)
        }
      }
      xtl.$qS('ul#sidebar').innerHTML = arr.join('')
    })
  }
  function getSidebarItem() {
    xtl.send(xtl.service.product, function (msg) {
      let sidebar = msg.sidebar
      let arr = []
      for (const key in sidebar) {
        if (sidebar.hasOwnProperty(key)) {
          arr.push('<li>')
          for (let i = 0; i < sidebar[key].length; i++) {
            arr.push('<ul>')
            for (let j = 0; j < sidebar[key][i].length; j++) {
              if (sidebar[key][i][j].pic) {
                let pic, name
                pic = xtl.plugin.config.SIDERBAR_ITEM.replace(/%pic%/, sidebar[key][i][j].pic)
                name = pic.replace(/%name%/, sidebar[key][i][j].name)
                arr.push(name)
              } else {
                arr.push('<li></li>')
              }
            }
            arr.push('</ul>')
          }
          arr.push('</li>')
        }
      }
      xtl.$qS('ol#sidebar_con').innerHTML = arr.join('')
    })
  }

  
  
  function getLinks() {
    xtl.send(xtl.service.product, function (msg) {
      let links = msg.links
      let arr = []
      for (const key in links) {
        if (links.hasOwnProperty(key)) {
          let title, linkItem
          title = xtl.plugin.config.LINK_LIST.replace(/%title%/, key)
          linkItem = title.replace(/%linkItem%/, function () {
            let ar = []
            for (let i = 0; i < links[key]["item"].length; i++) {
              ar.push(xtl.plugin.config.LINK_LIST_ITEM.replace(/%txt%/, links[key]["item"][i]))
            }
            return ar.join('')
          }())
          arr.push(linkItem)
        }
      }
      xtl.$qS('div.linksList').innerHTML = arr.join('')
    })
  }
  function getFootLinks() {
    xtl.send(xtl.service.product, function (msg) {
      let footLinks = msg.footLinks
      let arr = []
      for (let i = 0; i < footLinks.length; i++) {
        arr.push(xtl.plugin.config.FOOT_LINKS_ITEM.replace(/%txt%/, footLinks[i]))
      }
      xtl.$qS('div.foot div.ft ul').innerHTML = arr.join('')
    })
  }
  
  function init() {
    xtl.methods.go()
    getUsername()
    getTopListNav()
    getTopListNavItem()
    getSideBar()
    getSidebarItem()
    getLinks()
    getFootLinks()
  }
  init()
})();
