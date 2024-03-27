# Vue3 Fontawesome Icons
How to install free icons from fontawesome in vue3.

## Vue 3

```sh
npm install vue@latest
npm install vue-router@4
npm install vue-i18n@9
npm install pinia
npm install --save-dev @vitejs/plugin-vue
npm install @googlemaps/js-api-loader
```

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
import App from './App.vue'
import './assets/main.css'
import FontAwesomeIcon from "./utils/fontawesome";

const app = createApp(App)
app.component("FontAwesomeIcon", FontAwesomeIcon)
app.mount('#app')
```

### Add icon

```vue
// import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

<script>
function scrollToTop() {
    window.scrollTo({top: 0, behavior: 'smooth'});
    // window.scrollIntoView({ behavior: 'smooth' })    
    // window.scrollTo(0,0);
}
</script>
<template>    
    <a href="#" @click="scrollToTop"><div class="scrolltop">
        <font-awesome-icon :icon="['fas', 'chevron-up']" />
    </div></a>
</template>
<style>
html {
    scroll-behavior: smooth;
}

.scrolltop {
    color: #fff;
    background: #0099ff;
    position: fixed;
    bottom: 10px;
    right: 10px;
    padding: 15px;    
}
</style>
```

### More icons

```vue
<i class="fa-solid fa-user"></i>
<i class="fa-brands fa-twitter"></i>
<i class="fa-brands fa-youtube"></i>
<i class="fa-brands fa-x-twitter"></i>
<i class="fa-brands fa-instagram"></i>
<i class="fa-brands fa-facebook-f"></i>
<i class="fa-solid fa-question-circle"></i>
<font-awesome-icon icon="fa-solid fa-house" />
<font-awesome-icon :icon="['fab', 'x-twitter']" />
<font-awesome-icon :icon="['fas', 'chevron-up']" />
```
