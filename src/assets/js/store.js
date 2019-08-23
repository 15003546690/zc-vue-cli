import Vue from 'vue';
// import vuex from 'vuex';
Vue.use(vuex);
let store = new vuex.Store({
	state:{
		loading:{
	          lock: true,
	          text: 'Loading',
	          spinner: 'el-icon-loading',
	          background: 'rgba(0, 0, 0, 0.7)'
	        },
	    websockNum:0
	}
})
export default store