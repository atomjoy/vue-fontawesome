# Vue3 utils
How to install fontawesome, google map in vue3.

## Fontawesome

### Install
```sh
npm i --save @fortawesome/vue-fontawesome@latest-3
npm i --save @fortawesome/fontawesome-svg-core
npm i --save @fortawesome/free-solid-svg-icons
npm i --save @fortawesome/free-regular-svg-icons
npm i --save @fortawesome/free-brands-svg-icons
```

### Add in app.js

```js
import './bootstrap';
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { createI18n } from 'vue-i18n'
import router from './router'
import lang from './lang'
import App from './App.vue'
import './assets/main.css'
import FontAwesomeIcon from "./utils/fontawesome";

const app = createApp(App)
const i18n = createI18n(lang)
const stores = createPinia()

app.component("FontAwesomeIcon", FontAwesomeIcon)
app.use(i18n)
app.use(stores)
app.use(router)

app.mount('#app')
```
