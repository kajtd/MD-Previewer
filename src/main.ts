import { createApp } from 'vue';
import './global.scss';
import App from './App.vue';
import { createPinia } from 'pinia';

const pinia = createPinia();
const app = createApp(App);

app.use(pinia).mount('#app');
