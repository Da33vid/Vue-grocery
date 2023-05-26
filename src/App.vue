<template>
 <router-view></router-view>


 





  
</template>

<script>
import AppHeader from "./components/AppHeader.vue";
import AppFooter from "./components/AppFooter.vue";
import AppBody from "./components/AppBody.vue";
import HomeView from "./views/HomeView.vue";
import LofginView from "./views/LoginView.vue";
import RegisterView from "./views/RegisterView.vue";

export default {
  name: 'App',
  components: {
  
    HomeView,
    AppHeader,
    AppFooter,
    AppBody,
    LofginView,
    RegisterView
}
}
</script>
