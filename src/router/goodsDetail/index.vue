<template>
  <div class="ttc-goodsDetail">
    <div class="nav-bar">
      <router-link to="/home" ><div class="nav-left">
        <img :src="imgs.leftarrow.src">
      </div></router-link>
      <div class="nav-header">
        {{navBarTitle}}
      </div>
      <div class="nav-right">

        <div class="collect l" v-show="collectShow" @click="toCollect">
          <div class="img-wrapper"><img :src="imgs.collect.src" alt=""></div>
          <p>收藏</p>
        </div>
        <div class="collected l" v-show="collectedShow" @click="toUncollect">
          <div class="img-wrapper"><img :src="imgs.collected.src" alt=""></div>
          <p>取消收藏</p>
        </div>
        <div class="nav-btn l" @click="dropdownToggle">
          <div class="img-wrapper"><img :src="imgs.nav.src" alt=""></div>
          <p>导航</p>
        </div>
        <div class="nav-dropdown" :style="dropdownStyle">
          <ul>
            <li>
              <div class="img-wrapper l">
                <img :src="imgs.home.src" alt="">
              </div>
              <router-link to="/home" ><span>首页</span></router-link>
            </li>
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
    <div class="content-wrapper">
      <div class="deal">
        <a class="toutu">
          <img class="toutu-img" :src="goods.sellerPic | imageMogr(750, 195)" alt="">
          <div class="description">
            <h1>{{goods.title}}</h1>
            <p>{{goods.subtitle}}</p>
          </div>
        </a>
        <div class="buy-price">
          <div class="top-box">
            <div class="container">
              <div class="price">
                <strong>
                  {{goods.price | price}}
                </strong>
                <span>元</span>
              </div>
              <span class="retail-price">
                门市价：{{goods.storePrice | price}}元
              </span>
            </div>
            <router-link to="/submitOrder"> <a class="btn btn-strong buy-btn">立即抢购</a></router-link>
            <router-link :to="{path: `/submitOrder/`}"> <a class="btn btn-strong buy-btn">立即抢购</a></router-link>
            <!-- <router-link :to="{ path: `/goodsDetail/${item.itemId}` }"> -->
          </div>
          <div class="agreement">
            <ul>
              <li class="l" v-for="(agreement,index) in currentSeller.agreements" :key="index">
                <div class="icon-wrapper"><img :src="agreement.icon" alt=""></div>
                <span>{{agreement.intro}}</span>
              </li>
              <li class="soldNum l">
                <div class="icon-wrapper"><img :src="imgs.soldNum.src" alt=""></div>
                <span>已售{{currentSeller.soldNum}}</span>
              </li>
            </ul>
            <div style='clear:both'></div>
          </div>
        </div>
        <div class="tags-container list-group ">
          <a class="star-row">
            <div class="star-rating">
              {{currentSeller.numOfComments}}人评价
            </div>
          </a>
          <div class="cloud-tags dd-padding">
            <a class="btn btn-tag l   " :class='tag.positive===1?"btn-tag-light":""'
               v-for="(tag,index) in currentSeller.tags" :key="index">
              <span class="tag-title">
                  {{tag.tagTitle}}
              </span>
              <span class="tag-num">
                {{tag.tagNum}}
              </span>
            </a>
            <div style='clear:both'></div>
          </div>

        </div>
        <div class="position-container list-group">
          <div class="group-title ">商家信息</div>
          <div class="group-item dd-padding" >
            <div class="merchant-card">
              <div class="detail">
                <a class="detail-info">
                <h5 class="title single-line">碉堡烤鱼（新街口店）</h5>
                <div class="address single-line" >秦淮区中山南路101号金銮大厦4-5楼</div>
                <div class="dist" >
                  <span class="text-icon icon-sp icon-location"></span>
                  <span class="dist-title" >离我最近</span>
                </div>
              </a></div>
              <div class="call" ></div>
            </div>
          </div>
        </div>
        <div class="menu-container list-group">
          <div class="group-title">套餐</div>
        </div>
        <div class="notice-container list-group">
          <div class="group-title">购买须知</div>
        </div>

      </div>


      <div class="nav-bread" v-show=0>这个暂时没做</div>
    </div>
   <div class="footer-container">
     <partOfFooter></partOfFooter>
     <toTopBtn></toTopBtn>
   </div>
  </div>
</template>
<script>
import { mapState, mapActions } from "vuex";

import partOfFooter from "@/components/partOfFooter";
import toTopBtn from "@/components/toTopBtn";
export default {
  components: {
    partOfFooter,
    toTopBtn
  },
  data() {
    return {
      collectShow: 1,
      collectedShow: 0,
      dropdownStyle: "height: 0",
      navBarTitle: "团购详情",
      currentSeller: {
        title: "碉堡烤鱼",
        subtitle: "清江鱼套餐，建议2-4人使用",
        price: 116,
        retailPrice: 136,
        soldNum: 13772,
        rating: 4.5,
        numOfComments: 3286,
        agreements: [
          {
            icon: require("@/assets/img/refund.png"),
            intro: "支持随时退款"
          },
          {
            icon: require("@/assets/img/checked.png"),
            intro: "支持过期自动退"
          }
        ],
        tags: [
          {
            tagTitle: "菜品不错",
            tagNum: 579,
            positive: 1
          },
          {
            tagTitle: "肉类好",
            tagNum: 451,
            positive: 1
          },
          {
            tagTitle: "分量足",
            tagNum: 302,
            positive: 1
          },
          {
            tagTitle: "回头客",
            tagNum: 300,
            positive: 1
          },
          {
            tagTitle: "干净卫生",
            tagNum: 250,
            positive: 1
          },
          {
            tagTitle: "主食赞",
            tagNum: 6,
            positive: 1
          },
          {
            tagTitle: "不好吃",
            tagNum: "123",
            positive: 0
          },
          {
            tagTitle: "不推荐",
            tagNum: "32",
            positive: 0
          }
        ]
      },
      imgs: {
        leftarrow: {
          name: "leftarrow",
          src: require("@/assets/img/leftarrow.png")
        },
        collect: {
          name: "collect",
          src: require("@/assets/img/collect.png")
        },
        collected: {
          name: "collected",
          src: require("@/assets/img/collected.png")
        },
        nav: {
          name: "nav",
          src: require("@/assets/img/nav.png")
        },
        home: {
          name: "home",
          src: require("@/assets/img/home.png")
        },
        mine: {
          name: "mine",
          src: require("@/assets/img/mine.png")
        },
        toutu: {
          name: "toutu",
          src: require("@/assets/img/toutu1.jpg")
        },
        soldNum: {
          name: "soldNum",
          src: require("@/assets/img/mine2.png")
        }
      }
    };
  },
  computed: {
    ...mapState(["goods"])
  },
  methods: {
    ...mapActions(["getGoods"]),
    toCollect() {
      this.collectShow = 0;
      this.collectedShow = 1;
    },
    toUncollect() {
      this.collectShow = 1;
      this.collectedShow = 0;
    },
    dropdownToggle() {
      if (this.dropdownStyle === "height: 0") {
        this.dropdownStyle = "height: 1.66rem";
      } else {
        this.dropdownStyle = "height: 0";
      }
    }
  },
  beforeMount() {
    this.getGoods(this.$route.params.itemId);
    console.log(...mapState(["goods"]));
    // alert(this.goods.price);
    console.log(mapState(["goods"]));
  }
};
</script>
<style lang="scss">
body {
  font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
  font-size: 0.28rem;
  line-height: 1.5;
  color: #333;
  background-color: #f0f0f0;
}
div {
  text-align: center;
}
.ttc-goodsDetail {
  .group-title {
    text-align: left;
  }
  img {
    width: 100%;
    height: 100%;
    display: block;
  }
  .nav-bar {
    span {
      color: white;
    }
    .nav-left {
      padding-left: 0.2rem;
      padding-top: 0.2rem;
      padding-bottom: 0.2rem;
      width: 0.8rem;
      height: 1.02rem;
      line-height: 1.02rem;
    }
    .nav-header {
      display: block;
      -webkit-box-flex: 1;
      -ms-flex: 1;
      font-size: 0.36rem;
      font-weight: 400;
      text-align: center;
      line-height: 1rem;
      margin: 0;
      text-overflow: ellipsis;
      white-space: nowrap;
      overflow: hidden;
    }
    .nav-right {
      .collect {
        text-align: -webkit-center;
        width: 1rem;
        color: #fff;
        .img-wrapper {
          width: 0.5rem;
          height: 0.5rem;
          margin-top: 0.1rem;
          margin-bottom: 0.1rem;
        }
        p {
          font-size: 0.2rem;
          text-align: center;
        }
      }
      .collected {
        text-align: -webkit-center;
        width: 1rem;
        color: #fff;
        .img-wrapper {
          width: 0.5rem;
          height: 0.5rem;
          margin-top: 0.1rem;
          margin-bottom: 0.1rem;
        }
        p {
          font-size: 0.2rem;
          text-align: center;
        }
      }
      .nav-btn {
        text-align: -webkit-center;
        width: 1rem;
        color: #fff;
        .img-wrapper {
          width: 0.5rem;
          height: 0.5rem;
          margin-top: 0.1rem;
          margin-bottom: 0.1rem;
        }
        p {
          font-size: 0.2rem;
          text-align: center;
        }
      }
      .nav-dropdown {
        position: absolute;
        right: 0.04rem;
        top: 1.06rem;
        width: 2rem;
        height: 0;
        background: #06c1ae;
        opacity: 0.9;
        z-index: 100;
        overflow: hidden;
        -webkit-transition: height 0.1s;
        ul {
          li {
            position: relative;
            height: 0.82rem;
            line-height: 0.82rem;
            border-bottom: 1px solid #21897d;
            text-align: center;
            .img-wrapper {
              position: absolute;
              left: 0.6rem;
              top: 0.26rem;
              width: 0.27rem;
              height: 0.27rem;
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
  .content-wrapper {
    min-height: 137px;
    .deal {
      .toutu {
        display: block;
        position: relative;
        overflow: hidden;
        height: 3.9rem;
        .toutu-img {
          position: relative;
          top: 50%;
          width: 100%;
          min-height: 100%;
          transform: translateY(-50%);
          -webkit-transform: translateY(-50%);
          -moz-transform: translateY(-50%);
          -ms-transform: translateY(-50%);
        }
        .description {
          position: absolute;
          left: 0.3rem;
          right: 0.3rem;
          bottom: 0.24rem;
          z-index: 1;
          text-shadow: 1px 1px 1px #000;
          color: #fff;
          h1 {
            text-align: left;
            width: 100%;
            margin-bottom: 0.14rem;
            font-size: 0.38rem;
            line-height: 1.1;
          }
          p {
            text-align: left;
            font-size: 0.28rem;
          }
        }
      }
      .buy-price {
        border-bottom: 1px solid #ddd8ce;
        .top-box {
          position: relative;
          top: 0;
          left: 0;
          color: #999;
          width: 100%;
          box-sizing: border-box;
          padding: 0.28rem 0.2rem;
          border-bottom: 1px solid #ddd8ce;
          background-color: #fff;
          .container {
            text-align: left;
            line-height: 1;
            .price {
              display: inline-block;
              strong {
                color: #06c1ae;
                font-size: 0.66rem;
                font-weight: bolder;
              }
              span {
                color: #06c1ae;
                margin-right: 0.06rem;
              }
            }
            .retail-price {
              letter-spacing: -0.02rem;
              margin-right: 0.06rem;
            }
          }
          .buy-btn {
            position: absolute;
            right: 0.2rem;
            top: 0.21rem;
            height: 0.8rem;
            width: 2.6rem;
            margin: 0;
            line-height: 0.8rem;
            font-size: 0.4rem;
          }
        }
        .agreement {
          padding: 0.28rem 0.2rem;
          background-color: #fff;
          ul {
            line-height: 1;
            li {
              display: inline-block;
              height: 0.56rem;
              width: 50%;
              padding: 0;
              box-sizing: border-box;
              line-height: 0.56rem;
              color: #666;
              text-align: left;
              white-space: nowrap;
              text-overflow: ellipsis;
              overflow: hidden;
              .icon-wrapper {
                vertical-align: middle;
                display: inline-block;
                width: 0.43rem;
                height: 0.43rem;
              }
              span {
                font-size: 0.28rem;
                vertical-align: middle;
                color: #6bbd00;
              }
            }
            .soldNum {
              span {
                color: #999;
              }
            }
          }
        }
      }

      .tags-container {
        .star-row {
          display: block;
          height: 100%;
          padding: 0.28rem 0.2rem;
        }
        .cloud-tags {
          padding-bottom: 0.22rem;
          padding-top: 0.19rem;
          border-top: 1px solid #ddd8ce;
        }
      }
      .position-container {
        .group-title {
          text-align: left;
        }
      }
      .menu-container {
        margin-top: 0.2rem;
        margin-bottom: 0;
        font-size: 0.3rem;
        border-top: 1px solid #ddd8ce;
        border-bottom: 1px solid #ddd8ce;
        background-color: #fff;
      }
     
    }
  }
  .footer-container {
    margin-top: 0.5rem;
  }
}
</style>
