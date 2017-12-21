import fetch from '@/plugins/fetch'

export default {
  async getHome ({ commit }) {
    try {
      const home = await fetch('/mock/home.json')
      console.log(home)
      commit('setHome', home)
    } catch (e) {
      console.log(e)
    }
  },
  async getGoods ({ commit }, itemId) {
    try {
      const goods = await fetch(`/mock/goods${itemId}.json`)
      console.log(goods)
      commit('setGoods', goods)
    } catch (e) {
      console.log(e)
    }
  }
}
