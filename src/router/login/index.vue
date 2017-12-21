<template>
  <div class="ttc-login">
    <div class="nav-bar">
      <router-link to="/home">
        <div class="nav-left">
          <img :src="imgs.leftarrow.src">
        </div>
      </router-link>
      <div class="nav-header">
        {{navBarTitle}}
      </div>
      <div class="nav-right">
        <div class="nav-btn l" @click="dropdownToggle">
          <div class="img-wrapper"><img :src="imgs.nav.src" alt=""></div>
          <p>导航</p>
        </div>
        <div class="nav-dropdown" :style="dropdownStyle">
          <ul>
            <router-link to="/home" >
              <li>
                <div class="img-wrapper l">
                  <img :src="imgs.home.src" alt="">
                </div>
                <span>首页</span>
              </li>
            </router-link>
            <li>
              <div class="img-wrapper l">
                <img :src="imgs.mine.src" alt="">
              </div>
              <span>我的</span>
            </li>
          </ul>
        </div>
      </div>
    </div>

    <div id="tips" style="display: block; transform-origin: 0px 0px 0px; opacity: 1; transform: scale(1, 1);">
      请输入手机号
    </div>

    <div id="login">
      <dl class="list">
        <dd class="nav">
          <ul class="taba taban samfix">
            <li class="" @click="accountLoginShow">
              <a class="react">美团账号登录</a>
            </li>
            <li class="" @click="phoneNumLoginShow">
              <a class="react">手机验证登录</a>
            </li>
            <div class="slide" :class="{slideToRight: toRight,slideToLeft: toLeft}"></div>
          </ul>
        </dd>

      </dl>
      <form id="normal-login-form" action="" v-show="accountLogin">
        <dl class="list list-in">
          <dd class="visiable">
            <dl>
              <dd class="dd-padding kv-line-r">
                <input id="username" class="input-weak" type="text" placeholder="账户名/手机号/Email" name="email">
              </dd>
              <dd class="dd-padding kv-line-r">
                <input id="password" class="input-weak" type="text" placeholder="请输入您的密码" name="password">
              </dd>
            </dl>
          </dd>
        </dl>
        <div class="btn-wrapper">
          <button type="submit" class="btn btn-larger btn-block login-btn">登录</button>
        </div>

      </form>
      <form id="quick-login-form" action="" v-show="phoneNumLogin">
        <dl class="list list-in">
          <dd class="visiable">
            <dl>
              <dd class="dd-padding kv-line-r">
                <input id="login-mobile" class="input-weak l" type="tel" placeholder="请输入手机号" name="mobile">
                <button id="smsCode" type="button" class="btn btn-weak kv-v btn-captacha r" disabled="disabled">获取验证码
                </button>
              </dd>
              <dd class="dd-padding kv-line-r">
                <input class="input-weak" type="tel" placeholder="请输入您的密码" name="code">
              </dd>
              <dd class="dd-padding regist-tip">
                <div class="txt">未注册过的手机将自动注册为美团账户</div>
              </dd>
            </dl>
          </dd>
        </dl>
        <div class="btn-wrapper">
          <button type="submit" class="btn btn-larger btn-block login-btn">登录</button>
        </div>
      </form>
    </div>
    <ul class="subline">
      <li class="l"><a href="//i.meituan.com/account/signup">立即注册</a>
      </li>
      <li class="r"><a href="https://i.meituan.com/risk2/resetreq">找回密码</a>
      </li>
    </ul>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        imgs: {
          leftarrow: {
            name: 'leftarrow',
            src: require('@/assets/img/leftarrow.png')
          },
          collect: {
            name: 'collect',
            src: require('@/assets/img/collect.png')
          },
          collected: {
            name: 'collected',
            src: require('@/assets/img/collected.png')
          },
          nav: {
            name: 'nav',
            src: require('@/assets/img/nav.png')
          },
          home: {
            name: 'home',
            src: require('@/assets/img/home.png')
          },
          mine: {
            name: 'mine',
            src: require('@/assets/img/mine.png')
          },
          toutu: {
            name: 'toutu',
            src: require('@/assets/img/toutu1.jpg')
          },
          soldNum: {
            name: 'soldNum',
            src: require('@/assets/img/mine2.png')
          }
        },
        dropdownStyle: 'height: 0',
        navBarTitle: '美团网',
        accountLogin: true,
        phoneNumLogin: false,
        toLeft: true,
        toRight: false
      }
    },
    methods: {
      dropdownToggle() {
        if (this.dropdownStyle === 'height: 0') {
          this.dropdownStyle = 'height: 1.66rem'
        } else {
          this.dropdownStyle = 'height: 0'
        }
      },
      accountLoginShow () {
        this.accountLogin = true
        this.phoneNumLogin = false
        this.toLeft = true
        this.toRight = false
      },
      phoneNumLoginShow () {
        this.accountLogin = false
        this.phoneNumLogin = true
        this.toLeft = false
        this.toRight = true
      }
    }
  }
</script>
<style lang="scss" scoped>


  .ttc-login {
    img {
      width: 100%;
      height: 100%;
      display: block;
      vertical-align: middle;
      border: 0;
    }
    dd {
      display: block;
      -webkit-margin-start: 40px;
    }
    dl {
      display: block;
      -webkit-margin-before: 1em;
      -webkit-margin-after: 1em;
      -webkit-margin-start: 0px;
      -webkit-margin-end: 0px;
    }
    .kv-line-r {
      display: -webkit-box;
      display: -ms-flexbox;
      margin: .2rem 0;
    }
    input {
      font-family: inherit;
      font-size: inherit;
      line-height: inherit;
      color: inherit;
      font: inherit;
      margin: 0;
    }
    input.input-weak, textarea.input-weak {
      border: 0;
      height: .6rem;
      margin: -.15rem 0;
      text-indent: .1rem;
      line-height: 1;
      font-size: .3rem;
      border-radius: .06rem;
      padding: 0;
    }
    .nav-bar {
      span{
        color: #ffffff;
      }
      .nav-left {
        padding-left: .2rem;
        padding-top: .2rem;
        padding-bottom: .2rem;
        width: .8rem;
        height: 1.02rem;
        line-height: 1.02rem;
      }
      .nav-header {
        display: block;
        -webkit-box-flex: 1;
        -ms-flex: 1;
        font-size: .36rem;
        font-weight: 400;
        text-align: center;
        line-height: 1rem;
        margin: 0;
        text-overflow: ellipsis;
        white-space: nowrap;
        overflow: hidden;
      }
      .nav-right {
        .nav-btn {
          text-align: -webkit-center;
          width: 1rem;
          color: #fff;
          .img-wrapper {
            width: .5rem;
            height: .5rem;
            margin-top: .1rem;
            margin-bottom: .1rem;
          }
          p {
            font-size: .2rem;
            text-align: center;
          }
        }
        .nav-dropdown {
          position: absolute;
          right: .04rem;
          top: 1.06rem;
          width: 2rem;
          height: 0;
          background: #06c1ae;
          opacity: .9;
          z-index: 100;
          overflow: hidden;
          -webkit-transition: height .1s;
          ul {
            li {
              position: relative;
              height: .82rem;
              line-height: .82rem;
              border-bottom: 1px solid #21897d;
              text-align: center;
              .img-wrapper {
                position: absolute;
                left: .6rem;
                top: .26rem;
                width: .27rem;
                height: .27rem;
              }
              span {
                position: absolute;
                left: 1rem;
              }
            }
          }
        }
      }
    }
    #tips {
      /*display: none;*/
      font-size: .26rem;
      background-color: #FFF6E0;
      color: #D78900;
      border-bottom: 1px solid #FFEBC8;
      text-align: center;
      padding: .2rem;
      line-height: 1.4;
    }
    #login {
      dl {
        display: block;
        -webkit-margin-before: 1em;
        -webkit-margin-after: 1em;
        -webkit-margin-start: 0px;
        -webkit-margin-end: 0px;

      }
      dl.list {
        dt, dd {
          margin: 0;
          border-bottom: 1px solid #DDD8CE;
          overflow: hidden;
          font-size: inherit;
          font-weight: 400;
          position: relative;
        }
        .dd-padding, dt, dd > .react {
          padding: .28rem .2rem;
        }
        dd dl > .dd-padding, dd dl dd > .react, dd dl > dt {
          padding-left: 0;
        }
        dd dl {
          margin: 0;
          margin-bottom: -1px;
          padding-left: .2rem;
          border: 0;
        }
        dd {
          display: block;
          -webkit-margin-start: 40px;
          margin: 0;
          border-bottom: 1px solid #DDD8CE;
          overflow: hidden;
          font-size: inherit;
          font-weight: 400;
          position: relative;
          :last-of-type {
            border-bottom: 0;
          }
        }
        dd > .input-weak {
          width: 100%;
          display: block;
        }
        dd.nav {
          text-align: center;
          ul {
            margin: 0;
            padding: 0;
            list-style-type: none;
          }
          ul.taba {
            li {
              a.react {
                padding-top: .28rem;
                padding-bottom: .2rem;
                display: block;
                color: inherit;
                height: 100%;
              }
              a.react:active {
                background: rgba(0, 0, 0, .1);
              }
              display: block;
              text-align: center;
              -webkit-box-flex: 1;
              -ms-flex: 1;
              position: relative;
            }
            .slide {
              width: 47%;
              position: absolute;
              bottom: -.08rem;
              border-bottom: .08rem solid #06c1ae;
              -webkit-transition: left .2s ease-in;
            }
            .slideToRight{
              left: 50%;
            }
            .slideToLeft{
              left: 3%;
            }
            display: -webkit-box;
            display: -ms-flexbox;
            padding-left: .2rem;
            padding-right: .2rem;
            position: relative;
            border-bottom: .08rem solid #DDD8CE;
          }
        }
        border-top: 1px solid #DDD8CE;
        border-bottom: 1px solid #DDD8CE;
        background-color: #fff;
        margin: 0;
        border-top: 0;
      }
      form {
        display: block;
        margin-top: 0em;
      }
      #normal-login-form {
        dl {
          display: block;
          -webkit-margin-before: 1em;
          -webkit-margin-after: 1em;
          -webkit-margin-start: 0px;
          -webkit-margin-end: 0px;
        }
        dl.list {
          dd {
            margin: 0;
            border-bottom: 1px solid #DDD8CE;
            overflow: hidden;
            font-size: inherit;
            font-weight: 400;
            position: relative;
          }

          dd:last-of-type {
            border-bottom: 0;
          }
          border-top: 1px solid #DDD8CE;
          border-bottom: 1px solid #DDD8CE;
          margin-top: .2rem;
          margin-bottom: 0;
          background-color: #fff;
        }
        dl.list:first-child {
          margin: 0;
          border-top: 0;
        }
        dl.list-in {
          margin: 0;
          border-top: 0;
        }
        .btn-wrapper {
          margin: .4rem .2rem;
        }

        transform-origin: 0px 0px 0px;
        opacity: 1;
        transform: scale(1, 1);
      }
      #quick-login-form {
        button {
          margin-top: -.15rem;
          margin-bottom: -.15rem;
        }
        #login-mobile {
          display: inline;
          width: 71%;
        }
        dl {
          display: block;
          -webkit-margin-before: 1em;
          -webkit-margin-after: 1em;
          -webkit-margin-start: 0px;
          -webkit-margin-end: 0px;
        }
        .list {
          .visiable {
            dl {
              .regist-tip {
                .txt {
                  padding-left: .1rem;
                  text-align: left;
                }
              }
              margin-top: 0;
              margin-bottom: 0;
            }
            margin: 0;
            border-bottom: 1px solid #DDD8CE;
            overflow: hidden;
            font-size: inherit;
            font-weight: 400;
            position: relative;
          }
          dd > .btn {
            margin-top: -.15rem;
            margin-bottom: -.15rem;
          }
          dd:last-of-type {
            border-bottom: 0;
          }
          border-top: 1px solid #DDD8CE;
          border-bottom: 1px solid #DDD8CE;
          margin-top: .2rem;
          margin-bottom: 0;
          background-color: #fff;
        }
        dl.list:first-child {
          margin: 0;
          border-top: 0;
        }
        dl.list-in {
          margin: 0;
          border-top: 0;
        }
        .btn-wrapper {
          margin: .4rem .2rem;
        }

        transform-origin: 0px 0px 0px;
        opacity: 1;
        transform: scale(1, 1);
      }
    }
    .subline {
      padding-left: .2rem;
      padding-right: .2rem;
    }

  }
</style>
