(function () {
  Object.assign(xtl.plugin, {
    // 配置常量
    config: {
      ARROW_A: `
        <input type="text" name="username" placeholder="邮箱/手机号码/小米ID">
        <input type="password" name="password" placeholder="密码">
        <button name="login">登录</button>
        <p class="phoneText">手机短信登录/注册</p>
        <p class="enrollOrForget">
          <a href="javascript:;">立即注册</a>
          <a href="javascript:;">忘记密码?</a>
        </p>
        <div class="otherLogin">
          <div login="qq"><div></div></div>
          <div login="wb"><div></div></div>
          <div login="zfb"><div></div></div>
          <div login="wx"><div></div></div>
        </div>`,
      ARROW_B: `
        <p class="sweepCode">请使用小米手机米家等小米旗下APP扫码登录</p>
        <div class="code">
          <img src="./img/logincode.jpg" alt="">
        </div>
        <p class="openApp">使用 <span>小米商城APP</span> 扫一扫</p>
        <p class="miPhone">小米手机可打开「设置」>「小米帐号」扫码登录</p>
        `,
      ROW_NAV: `<li><a href="#">%item%</a></li>`,
      ROW_NAV_ITEM: `
        <li>
          <a href="../goods.html%id%"><img src="img/%pic%" alt=""></a>
          <p class="goodsname">%name%</p>
          <p class="goodsprice">%price%</p>
        </li>`,
      SIDEBAR: `<li><a href="#">%item%</a><img src="img/14.png" alt=""></li>`,
      SIDERBAR_ITEM:`
      <li>
        <a href="#">
          <img src="img/%pic%" alt="">
          <span>%name%</span>
        </a>
      </li>`,
      LISTBOX: `
        <dl class="dl%num%">
          <dt><img src="img/%pic%" alt="" class="long" /></dt>
          <dd class="dd1">%name%</dd>
          <dd class="dd2">%describe%</dd>
          <dd class="dd3"><span class="span1">%price%元</span> <span class="span2">%oldPrice%元</span></dd>
        </dl>`,
      TOWER: `
        <div class="home-banner-box">
          <img src="img/%home-banner-box-pic%" alt="">
        </div>
        <div class="%category% phone">
          <div class="top">
            <div class="title">
              <h2>%title%</h2>
              <div class="hot" name="%category%" tier="%tier%">
                <a href="javascript:;" code="0" class="active">热门</a>
                %tablist%
              </div>
            </div>
          </div>
          <div class="bottom">
            <div class="sidebar">
              <dl class="dliimg1">
                <dd>
                  <a href="#"><img src="img/%sidebarpic1%" alt="" class="towerHeadimgtwo" /></a>
                </dd>
              </dl>
              <dl class="dliimg2">
                <dd>
                  <a href="#"><img src="img/%sidebarpic2%" alt="" class="towerHeadimgtwo" /></a>
                </dd>
              </dl>
            </div>
            <ul class="tablist">
              <li>
                %productList%
              </li>
            </ul>
          </div>
        </div>`,
        TABLIST: `<a href="javascript:;" code="%code%">%item%</a>`,
        PRODECTLIST_ITEM: `
          <dl class="dl1">
            <dt><img src="img/%pic%" alt="" /></dt>
            <dd class="dd1">%name%</dd>
            <dd class="dd2">%describe%</dd>
            <dd class="dd3"><span class="span1">%price%</span> %oldPrice%</dd>
          </dl>`,
        PRODECTLIST_LAST_ITEM: `
          <div class="divlast">
            <dl class="dllast">
              <dt class="dt1">
                <img src="img/%pic%" alt=""/>
                <p class="p1">%name%</p>
                <p class="p2">%price%</p>
              </dt>
            </dl>
            <dl class="dllast dllast2">
              <dt class="dt2">
                <img src="img/imgmore.png" alt="" />
                <p class="p1">浏览更多</p>
                <p class="p2">%tabList%</p>
              </dt>
            </dl>
          </div>
        `,
        PRODECTLIST_NONE_LAST_ITEM: `
        <div class="divlast">
          <dl class="dllast dllast2">
            <dt class="dt2">
              <img src="img/imgmore.png" alt="" />
              <p class="p1">浏览更多</p>
              <p class="p2">%tabList%</p>
            </dt>
          </dl>
        </div>
      `,
      OLD_PRICE: `<span class="span2">%oldPrice%</span>`,
      LINK_LIST: `
        <dl>
          <dt><a href="#">%title%</a></dt>
          %linkItem%
        </dl>`,
      LINK_LIST_ITEM:`<dd><a href="#">%txt%</a></dd>`,
      FOOT_LINKS_ITEM: `<li><a href="#">%txt%</a></li>`,
      VIDEO_LIST_ITEM: `
        <dl class="dl4">
          <dt>
            <img src="img/%pic%" alt="" />
            <span><img src="img/imgplay.png" alt=""></span>
          </dt>
          <dd>
            <div class="text">
              <p class="p1">%title%</p>
              <p class="p2">%title2%</p>
            </div>
          </dd>
        </dl>
      `
    }

  });
})();
