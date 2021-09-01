<template>
  <div id="app">
    <!-- Header -->
    <nav class="navbar navbar-dark navbar-expand-lg justify-content-between">
      <a class="navbar-brand" href="#/"> <h1>Mintic To Do</h1></a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbar" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse justify-content-end" id="navbarNav">
        <div class="btn-group" role="group" aria-label="Toggle navigation">
          <ul class="navbar-nav">
            <li class="nav-item">
              <button type="button" class="btn">Calendar</button>
            </li>
            <li class="nav-item">
              <a type="button" href="#/task" class="btn">Task</a>
            </li>
            <li class="nav-item">
              <button type="button" class="btn">Category</button>
            </li>
            <li class="nav-item">
              <button type="button" class="btn" >Log out</button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    <div class=container-fluid>
      <router-view />
    </div>
    
    <!-- Footer -->
    <nav class="navbar navbar-expand-lg justify-content-center">
      <a class="navbar-brand" href="#">DW1_CP4_G4</a>
    </nav>
  </div>
</template>

<script>
export default {
  name: "App"
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
