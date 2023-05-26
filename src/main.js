import { createApp } from 'vue'
import App from './App.vue'
import {createRouter, createWebHistory} from 'vue-router'
import router from './router.js'
import './firebase'; // firebase




// styles
import 'bootstrap'
import "bootstrap/dist/css/bootstrap.min.css"; // bootstrap






const app = createApp(App); app.use(router);


app.mount("#app")


