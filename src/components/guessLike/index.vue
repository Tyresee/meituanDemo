<template>
    <div class="ttc-guessLike">
        <h2>
            猜你喜欢
        </h2>
        <ul>
            <li v-for="(item,index) in likeList" :key="index">
                <router-link :to="{ path: `/goodsDetail/${item.itemId}` }">
                    <div class="img-wrapper left-wrapper l">
                        <img :src="item.sellerPic">
                    </div>
                    <div class="right-wrapper l">
                        <h3>{{item.sellerName}}</h3>
                        <p>{{item.sellerTag}}</p>
                        <div class="right-bottom">
                            <div class="price l">
                                <p class="onlinePrice l">{{item.price | price}}<span>元</span></p>
                                <p class="storePrice l">门市价:{{item.storePrice}}元</p>
                                <div style='clear:both'></div>
                            </div>
                            <div class="soldNum r">已售{{item.soldNum}}</div>
                        </div>
                    </div>
                    <div style='clear:both'></div>
                </router-link>
            </li>

        </ul>
        <div class="seeAll">
            <p>查看全部团购</p>
            <span>
                <img :src="pics.rightarrow">
            </span>
        </div>
    </div>
</template>
<script>
/* eslint-disable */
export default {
  props: {
    likeList: {
      type: Array,
      default() {
        return [];
      }
    }
  },
  data() {
    return {
      pics: {
        rightarrow: require("@/assets/img/rightarrow.png")
      }
    };
  }
};
</script>
<style lang="scss">
.ttc-guessLike {
  background: #ffffff;
  border-top: 1px solid #ddd8ce;
  border-bottom: 1px solid #ddd8ce;
  margin-top: 0.2rem;

  h2 {
    text-align: left;
    margin-left: 0.2rem;
    font-size: 0.34rem;
    padding-bottom: 0.2rem;
    padding-top: 0.2rem;
    color: #333;
    border-bottom: 1px solid #ddd8ce;
  }
  ul {
    :last-child {
      border: none;
    }
    li {
      display: block;
      position: relative;
      padding: 0.28rem 0.2rem;
      padding-left: 0;
      margin-left: 0.2rem;
      border-bottom: 1px solid #ddd8ce;

      img {
        margin: 0;
        padding: 0;
        width: 100%;
        height: 100%;
      }
      .img-wrapper {
        width: 1.8rem;
        height: 1.84rem;
        text-align: center;
      }
      .right-wrapper {
        position: relative;
        min-width: 74%;
        h3 {
          margin-left: 0.2rem;
          padding-top: 0.1rem;
          margin-bottom: 0.12rem;
          font-size: 0.3rem;
          text-align: left;
          font-weight: 400;
          color: #333;
        }
        p {
          margin-left: 0.2rem;
          font-size: 0.24rem;
          text-align: left;
          margin-bottom: 0.16rem;
          color: #666;
        }
        .right-bottom {
          .price {
            display: flex;
            align-items: flex-end; //沿容器底部对齐
            .onlinePrice {
              color: #06c1ae;
              font-size: 0.4rem;
              margin-bottom: 0;
            }
            .storePrice {
              margin-bottom: 0;
              padding-bottom: 0.08rem;
              font-size: 0.24rem;
            }
          }
          .soldNum {
            position: absolute;
            bottom: 0;
            right: 0;
            padding-bottom: 0.1rem;
            font-size: 0.24rem;
            color: #666;
          }
        }
      }
    }
  }
  .seeAll {
    border-top: 1px solid #ddd8ce;
    height: 0.8rem;
    line-height: 0.8rem;
    font-size: 0.3rem;
    position: relative;
    p {
      display: inline;
      position: absolute;
      left: 0.2rem;
      color: #06c1ae;
    }
    span {
      position: absolute;
      right: 0.2rem;
      img {
        width: 0.3rem;
        height: 0.3rem;
      }
    }
  }
}
</style>
