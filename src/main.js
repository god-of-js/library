import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import Firebase from "./firebase"; //imported firebase into main.js
Vue.config.productionTip = false;
Vue.prototype.$firebase = new Firebase(); //made it accessible
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
