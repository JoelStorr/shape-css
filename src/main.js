import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import Copy from './components/Directives/copy';

const app = createApp(App);
app.directive('copy', Copy);
app.use(store);
app.use(router);

app.mount('#app');
