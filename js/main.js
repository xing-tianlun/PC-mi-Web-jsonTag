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
            console.log(toplist[key][i].id);
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

  function getlistbox() {
    xtl.send(xtl.service.product, function (msg) {
      let flashbuy = msg.flashbuy
      let arr = []
      for (const key in flashbuy) {
        if (flashbuy.hasOwnProperty(key)) {
          for (let i = 0; i < flashbuy[key].length; i++) {
            arr.push('<li>')
            for (let j = 0; j < flashbuy[key][i].length; j++) {
              let num, pic, name, describe, price, oldPrice
              num = xtl.plugin.config.LISTBOX.replace(/%num%/, j + 2)
              pic = num.replace(/%pic%/, flashbuy[key][i][j].pic)
              name = pic.replace(/%name%/, flashbuy[key][i][j].name)
              describe = name.replace(/%describe%/, flashbuy[key][i][j].describe)
              price = describe.replace(/%price%/, flashbuy[key][i][j].price)
              oldPrice = price.replace(/%oldPrice%/, flashbuy[key][i][j].oldPrice)
              arr.push(oldPrice)
            }
            arr.push('</li>')
          }
        }
      }
      xtl.$qS('div.listbox ul').innerHTML = arr.join('')
    })
  }
  function getPhoneProcuctList() {
    xtl.send(xtl.service.product, function (msg) {
      let phoneList = msg.phoneList
      let arr = []
      for (let i = 0; i < phoneList.length; i++) {
        let pic, name, describe, price, oldPrice
        for (const key in phoneList[i]) {
          if (phoneList[i].hasOwnProperty(key)) {
            pic = xtl.plugin.config.PRODECTLIST_ITEM.replace(/%pic%/, phoneList[i]["pic"])
            name = pic.replace(/%name%/, phoneList[i]["name"])
            describe = name.replace(/%describe%/, phoneList[i]["describe"])
            price = describe.replace(/%price%/, phoneList[i]["price"])
            if(phoneList[i].hasOwnProperty("oldPrice")) {
              oldPrice = price.replace(/%oldPrice%/, function () {
                return xtl.plugin.config.OLD_PRICE.replace(/%oldPrice%/, phoneList[i]["oldPrice"])
              }())
            }else {
              oldPrice = price.replace(/%oldPrice%/, function () {
                return xtl.plugin.config.OLD_PRICE.replace(/%oldPrice%/, "")
              }())
            }
          }
        }
        arr.push(oldPrice)
      }
      xtl.$qS('div.phone div.bottom div.phoneList').innerHTML = arr.join('')
    })
  }
  function getTower() {
    xtl.send(xtl.service.product, function (msg) {
      let tower = msg.tower
      let pList = msg.productList
      let arr = []
      for (const key in tower) {
        if (tower.hasOwnProperty(key)) {
          let home_banner_box_pic, category, tier
          let title, tabList, sidebarpic1, sidebarpic2, productL
          home_banner_box_pic = xtl.plugin.config.TOWER.replace(/%home-banner-box-pic%/, tower[key]["home-banner-box"])
          tier = home_banner_box_pic.replace(/%tier%/g, tower[key]["tier"])
          category = tier.replace(/%category%/g, key)
          title = category.replace(/%title%/, tower[key]["title"]) // tower[key]["title"]
          tabList = title.replace(/%tablist%/, function () {
            let titles = tower[key]["tabList"]
            let arr = []
            for (let i = 0; i < titles.length; i++) {
              arr.push(xtl.plugin.config.TABLIST.replace(/%item%/, titles[i]).replace(/%code%/, i + 1))
            }
            return arr.join('')
          }())
          sidebarpic1 = tabList.replace(/%sidebarpic1%/, tower[key]["sidebarpic1"])
          sidebarpic2 = sidebarpic1.replace(/%sidebarpic2%/, tower[key]["sidebarpic2"])
          productL = sidebarpic2.replace(/%productList%/, function() {
            let a = []
            // for (let item in pList) {
              // if (pList.hasOwnProperty(item)) {
                for (let i = 0; i < pList[key][0].length; i++) {
                  if(pList[key][0][i]["last"] !== true) {
                    let s = xtl.plugin.config.PRODECTLIST_ITEM
                    let pic, name, describe,price,oldprice
                    pic = s.replace(/%pic%/, pList[key][0][i]["pic"])
                    name = pic.replace(/%name%/, pList[key][0][i]["name"])
                    describe = name.replace(/%describe%/, pList[key][0][i]["describe"])
                    price = describe.replace(/%price%/, pList[key][0][i]["price"])
                    if(pList[key][0][i]["oldPrice"]) {
                      oldprice = price.replace(/%oldPrice%/, function() {
                        return xtl.plugin.config.OLD_PRICE.replace(/%oldPrice%/, pList[key][0][i]["oldPrice"])
                      }())
                    }else {
                      oldprice = price.replace(/%oldPrice%/, function() {
                        return ""
                      }())
                    }
                    a.push(oldprice)
                  }else {
                    
                    if(pList[key][0][i]["pic"]) {
                      let s = xtl.plugin.config.PRODECTLIST_LAST_ITEM
                      let pic, name ,price , tabList
                      pic = s.replace(/%pic%/, pList[key][0][i]["pic"])
                      name = pic.replace(/%name%/, pList[key][0][i]["name"])
                      price = name.replace(/%price%/, pList[key][0][i]["price"])
                      // tabList = price.replace(/%tabList%/, tower[key]["tabList"][0])
                      tabList = price.replace(/%tabList%/, "热门")
                      a.push(tabList)
                    }else {
                      let s = xtl.plugin.config.PRODECTLIST_NONE_LAST_ITEM
                      let tabList
                      tabList = s.replace(/%tabList%/, "热门")
                      a.push(tabList)
                    }
                  }
                }
              // }
            // }
            return a.join('')
          }())
          arr.push(productL)
        }
      }
      xtl.$qS('div.tower').innerHTML = arr.join('')
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
  function getVideoList() {
    xtl.send(xtl.service.product, function (msg) {
      let videoList = msg.videoList
      let arr = []
      for (let i = 0; i < videoList.length; i++) {
        let pic, title, title2
        for (const key in videoList[i]) {
          if (videoList[i].hasOwnProperty(key)) {
            pic = xtl.plugin.config.VIDEO_LIST_ITEM.replace(/%pic%/, videoList[i]["pic"])
            title = pic.replace(/%title%/, videoList[i]["title"])
            if(videoList[i].hasOwnProperty("title2")) {
              title2 = title.replace(/%title2%/, videoList[i]["title2"])
            }else {
              title2 = title.replace(/%title2%/, "")
            }
          }
        }
        arr.push(title2)
      }
      xtl.$qS('div.video div.bottom').innerHTML = arr.join('')
    })
  }
  function init() {
    xtl.methods.go()
    getUsername()
    getTopListNav()
    getTopListNavItem()
    getSideBar()
    getSidebarItem()
    getlistbox()
    getPhoneProcuctList()
    getTower()
    getLinks()
    getFootLinks()
    getVideoList()
  }
  init()
})();
