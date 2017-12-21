<template>
  <div class="ttc-submitOrder">
    <div class="nav-bar">
      <router-link to="/goodsDetail/1">
      <!-- <router-link :to="{ path: `/goodsDetail/${item.itemId}` }"> -->
      <a>
        <div class="nav-left"><img :src="leftarrow.src" alt=""></div>
      </a></router-link>
      <div class="nav-header">提交订单</div>
    </div>
    <div class="content-wrapper">
      <div class="content-title">{{currentItem.name}}</div>
      <div class="deal-content-wrapper">
        <div class="content-info-line">单价：
          <span class="deal-price">{{currentItem.price}}元</span>
        </div>
        <div class="content-info-line">数量：
          <div class="operate">
            <button type="button" class="btn btn-weak minus" :class="noMinusing" @click="minusNum">-</button>
            <input type="text" class="number" :value=buyingNum>
            <button type="button" class="btn btn-weak add" @click="plusNum">+</button>
          </div>
        </div>
        <div class="content-info-line">总价：
          <span class="amount">{{currentItem.price * buyingNum}}元</span>
        </div>

      </div>
      <div class="content-title">免登录直接购买</div>
      <div class="login-wrapper">
        <div class="content-info-line">
          <div class="input-wrapper">
            <input type="text" class="input-weak" value="" placeholder="请输入手机号">
          </div>
          <button type="button" disabled="" class="btn btn-weak">发送验证码</button>
        </div>
        <div class="content-info-line">
          <input type="text" class="input-weak" value="" placeholder="请输入手机短信中的验证码">
        </div>
      </div>
      <div class="btn-wrapper">
        <button type="button" disabled="" class="btn btn-block btn-strong btn-larger">提交订单</button>
      </div>
      <div class="quick-login">已有美团账号也可以去
        <router-link to="/login"><a>登录</a></router-link>
      </div>
    </div>
    <partOfFooter></partOfFooter>
  </div>
</template>
<script>
import partOfFooter from "@/components/partOfFooter";
import { mapState, mapActions } from "vuex";

export default {
  components: {
    partOfFooter
  },
  data() {
    return {
      buyingNum: 1,
      noMinusing: "btn-disabled",
      currentItem: {
        name: "碉堡烤鱼2-3人餐",
        price: 86
      },
      leftarrow: {
        name: "leftarrow",
        src: require("@/assets/img/leftarrow.png")
      }
    };
  },
  computed: {
    ...mapState(["goods"])
  },
  methods: {
    ...mapActions(["getGoods"]),
    minusNum() {
      if (this.buyingNum > 1) {
        this.buyingNum = this.buyingNum - 1;
      } else if (this.buyingNum === 1) {
        this.noMinusing = "btn-disabled";
        this.buyingNum = this.buyingNum - 1;
      }
    },
    plusNum() {
      this.noMinusing = "";
      this.buyingNum = this.buyingNum + 1;
    }
  },
  beforeMount() {
    this.getGoods(this.$route.params.itemId);
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
  text-align: left;
}

.ttc-submitOrder {
  img {
    width: 100%;
    height: 100%;
    display: block;
  }
  .nav-bar {
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
  }
  .content-wrapper {
    .content-title {
      text-align: left;
      margin: 0.6rem 0.2rem 0.2rem;
      font-size: 0.34rem;
      font-weight: 400;
    }
    .deal-content-wrapper {
      .content-info-line {
        .amount {
          font-weight: 700;
          color: #ff9712;
        }
        span {
          position: absolute;
          top: 0;
          right: 0.2rem;
        }
        .operate {
          .minus {
            margin-right: 0.1rem;
            font-family: CourierNewPSMT, Verdana;
          }
          .number {
            width: 1.2rem;
            height: 0.6rem;
            vertical-align: middle;
            border: 0.02rem solid #ddd8ce;
            border-radius: 0.06rem;
            box-sizing: border-box;
            line-height: 0.6rem;
            text-align: center;
            outline: 0;
          }
          .add {
            margin-left: 0.1rem;
            font-family: CourierNewPSMT, "Times New Roman";
          }
          position: absolute;
          top: -0.02rem;
          right: 0.2rem;
          overflow: hidden;
          text-align: right;
        }
      }
      :nth-child(1) {
        // border-top: none;
      }
      margin-bottom: 0.2rem;
      border-top: 1px solid #ddd8ce;
      border-bottom: 1px solid #ddd8ce;
      background: #fff;
    }
    .login-wrapper {
      .input-weak {
        display: block;
        width: 100%;
        height: 0.6rem;
        text-indent: 0.1rem;
        font-size: 0.3rem;
        margin: -0.15rem 0;
        line-height: 1;
        border: none;
      }
      .btn-weak {
        position: absolute;
        top: 0.16rem;
        right: 0.2rem;
      }
      .content-info-line {
        .input-wrapper {
          display: block;
          margin-right: 2.6rem;
        }
        position: relative;
        padding: 0.28rem 0.2rem 0.28rem 0;
      }
      padding-left: 0.2rem;
      background-color: #fff;
    }
    .btn-wrapper {
      margin: 0.28rem 0.2rem;
    }
    .quick-login {
      a {
        margin-left: 0.1rem;
      }
      margin: 0.2rem;
    }
    min-height: 470px;
  }
}
</style>
