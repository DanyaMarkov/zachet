import Vue from "vue";
import App from "./App.vue";
import VueResource from "vue-resource";
import VueRouter from "vue-router";
import Mainp from "./components/mainp.vue";
import Worker from "./components/worker.vue";

Vue.config.productionTip = false;
Vue.use(VueResource);
Vue.use(VueRouter);

const router = new VueRouter({
  mode: "history",
  linkActiveClass: "active",
  routes: [
    { path: "/mainp", component: Mainp },
    { path: "/worker", component: Worker },
  ],
});

new Vue({
  render: (h) => h(App),
  router: router,
}).$mount("#app");
