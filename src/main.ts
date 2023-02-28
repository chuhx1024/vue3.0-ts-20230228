import { createApp } from 'vue'
import App from './App.vue'
import { initRouter } from './router'

import './assets/styles/index.less'

const app = createApp(App)

initRouter(app)

app.mount('#app')
