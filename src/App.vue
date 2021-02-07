<template>
  <div id="app">
    <nav class="navbar navbar-expand-lg navbar-light">
      <a class="navbar-brand" href="/">Gold Rehab Services</a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarText">
        <div class="navbar-nav mr-auto">
          <router-link class="nav-item nav-link" to="/">Home</router-link>
          <span class="nav-link">|</span>
          <router-link class="nav-item nav-link" to="/about">Who we are</router-link>
          <span class="nav-link">|</span>
          <router-link class="nav-item nav-link" to="/location">Where we are</router-link>
          <span class="nav-link">|</span>
          <router-link class="nav-item nav-link" to="/forms">Forms</router-link>
          <span class="nav-link">|</span>
          <router-link class="nav-item nav-link" to="/contact">Contact Us</router-link>
        </div>
        <span class="navbar-text">
          Make an appointment today! 
          <i class="fa fa-phone" />
          <a href="tel:888-555-1212">&nbsp;(847) 312-2238&nbsp;</a>
        </span>
      </div>
    </nav>
    <router-view />
  </div>
</template>

<style>
body {
  background-image: url('./assets/background.jpg');
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-position: center;
  background-size: cover;

}

#app {
  font-family: Montserrat, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

nav {
  background-color: #498899;
}

.navbar-light a.navbar-brand {
  font-weight: bold;
  color: #AE8930;
}
</style>
