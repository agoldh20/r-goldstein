import Vue from "vue";
import App from "./App.vue";
import router from "./router";
app.use(require('prerender-node').set('prerenderToken', process.env.PRETENDER_TOKEN


Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
