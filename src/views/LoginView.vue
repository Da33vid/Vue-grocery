<template>
  <main class="page-login container main-body">
    <section class="box-auth">
      <div class="box-auth__form">
        <h1 class="main-title">Sign in</h1>
        <p class="auth-intro">Log in to your account.</p>

        <form>
          <div class="form-group">
            <label class="form-label" for="username">E-mail</label>
            <input
              placeholder="E-mail"
              type="email"
              id="email"
              class="form-control"
              v-model="email"
            />
          </div>
          <div class="form-group">
            <label class="form-label" for="password">Password</label>
            <input
              placeholder="Password"
              type="password"
              id="password"
              class="form-control"
              v-model="password"
            />
          </div>
          <button v-on:click="login" class="btn btn-primary btn-lg mt-3">
            Sign in
          </button>
        </form>

        <p class="auth-bottom">
          Not a member?
          <router-link to="/register" class="alink">Register</router-link>
        </p>
      </div>
    </section>
  </main>
</template>

<script>
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
export default {
  name: "LoginView",
  data: function () {
    return {
      email: '',
      password: ''
    };
  },
  methods: {
    login: function (e) {
  e.preventDefault();
  const auth = getAuth();
  signInWithEmailAndPassword(auth, this.email, this.password)
    .then((userCredential) => {
      // Signed in 
      const user = userCredential.user;
      console.log(user);
      console.log(`Usuario logeado con: ${user.email}`);
      this.$router.push('/');
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorCode);
      console.log(errorMessage);
      // ..
    });
},
  },
};
</script>

<style lang="scss" scoped>
.container {
  max-width: 500px;
}
</style>