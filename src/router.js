import {createRouter, createWebHistory} from 'vue-router'
import HomeView from './views/HomeView.vue'
import NotFoundView from './views/NotFoundView.vue'
import ProductView from './views/ProductView.vue'
import './firebase'; // firebase
import LoginView from './views/LoginView.vue'
import RegisterView from './views/RegisterView.vue'

const routes = [
        {
            path: '/',
            name: 'Home',
            component: HomeView
        },
        {
            path: '/NotFound',
            name: 'NotFound',
            component: NotFoundView
        },
        {
            path: '/product/:id',
            name: 'ProductView',
            component: ProductView,
            props: true
        }
        ,
        {
            path: '/login',
            name: 'LoginView',
            component: LoginView
        }
        ,
        {
            path: '/register',
            name: 'RegisterView',
            component: RegisterView
        }
        
    ]
    const router = createRouter({ history: createWebHistory(), routes,});

    export default router;