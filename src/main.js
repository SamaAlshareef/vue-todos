import Vue from "vue";
import App from "./App.vue";
import VueRouter from "vue-router";
import TodoList from "./components/TodoList";
import DoneTodos from "./components/DoneTodos.vue";
import Todos from "./components/Todos.vue";

Vue.use(VueRouter);

Vue.config.productionTip = false;

const routes = [
  {path: '/', component: TodoList},
  {path: '/todos', component: Todos},
  {path: '/done-todos', component: DoneTodos}
];

const router = new VueRouter({
 routes,
 mode: "history"
});

new Vue({
  router,
  render: h => h(App),
}).$mount("#app");
