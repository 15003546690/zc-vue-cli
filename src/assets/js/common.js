import Vue from 'vue';
import store from './store.js';
let v = new Vue();
const key = CryptoJS.enc.Utf8.parse('yYkJ4612699ZlXj'); 
const iv = CryptoJS.enc.Utf8.parse('yYkJ4612699ZlXj');
//只能输入数字
Vue.prototype.$Num=(val)=>{
	return val.replace(/[^\d]/g,'');//.replace(/[^0-9.]/g,'')
}
Vue.prototype.$iNum=(val)=>{
	return val.replace(/[^\d-]/g,'');//.replace(/[^0-9.]/g,'')
}
//websocket
/*Vue.prototype.$Socket=()=>{
	if ('WebSocket' in window) {
		let id=Base64.decode(Vue.prototype.GetCookie('id'));
		let webUrl='ws://192.168.112.210:3333/my-websocket?userId='+id;
		let socket = new WebSocket(webUrl);
		socket.onopen = (event) => {
		  // onOpen
		};
		socket.onmessage = (event) => {
		  // onMessage
		  v.$message({
			  message: JSON.parse(event.data).msg,
			  type: 'success'
			});
		  store.state.websockNum++
		};
		socket.onclose = (event) => {
		  // onClose
		};
		socket.onerror = (event) => {
		  // content error
		};
		socket.onbeforeunload = (event) => {
		  // window close
		  socket.onclose();
		};
	} else {
		this.$message({
		  message: '您的浏览器不支持WebSocket',
		  type: 'error'
		});
	}
}
Vue.prototype.$Socket();*/
// export default host