import { createRouter, createWebHistory } from 'vue-router';

import Home from './views/Home.vue';
import Calculator from './views/Calculator.vue';
// Import other view components as needed

const routes = [
    { path: '/', name: 'home', component: Home },
    { path: '/calculator', name: 'calculator', component: Calculator },
    // Add more routes for additional components/pages
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;
