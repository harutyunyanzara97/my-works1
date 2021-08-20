import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import i18n from './i18n'
import gtag from "vue-gtag-next"
import vSelect from "vue-select";




createApp(App).use(i18n).use(vSelect).use(store).use(router).use(gtag,{ property: {
        id: 'UA-123456-7'
    }}).mount('#app')
