window.addEventListener('load', row_nav);// 主导航及切换栏过渡效果
// function row_nav() {
//     var row_nav = document.getElementById('row_nav'),
//         tabs = row_nav.querySelectorAll('li'),
//         row_nav_con = document.getElementById('row_nav_con'),
//         cons = row_nav_con.querySelectorAll('.lis');
//     var timer;
//     row_nav.onmouseenter = function() {
//         Fblock();
//     }
//     row_nav_con.onmouseenter = function() {
//         Fblock();
//     }
//     row_nav.onmouseleave = function() {
//         Fnone();
//     }
//     row_nav_con.onmouseleave = function() {
//         Fnone();
//     }
//     function Fblock() {
//         clearTimeout(timer);
//         timer = setTimeout(function() {
//             row_nav_con.style.display = 'block';
//         },300);
//         // row_nav_con.style.display = 'block';
//         row_nav_con.style.height = '230px';
//         row_nav_con.style.animation = 'a .3s ease';
//     }
//     function Fnone() {
//         clearTimeout(timer);
//         row_nav_con.style.height = '0px';
//         row_nav_con.style.animation = 'b .3s ease';
//         timer = setTimeout(function() {
//             row_nav_con.style.display = 'none';
//         },300);
//     }
//     for(var i = 0;i < tabs.length;i++) {
//         tabs[i].index = i;
//         tabs[i].onmouseenter = function() {
//             for(var k = 0;k < cons.length;k++) {
//                 cons[k].className = 'lis';
//             }
//             cons[this.index].className = 'lis active';
//         }
//     }

// }
function row_nav() {
  var row_nav = document.getElementById('row_nav'),
    tabs = row_nav.querySelectorAll('li'),
    row_nav_con = document.getElementById('row_nav_con'),
    cons = row_nav_con.querySelectorAll('.lis');
  var timer;
  row_nav.onmouseenter = function () {
    Fblock();
  }
  row_nav_con.onmouseenter = function () {
    Fblock();
  }
  row_nav.onmouseleave = function () {
    Fnone();
  }
  row_nav_con.onmouseleave = function () {
    Fnone();
  }
  function Fblock() {
    clearTimeout(timer);
    timer = setTimeout(function () {
      row_nav_con.style.transition = 'all .3s ease';
      row_nav_con.style.height = '230px';
    }, 300);
  }
  function Fnone() {
    clearTimeout(timer);
    timer = setTimeout(function () {
      row_nav_con.style.transition = 'all .3s ease';
      row_nav_con.style.height = '0px';
    }, 300);
  }
  for (var i = 0; i < tabs.length; i++) {
    tabs[i].index = i;
    tabs[i].onmouseenter = function () {
      for (var k = 0; k < cons.length; k++) {
        cons[k].className = 'lis';
      }
      cons[this.index].className = 'lis active';
    }
  }

}

window.addEventListener('load', Fsidebar);// 侧边导航栏
function Fsidebar() {
  var sidebar = document.getElementById('sidebar'),
    tabs = sidebar.querySelectorAll('li'),
    sidebar_con = document.getElementById('sidebar_con'),
    cons = sidebar_con.querySelectorAll('#sidebar_con>li');
  // console.log(tabs.length,cons);
  sidebar.onmouseenter = function () {
    sidebar_con.style.display = 'block';
  }
  sidebar_con.onmouseenter = function () {
    sidebar_con.style.display = 'block';
    block_none2();
  }
  sidebar.onmouseleave = function () {
    sidebar_con_none();
  }
  sidebar_con.onmouseleave = function () {
    sidebar_con_none();
  }
  for (var j = 0; j < cons.length; j++) {
    cons[j].onmouseleave = function () {
      sidebar_con_none();
    }
  }
  block_none();
  function block_none() {
    for (var i = 0; i < tabs.length; i++) {
      tabs[i].index = i;
      tabs[i].onmouseenter = function () {
        // console.log(this.index);
        for (var k = 0; k < tabs.length; k++) {
          tabs[k].className = cons[k].className = '';
        }
        this.className = cons[this.index].className = 'active';
      }
    }
  }
  function block_none2() {
    for (var i = 0; i < cons.length; i++) {
      cons[i].index = i;
      cons[i].onmouseenter = function () {
        // console.log(this.index);
        for (var k = 0; k < cons.length; k++) {
          cons[k].className = '';
        }
        this.className = tabs[this.index].className = 'active';
      }
    }
  }
  function sidebar_con_none() {
    sidebar_con.style.display = 'none';
    for (var k = 0; k < tabs.length; k++) {
      tabs[k].className = '';
    }
  }
}

window.addEventListener("load", banner);// 轮播图
function banner() {
  var main = document.querySelector('.ban'),
    img_list = document.querySelector('.banimg'),
    imgs = img_list.getElementsByTagName('li'),
    tab_list = document.querySelector('.bantab'),
    tabs = tab_list.getElementsByTagName('li'),
    left = document.getElementById('banleft'),
    right = document.getElementById('banright'),
    index = 0;
  for (var i = 0; len = tabs.length, i < len; i++) {
    tabs[i].index = i;
    tabs[i].onclick = function () {
      for (var j = 0; j < len; j++) {
        tabs[j].className = imgs[j].className = '';
      }
      this.className = imgs[this.index].className = 'active';
      index = this.index;
    }
  }
  function play() {
    index++;
    if (index > len - 1) {
      index = 0;
    }
    for (var j = 0; j < len; j++) {
      tabs[j].className = imgs[j].className = '';
    }
    tabs[index].className = imgs[index].className = 'active';
  }
  right.onclick = function () {
    play();
  }
  left.onclick = function () {
    index--;
    if (index < 0) {
      index = len - 1;
    }
    for (var j = 0; j < len; j++) {
      tabs[j].className = imgs[j].className = '';
    }
    tabs[index].className = imgs[index].className = 'active';
  }
  var timer = setInterval(function () {
    play();
  }, 2000);
  main.onmouseenter = function () {
    clearInterval(timer);
  }
  main.onmouseleave = function () {
    timer = setInterval(function () {
      play();
    }, 2000);
  }
}

window.addEventListener('load', countDown);// 倒计时
function countDown() {
  var span = document.getElementById('countdown'),
    session = document.getElementById('session'),
    spanlist = span.querySelectorAll('span'),
    times = document.getElementById('times');
  var dateFu;
  var timeNow = new Date();
  if (timeNow.getHours() < 14) {
    dateFu = new Date(timeNow.getFullYear() + '/' + (timeNow.getMonth() + 1) + '/' + timeNow.getDate() + ' ' + '14:0:0');
    session.innerText = '14:00 场';
  } else if (timeNow.getHours() < 20) {
    dateFu = new Date(timeNow.getFullYear() + '/' + (timeNow.getMonth() + 1) + '/' + timeNow.getDate() + ' ' + '20:0:0');
    session.innerText = '20:00 场';
  } else {
    dateFu = new Date(timeNow.getFullYear() + '/' + (timeNow.getMonth() + 1) + '/' + (timeNow.getDate() + 1) + ' ' + '14:0:0');
    session.innerText = '14:00 场';
  }
  var counttime = function () {
    var dateNow = new Date();
    var time = dateFu - dateNow;
    var day = parseInt(time / (24 * 60 * 60 * 1000));
    // console.log(day);
    var hour = parseInt((time - day * (24 * 60 * 60 * 1000)) / (60 * 60 * 1000));
    // console.log(hour);
    var minute = parseInt((time - day * (24 * 60 * 60 * 1000) - hour * (60 * 60 * 1000)) / (60 * 1000));
    // console.log(minute);
    var second = parseInt((time - day * (24 * 60 * 60 * 1000) - hour * (60 * 60 * 1000) - minute * (60 * 1000)) / 1000);
    // console.log(second);
    day = day < 10 ? "0" + day : day;
    hour = hour < 10 ? "0" + hour : hour;
    minute = minute < 10 ? "0" + minute : minute;
    second = second < 10 ? "0" + second : second;
    spanlist[0].innerText = hour;
    spanlist[1].innerText = minute;
    spanlist[2].innerText = second;
  }
  counttime();
  setInterval(function () {
    counttime();
  }, 1000);
}

window.addEventListener('load', longlist);// 滑动列表
function longlist() {
  var oleft = document.querySelector('#listboxleft'),
    oright = document.querySelector('#listboxright');
  var listbox = document.querySelector('.listbox'),
    listul = listbox.querySelector('ul'),
    lis = listul.children;
  // console.log(lis[0].offsetWidth)
  listul.appendChild(lis[0].cloneNode(true));
  // console.log(ul.clientWidth,ullis[0].offsetWidth);
  var timer = null;
  timer = setInterval(autoplay, 4000);
  var key = 0;
  function autoplay() {
    key++;// 播放张数
    // console.log(key,leader,ullis.length - 1);
    if (key > lis.length - 1) { // 判断是否播放完
      leader = 0; // 迅速跳回
      key = 1; // 下次播放第二张
    }
    animate(listul, -key * lis[0].offsetWidth);
  }// 缓动动画函数
  var leader = 0;//缓动动画变量
  function animate(obj, target) {
    clearInterval(obj.timer); // 清除定时器/*定时任务，缓动轮播 30毫秒到target位置*/
    obj.timer = setInterval(function () {
      leader = leader + (target - leader) / 30;//缓动动画公式
      obj.style.left = leader + "px";
    }, 0);
  }
  oright.onclick = function () {
    autoplay();
  }
  oleft.onclick = function () {
    key--;
    // console.log(key,leader);
    if (key < 0) { // 判断是否播放完
      leader = -4 * lis[0].offsetWidth; // 迅速跳回
      key = 3; // 下次播放第二张
    }
    animate(listul, -key * lis[0].offsetWidth);
  }
  oright.onmouseover = function () {
    clearInterval(timer);
  }
  oright.onmouseout = function () {
    timer = setInterval(autoplay, 4000);
  }
  oleft.onmouseover = function () {
    clearInterval(timer);
  }
  oleft.onmouseout = function () {
    timer = setInterval(autoplay, 4000);
  }
  listbox.onmouseover = function () {
    clearInterval(timer);
  }
  listbox.onmouseout = function () {
    timer = setInterval(autoplay, 4000);
  }
}

// window.addEventListener('load',tablists);// 楼层切换列表
// function tablists() {
//     var hotlist = document.querySelectorAll('.hot'),
//         tablist = document.querySelectorAll('.tablist');
//         // console.log(tablist.length);
//     for(var i = 0;i < hotlist.length;i++) {
//         hotlist[i].index = i;
//         // console.log(hotlist[i].index);
//         hotlist[i].onmouseenter = function() {
//             var hots = this.querySelectorAll('a'),
//                 tabs = tablist[this.index].querySelectorAll('li');
//             // console.log(this.index);
//             for(var j = 0;j < hots.length;j++) {
//                 hots[j].index = j;
//                 hots[j].onmouseenter = function() {
//                     for(var k = 0;k < hots.length;k++) {
//                         hots[k].className = tabs[k].className = '';
//                     }
//                     this.className = tabs[this.index].className = 'active';
//                 }
//             }
//         }
//         // console.log(hots);
//     }
// }

(function () { // // 楼层切换列表
  let tier_arr = []
  xtl.send(xtl.service.product, function (msg) {
    let tower = msg.tower
    for (const key in tower) {
      tier_arr.push(0)
    }
  })

  window.addEventListener('mouseover', fn1)
  // xtl.$qS('div.tower').onmouseover =
  function fn1(e) {
    // xtl.$qS('div.tower').onclick = function (e) {
    let target = e.target
    if (target.parentNode.className === 'hot' && target.nodeName === "A") {
      let productName = target.parentNode.getAttribute('name');
      let OProduct = xtl.$qS('div.' + productName)
      let OproductList = xtl.$qS('ul.tablist li', OProduct)
      let code = target.getAttribute('code')
      let tierNum = target.parentNode.getAttribute('tier')
      tier_arr[tierNum - 0] = code - 0
      xtl.send(xtl.service.product, function (msg) {
        let tower = msg.tower
        let pList = msg.productList
        OproductList.innerHTML = function () {
          let a = []
          for (let i = 0; i < pList[productName][tier_arr[tower[productName]["tier"]]].length; i++) {
            if (pList[productName][tier_arr[tower[productName]["tier"]]][i]["last"] !== true) {
              let s = xtl.plugin.config.PRODECTLIST_ITEM
              let pic, name, describe, price, oldprice
              pic = s.replace(/%pic%/, pList[productName][tier_arr[tower[productName]["tier"]]][i]["pic"])
              name = pic.replace(/%name%/, pList[productName][tier_arr[tower[productName]["tier"]]][i]["name"])
              describe = name.replace(/%describe%/, pList[productName][tier_arr[tower[productName]["tier"]]][i]["describe"])
              price = describe.replace(/%price%/, pList[productName][tier_arr[tower[productName]["tier"]]][i]["price"])
              if (pList[productName][tier_arr[tower[productName]["tier"]]][i]["oldPrice"]) {
                oldprice = price.replace(/%oldPrice%/, function () {
                  return xtl.plugin.config.OLD_PRICE.replace(/%oldPrice%/, pList[productName][tier_arr[tower[productName]["tier"]]][i]["oldPrice"])
                }())
              } else {
                oldprice = price.replace(/%oldPrice%/, function () {
                  return ""
                }())
              }
              a.push(oldprice)
            } else {
              console.log(pList[productName][tier_arr[tower[productName]["tier"]]][i]["pic"]);
              if(pList[productName][tier_arr[tower[productName]["tier"]]][i]["pic"]) {
                let s = xtl.plugin.config.PRODECTLIST_LAST_ITEM
                let pic, name, price, tabList
                pic = s.replace(/%pic%/, pList[productName][tier_arr[tower[productName]["tier"]]][i]["pic"])
                name = pic.replace(/%name%/, pList[productName][tier_arr[tower[productName]["tier"]]][i]["name"])
                price = name.replace(/%price%/, pList[productName][tier_arr[tower[productName]["tier"]]][i]["price"])
                if (tier_arr[tower[productName]["tier"]] === 0) {
                  tabList = price.replace(/%tabList%/, "热门")
                } else {
                  tabList = price.replace(/%tabList%/, tower[productName]["tabList"][+tier_arr[tower[productName]["tier"]] - 1])
                }
                a.push(tabList)
              }else {
                let s = xtl.plugin.config.PRODECTLIST_NONE_LAST_ITEM
                let tabList
                if (tier_arr[tower[productName]["tier"]] === 0) {
                  tabList = s.replace(/%tabList%/, "热门")
                } else {
                  tabList = s.replace(/%tabList%/, tower[productName]["tabList"][+tier_arr[tower[productName]["tier"]] - 1])
                }
                a.push(tabList)
              }
            }
          }
          return a.join('')
        }()
      })
    }
  }

  xtl.$qS('div.content2').onmouseover = function (e) {
    let target = e.target
    if (target.nodeName === "A" && target.parentNode.className === 'hot') {
      console.log(target);
      let aList = xtl.$qSA('a', target.parentNode)
      for (let i = 0; i < aList.length; i++) {
        aList[i].className = ''
      }
      target.className = 'active'
    }
  }
})();

window.addEventListener('load', backtop);// 回到顶部
function backtop() {
  var backTop = document.getElementById('backTop');
  // console.log(backTop);
  window.onscroll = function () {
    var nowtop = window.scrollY;
    // console.log(nowtop);
    if (nowtop >= 1000) {
      backTop.style.display = 'block';
    } else {
      backTop.style.display = 'none';
    }
  }
  backTop.onclick = function () {
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
  }
}
