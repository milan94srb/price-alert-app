import Vue from 'vue'
import App from './App.vue'
import VueResource from 'vue-resource'
import VueMeta from 'vue-meta'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

Vue.use(VueResource);
Vue.use(VueMeta);

Vue.http.options.root = '/';
Vue.url.options.root = '/';

Vue.http.interceptors.push((request, next) => {
  request.credentials = true;
  next();
});

export const bus = new Vue();

new Vue({
  el: '#app',
  render: h => h(App)
})