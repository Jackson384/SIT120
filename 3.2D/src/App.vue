<template>
  <div id="app">

    <header>
      <h1 class="header-title">Jackson Liakopoulos</h1>
      <nav class="nav-links">
        <router-link to="/" class="nav-link">Home</router-link>
        <router-link to="/myabout" class="nav-link">About</router-link>
        <router-link to="/myprojects" class="nav-link">Projects</router-link>
        <router-link to="/mycontact" class="nav-link">Contact</router-link>
      </nav>
    </header>

    <main>
      <transition name="fade" mode="out-in">
        <router-view></router-view>
      </transition>
    </main>

    <footer>
    </footer>
  </div>
</template>

<script>
export default {
  name: "App",
};
</script>

<style scoped>
body {
  font-family: 'Arial', Helvetica, sans-serif;
  margin: 0;
  padding: 0;
}

header {
  background: linear-gradient(90deg, #ff6b6b, #ffa07a);
  color: #fff;
  padding: 30px 0;
  text-align: center;
}

.header-title {
  font-size: 42px;
  margin: 0;
}

.nav-links {
  margin-top: 30px;
}

.nav-link {
  text-decoration: none;
  color: #fff;
  font-size: 22px;
  margin: 0 30px;
  transition: color 0.3s;
}

.nav-link:hover {
  color: #ecf0f1;
}

main {
  padding: 30px;
}

footer {
  background: #1a1a1a;
  color: #fff;
  text-align: center;
  padding: 15px 0;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}

.fade-enter, .fade-leave-to {
  opacity: 0;
}

</style>
