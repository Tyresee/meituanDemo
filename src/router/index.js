import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const scrollBehavior = (to, from, savedPosition) => {
  if (savedPosition) {
    return savedPosition
  } else {
    const position = {}
    if (to.hash) {
      position.selector = to.hash
    }
    if (to.matched.some(m => m.meta.scrollToTop)) {
      position.x = 0
      position.y = 0
    }
    return position
  }
}

export default new Router({
  mode: 'history', // 设置 history 模式
  scrollBehavior,
  base: '/', // 设置 URL base
  routes: [
    {
      path: '/',
      name: 'home',
      component(resolve) {
        require.ensure([], () => {
          resolve(require('./home'))
        })
      }
    },
    {
      path: '/home',
      name: 'home2',
      component(resolve) {
        require.ensure([], () => {
          resolve(require('./home'))
        })
      }
    },
    {
      path: '/register',
      name: 'register',
      component(resolve) {
        require.ensure([], () => {
          resolve(require('./register'))
        })
      }
    },
    {
      path: '/login',
      name: 'login',
      component(resolve) {
        require.ensure([], () => {
          resolve(require('./login'))
        })
      }
    },
    {
      path: '/goodsDetail/:itemId',
      name: 'goodsDetail',
      component(resolve) {
        require.ensure([], () => {
          resolve(require('./goodsDetail'))
        })
      }
    },
    {
      path: '/submitOrder/',
      name: 'submitOrder',
      component(resolve) {
        require.ensure([], () => {
          resolve(require('./submitOrder'))
        })
      }
    }
  ]
})
