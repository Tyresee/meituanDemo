import jsCookie from 'js-cookie'
import getTime from './getTime'

export default function install (Vue) {
  Vue.prototype.$$cookie = jsCookie
  Vue.prototype.$$getTime = getTime

  Vue.filter('price', (originalPrice, rate = 100) => {
  	return originalPrice / rate
  })

  Vue.filter('imageMogr', (src, width, height) => {
  	return `${src}?imageMogr/gravity/Center/crop/${width}x${height}/`
  })
}
