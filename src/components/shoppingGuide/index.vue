<template>
  <div class="ttc-shoppingGuide">
    <ul>
      <li v-for="(item ,index) in items" :key="index">
        <div class="item-wrapper">
          <h3 :style="item.titleColor">{{item.title}}</h3>
          <p>{{item.intro}}</p>
          <img :src="item.pic" alt="">
        </div>
      </li>
    </ul>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        items: [
          {
            pic: require('@/assets/img/youngCouple.png'),
            title: '我们约吧',
            titleColor: 'color: #55a40f',
            intro: '恋人家人好朋友'
          },
          {
            pic: require('@/assets/img/hamburger.jpg'),
            title: '低价超值',
            titleColor: 'color:#ff3f0d',
            intro: '恋人家人好朋友'
          },
          {
            pic: require('@/assets/img/crab.png'),
            title: '聚会宴请',
            titleColor: 'color :#f742a0',
            intro: '恋人家人好朋友'

          }
        ]
      }
    }
  }
</script>
<style lang="scss">
  .ttc-shoppingGuide {
    padding: .12rem;
    background: #ffffff;
    border-top: 1px solid #DDD8CE;
    border-bottom: 1px solid #DDD8CE;
    margin-top: .2rem;
      ul{
        display: flex;
        :nth-child(2){
          border-left: 1px solid #ddd8ce;
          border-right: 1px solid #ddd8ce;
        }
        li{
          flex: 1;
          background: #ffffff;

          h3{
            font-weight: bold;
            font-size: .3rem;
            margin-top: .12rem;
            margin-bottom: .36rem;
          }
          p{
            border: none!important;
          }
          img{
            width: 1.24rem;
            height: 1.24rem;
            border: none!important;
          }
        }
      }

  }
</style>
