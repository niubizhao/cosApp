import { createApp } from 'vue'
import App from './App.vue'
import router from '@/router'
import './routeGuard'
import store from '@/store'
import { Tabbar, TabbarItem,Grid, GridItem,NavBar,Form, Field, CellGroup,Button,Picker,NumberKeyboard,Popup,List,Cell,PullRefresh,Sticky} from 'vant';

const app = createApp(App)


app.use(Tabbar);
app.use(TabbarItem);
app.use(Grid);
app.use(GridItem);
app.use(Button);
app.use(NavBar);
app.use(Popup);
app.use(NumberKeyboard);
app.use(List);
app.use(Picker);
app.use(Form);
app.use(Field);
app.use(CellGroup);
app.use(Cell);
app.use(PullRefresh);
app.use(Sticky);
app.use(router)
app.use(store)

app.mount('#app')
