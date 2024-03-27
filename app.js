import './bootstrap';
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { createI18n } from 'vue-i18n'
import router from './router'
import lang from './lang'
import App from './App.vue'
import FontAwesomeIcon from "./utils/fontawesome";
import './assets/main.css'

const app = createApp(App)
const i18n = createI18n(lang)
const stores = createPinia()

app.component("FontAwesomeIcon", FontAwesomeIcon)
app.use(i18n)
app.use(stores)
app.use(router)

/*

// Glogal variable provide/inject composition api
app.provide('globalVariable', {
  user: null,
  isLogged: false,
  async getUser(id = 1) {
    let res = await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
    return res.data ?? null
  },
})

// Directive v-highlight="'yellow'"
app.directive('highlight', {
  mounted(el, binding, vnode) {
    el.style.background = binding.value
  },
})

*/

app.mount('#app')

// Minimal
// import './bootstrap';
// import { createApp } from 'vue';
// import App from './App.vue'
// createApp(App).mount("#app")
