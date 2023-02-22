import { createApp } from 'vue'
import App from './App.vue'

import { createRouter, createWebHashHistory } from 'vue-router';
import HomePage from './page/homePage.vue';
import RestaurantPage from './page/Restaurant.vue';

const routes = [
    { path: '/', component: HomePage},
    {name : 'Restaurant', path: '/restaurant/:name', component: RestaurantPage}
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

const VueApp = createApp(App)
VueApp.use(router)
VueApp.mount('#app');
