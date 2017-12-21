<template>
  <div class="ttc-register">
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
            <router-link to="/home">
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

    <form id="login-form">
      <dl class="list">
        <dd class="dd-padding">
          <ol class="crumbs">
            <li>输入手机号</li>
            <span> ></span>
            <li>输入验证码</li>
            <span> ></span>

            <li>设置密码</li>
          </ol>
        </dd>
      </dl>
      <dl class="list">
        <dd class="dd-padding">
          <input id="mobile-number" class="input-weak" type="tel" placeholder="请输入您的手机号" name="mobile" value=""
                 autocomplete="off">
        </dd>
      </dl>
      <dl class="btn-wrapper">
        <div @click="agreeToggle">
          <p :class="{agreed: agree}"><span v-show="agree==true">✔</span></p>

          我已阅读并同意<a href="//i.meituan.com/about/terms">《美团网用户协议》</a>
        </div>
      </dl>
      <div class="btn-wrapper">
        <button type="submit" class="btn btn-block btn-larger"  disabled="">获取验证码</button>
      </div>
    </form>
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
          }
        },
        dropdownStyle: 'height: 0',
        navBarTitle: '注册帐号',
        agree: false

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
      agreeToggle () {
        this.agree = !this.agree
      }
    }
  }
</script>
<style lang="scss">
  body {
    font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
    font-size: .28rem;
    line-height: 1.5;
    color: #333;
    background: #f0f0f0 !important;
  }


  .ttc-register {
    img {
      width: 100%;
      height: 100%;
      display: block;
    }
    .nav-bar {
      span {
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
    form {
      display: block;
      margin-top: 0em;
    }
    #login-form {
      .list {
        .dd-padding {
          padding: .28rem .2rem;
          .crumbs {
            list-style: none;
            padding-left: 0;
            text-align: center;
            margin: 0;
          }
          ol {
            display: block;
            list-style-type: decimal;
            -webkit-margin-before: 1em;
            -webkit-margin-after: 1em;
            -webkit-margin-start: 0px;
            -webkit-margin-end: 0px;
            -webkit-padding-start: 40px;
            li {
              display: inline-block;
              text-align: center;
            }
          }
          #mobile-number {
            width: 100%;
            border: 0;
            height: .6rem;
            margin: -.15rem 0;
            text-indent: .1rem;
            line-height: 1;
            font-size: .3rem;
            border-radius: .06rem;
            padding: 0;
          }
        }
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
      .list:first-child {
        margin: 0;
        border-top: 0;
      }

      .btn-wrapper {
        margin: .28rem .2rem;
        text-align: left;
        div {
          vertical-align: middle;
          .agreed{
            background: #06c1ae;
            span{
              color: #ffffff
            }
          }
          p {
            display: inline-block;
            width: .3rem;
            height: .3rem;
            background: white;
            vertical-align: middle;

            span{
              font-size: .28rem;
              width: 100%;
              height: 100%;
            }
          }
        }

      }

    }

  }
</style>
