<template>
  <div id="app">
    <!-- Header -->
    <nav class="navbar navbar-expand-lg justify-content-between">
      <a class="navbar-brand" href="#"> <h1>Mintic To Do</h1></a>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item active">
            <a class="nav-link" href="#"
              v-on:click="init" v-if="is_auth">Usuarios <span class="sr-only">(current)</span></a
            >
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#" v-on:click="task" v-if="is_auth">Tareas</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#" v-on:click="category" v-if="is_auth">Categorías</a>
          </li>
        </ul>
      </div>
    </nav>
    <!-- Header -->


    <!-- Footer -->
    
    <router-view />
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
        this.$router.push({ name: "user_auth" });
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
          this.$router.push({ name: "user_auth" });
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
        name: "user",
        params: { username: localStorage.getItem("current_username") },
      });
    },

    account: function () {
      this.$router.push({
        name: "SignIn",
        params: { username: localStorage.getItem("current_username") },
      });
    },

    transacction: function () {
      this.$router.push({
        name: "task",
        params: { username: localStorage.getItem("current_username") },
      });
    },

    historial: function () {
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
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
