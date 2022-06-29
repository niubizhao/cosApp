import { createApp } from 'vue'
import App from './App.vue'
import router from '@/router'
import './routeGuard'
import store from '@/store'
import { Tabbar, TabbarItem,Grid, GridItem,NavBar } from 'vant';

const app = createApp(App)


app.use(Tabbar);
app.use(TabbarItem);
app.use(Grid);
app.use(GridItem);
app.use(NavBar);
app.use(router)
app.use(store)

app.mount('#app')
