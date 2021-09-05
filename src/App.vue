<template>
  <div id="app">
    <!-- Header -->
    <nav class="navbar navbar-dark navbar-expand-lg justify-content-between" v-if="is_auth">
      <a class="navbar-brand" href="#"> <h1>Mintic To Do</h1></a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbar" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse justify-content-end" id="navbarNav">
        <div class="btn-group" role="group" aria-label="Toggle navigation">
          <ul class="navbar-nav">
            <li class="nav-item">
              <button type="button" class="btn" v-on:click="task">Task</button>
            </li>
            <li class="nav-item">
              <button type="button" class="btn" v-on:click="category">Category</button>
            </li>
            <li class="nav-item">
              <button type="button" class="btn" v-on:click="logOut">Log out</button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    <!-- Header -->
    <div class=container-fluid>
      <router-view v-on:log-in="logIn"></router-view>
    </div>

    <!-- Footer -->
    <nav class="navbar navbar-expand-lg justify-content-center" v-if="is_auth">
      <a class="navbar-brand" href="#">DW1_CP4_G4</a>
    </nav>
  </div>
</template>

<script>
import gql from "graphql-tag";

export default {
  name: "App",

  data: function () {
    return {
      is_auth: false,
    };
  },

  created: function () {
    this.updateAccessToken();
  },

  methods: {
    updateAccessToken: async function () {
      if (localStorage.getItem("refresh_token") == null) {
        this.$router.push({ name: "signIn" });
        this.is_auth = false;
        return;
      }

      await this.$apollo
        .mutate({
          mutation: gql`
            mutation ($refreshTokenRefresh: String!) {
              refreshToken(refresh: $refreshTokenRefresh) {
                access
              }
            }
          `,
          variables: {
            refreshTokenRefresh: localStorage.getItem("refresh_token"),
          },
        })
        .then((result) => {
          localStorage.setItem("access_token", result.data.refreshToken.access);
          this.is_auth = true;
        })
        .catch((error) => {
          alert("Su sesión expiró, vuelva a iniciar sesión.");
          this.$router.push({ name: "signIn" });
          this.is_auth = false;
          localStorage.clear();
        });
    },

    logIn: async function (data, username) {
      localStorage.setItem("access_token", data.access);
      localStorage.setItem("refresh_token", data.refresh);
      localStorage.setItem("user_id", data.user_id);
      localStorage.setItem("current_username", username);

      await this.updateAccessToken();
      if (this.is_auth) this.init();
    },

    init: function () {
      this.$router.push({
        name: "task",
        params: { username: localStorage.getItem("current_username") },
      });
    },

    task: function () {
      this.$router.push({
        name: "task",
        params: { username: localStorage.getItem("current_username") },
      });
    },

    category: function () {
      this.$router.push({
        name: "category",
        params: { username: localStorage.getItem("current_username") },
      });
    },
    logOut: async function () {
      localStorage.removeItem("access_token");
      localStorage.removeItem("refresh_token");
      localStorage.removeItem("user_id");
      localStorage.removeItem("current_username");

      await this.updateAccessToken();
    },
  },
};
</script>

<style>
#app {
  font-family: 'Montserrat', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}
.navbar{
  background-color: #5264ef;
}
.navbar .navbar-brand{
  color: #fff;
}
.navbar-nav .nav-item .btn{
  background: #3e4b83;
  color: #ffffff;
  border: 1px solid #fff;
  border-radius: 5px;
  text-align: center;
  margin: 0px 10px;
  width: 100px;
}
.container-fluid{
  min-height: auto;
}
</style>
