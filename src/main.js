// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import './assets/css/base.css';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import VueAwesomeSwiper from 'vue-awesome-swiper';
import 'swiper/dist/css/swiper.css';
import animated from 'animate.css';
import BaiduMap from 'vue-baidu-map';
import VueQuillEditor from 'vue-quill-editor';
import 'quill/dist/quill.core.css';
import 'quill/dist/quill.snow.css';
import 'quill/dist/quill.bubble.css';
import './assets/iconfont/iconfont.css';
import './assets/js/axios.js';
import './assets/js/common.js';
// import store from './assets/js/store.js';
Vue.use(animated);
Vue.config.productionTip = false
Vue.use(ElementUI);
Vue.use(VueAwesomeSwiper);
Vue.use(VueQuillEditor)
Vue.use(BaiduMap,{
	ak:'byDTxukdiHCFTQBGmx5pnKVwtCKnTxK9'
})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
