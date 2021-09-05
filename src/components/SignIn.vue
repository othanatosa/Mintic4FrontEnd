<template>
  <section class="vh-100 py-5">
    <div id="SingIn" class="container h-100 auth_user">
      <div class="row d-flex align-items-center justify-content-center h-100">
        <div class="col-md-8 col-lg-7 col-xl-6">
          <img src="../assets/mobile-list.png" class="img-fluid" alt="Phone image"/>
        </div>
        <div class="col-md-7 col-lg-5 col-xl-5 offset-xl-1">
          <ul class="nav nav-tabs">
            <li class="nav-item">
              <a class="nav-link" data-toggle="tab" href="#signIn">Sign In</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" data-toggle="tab" href="#signup">Sign Up</a>
            </li>
          </ul>
          <div class="tab-content">
            <div id="signIn" class="container tab-pane active">
              <br />
              <h2>Welcome</h2>
              <br />
              <form v-on:submit.prevent="processAuthUser">
                <!-- Email input -->
                <div class="form-outline mb-4">
                  <input
                    type="text"
                    id="form1Example13"
                    class="form-control form-control-lg"
                    v-model="user_in.username"
                  />
                  <label class="form-label" for="form1Example13"
                    >Email address</label
                  >
                </div>

                <!-- Password input -->
                <div class="form-outline mb-4">
                  <input
                    type="password"
                    id="form1Example23"
                    class="form-control form-control-lg"
                    v-model="user_in.password"
                  />
                  <label class="form-label" for="form1Example23"
                    >Password</label
                  >
                </div>

                <div
                  class="d-flex justify-content-around align-items-center mb-4"
                >
                  <!-- Checkbox -->
                  <div class="form-check">
                    <input
                      class="form-check-input"
                      type="checkbox"
                      value=""
                      id="form1Example3"
                      checked
                    />
                    <label class="form-check-label" for="form1Example3">
                      Remember me
                    </label>
                  </div>
                </div>

                <!-- Submit button -->
                <button type="submit" class="btn btn-lg btn-block">
                  Sign in
                </button>
              </form>
            </div>
            <div id="signup" class="container tab-pane">
              <br />
              <h2>Creat your account</h2>
              <br />
              <form>
                <!-- Email input -->
                <div class="form-outline mb-4">
                  <input
                    type="email"
                    id="form1Example13"
                    class="form-control form-control-lg"
                  />
                  <label class="form-label" for="form1Example13"
                    >Email address</label
                  >
                </div>

                <!-- Password input -->
                <div class="form-outline mb-4">
                  <input
                    type="password"
                    id="form1Example23"
                    class="form-control form-control-lg"
                  />
                  <label class="form-label" for="form1Example23"
                    >Password</label
                  >
                </div>

                <div
                  class="d-flex justify-content-around align-items-center mb-4"
                ></div>

                <!-- Submit button -->
                <button type="submit" class="btn btn-lg btn-block">
                  Sign up
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import gql from "graphql-tag";
import jwt_decode from "jwt-decode";

export default {
  name: "SingIn",

  data: function() {
    return {
      user_in: {
        username: "",
        password: ""
      }
    };
  },

  methods: {
    processAuthUser: async function() {
      await this.$apollo
        .mutate({
          mutation: gql`
            mutation($authenticateCredentials: CredentialsInput!) {
              authenticate(credentials: $authenticateCredentials) {
                refresh
                access
              }
            }
          `,
          variables: {
            authenticateCredentials: this.user_in
          }
        })
        .then(result => {
          let data = result.data.authenticate;
          data.user_id = jwt_decode(data.access)
            .user_id.toString()
            .padStart(3, "0");

          this.$emit("log-in", data, this.user_in.username)
        }).catch((error) => {
          alert("El usuario y/o contraseña son incorrectos")
        });
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
  font-weight: normal;
  color: #5264ef;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
.container{
  padding-bottom: 1vh;
}
.nav-item .nav-link{
  color: #42b983;
}
.nav-item .nav-link.active{
  background-color: #edfaff;
  border-bottom-color: #edfaff;
}
.btn{
  background-color: #5264ef;
  color: #fff;
}
</style>
