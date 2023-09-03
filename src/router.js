import { createRouter, createWebHistory } from "vue-router";
import HomePage from './pages/Homepage.vue';
import AnimalsList from './pages/AnimalsList.vue';
import ContactPage from './pages/ContactPage.vue';
import Articoli from './pages/Articoli.vue';


const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'home',
            component: HomePage
        },
        {
            path: '/animals',
            name: 'animals',
            component: AnimalsList
        },
        {
            path: '/contacts',
            name: 'contacts',
            component: ContactPage
        },
        {
            path: '/articoli',
            name: 'articoli',
            component: Articoli
        },


    ]
});

export { router }