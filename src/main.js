import { createApp } from 'vue'
import App from './App.vue'
import router from '@/router'
import './routeGuard'
import store from '@/store'
import { Tabbar, TabbarItem } from 'vant';

const app = createApp(App)


app.use(Tabbar);
app.use(TabbarItem);
app.use(router)
app.use(store)

app.mount('#app')
