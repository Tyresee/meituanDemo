<template>
  <div class="ttc-partOfFooter">
    <div class="footer-bar">
      <div class="left-wrapper">
        <router-link to="/login"><div class="btn l" id="login">登录</div></router-link>
        <router-link to="/register"><div class="btn l" id="reg">注册</div></router-link>
      </div>
      <div class="right-wrapper">
        <div class="btn r" id="city">{{currentCity}}</div>
        <span class="r">城市:</span>
      </div>
    </div>
    <div class="footer-nav">
      <ul>
        <li v-for="(item,index) in items" :key="index"><router-link :to="item.path">{{item.title}}</router-link></li>
      </ul>
    </div>
    <div class="footer-links">
      <span>友情链接:</span>
      <ul>
        <li v-for="(link,index) in links" :key='index'><a>{{link.linkName}}</a></li>
      </ul>
    </div>
    <div class="footer-copy-right">
      <div class="hr"></div>
      <span class="copy-right-text">©2016 美团网 <a href="http://www.miibeian.gov.cn/">京ICP证070791号</a></span>
    </div>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        currentCity: '上海',
        items: [
          {
            path: '/home',
            title: '首页',
            address: '#'

          },
          {
            path: '/home',
            title: '订单',
            address: '#'

          },
          {
            path: '/home',
            title: '客户端',
            address: '#'

          },
          {
            path: '/home',
            title: '电脑板',
            address: '#'

          },
          {
            path: '/home',
            title: '帮助',
            address: '#'

          }
        ],
        links: [
          {
            linkName: '猫眼电影',
            address: '#'
          }
        ]
      }
    }
  }
</script>
<style lang="scss">
  .ttc-partOfFooter {
    padding: 0 .2rem .4rem;
    background-color: #f0f0f0;
    display: block;

    .btn {
      border: .02rem solid #06c1ae;
      padding: 0 .3rem;
      background: 0;
      color: #06c1ae;
    }
    .footer-bar {
      margin-bottom: .4rem;
      height: .6rem;
      .left-wrapper {
        .btn {
          margin-right: .2rem;
        }
      }
      .right-wrapper {
        font-size: .28rem;
        span {
          line-height: 30px;
        }
        #city {
          margin-left: .2rem;
        }
      }
    }
    .footer-nav {
      ul {
        display: -webkit-box;
        display: -ms-flexbox;
        display: -moz-box;
        padding: .18rem 0;
        margin: 0;
        font-size: .24rem;
        white-space: nowrap;
        :last-child {
          border-right: 0;
        }
        li {
          -webkit-box-flex: 1;
          -ms-flex: 1;
          -moz-box-flex: 1;
          border-right: .02rem solid #666;
          text-align: center;
          a {
            color: #06c1ae;
          }

        }
      }
    }
    .footer-links {
      margin: .24rem .2rem;
      font-size: .24rem;
      text-align: center;
      ul {
        display: inline;
        li {
          display: inline;
        }
      }
      a {
        color: #06c1ae;
      }
    }
    .footer-copy-right {
      position: relative;
      font-size: .22rem;
      text-align: center;
      color: #999;
      .hr {
        display: block;
        position: absolute;
        width: 100%;
        top: 50%;
        content: "";
        border-top: 1px solid #999;
      }
      .copy-right-text {
        position: relative;
        padding: 0 .3rem;
        font-size: .22rem;
        text-align: center;
        background-color: #f0efed;
        color: #999;
      }
      a {
        color: #999;
      }
    }
  }
</style>
