<template>
  <div id="app">
    <!-- Header Section -->
    <header>
      <h1 class="header-title">Jackson Liakopoulos</h1>
      <nav class="nav-links">
        <!-- Navigation Links -->
        <router-link to="/" class="nav-link">Home</router-link>
        <router-link to="/myabout" class="nav-link">About</router-link>
        <router-link to="/myprojects" class="nav-link">Projects</router-link>
        <router-link to="/mycontact" class="nav-link">Contact</router-link>
      </nav>
    </header>

    <!-- Main Content -->
    <main>
      <!-- Vue Router will display components based on routes here -->
      <router-view></router-view>
    </main>

    <!-- Footer Section -->
    <footer>
      <!-- Footer content goes here -->
    </footer>
  </div>
</template>

<script>
export default {
  name: "App",
};
</script>

<style scoped>
#app {
  font-family: Arial, sans-serif;
}

/* Header Section */
header {
  background: linear-gradient(90deg, #3498db, #9b59b6);
  color: #fff;
  padding: 20px 0;
  text-align: center;
}

.header-title {
  font-size: 32px;
  margin: 0;
}

/* Navigation Links */
.nav-links {
  margin-top: 20px;
}

.nav-link {
  text-decoration: none;
  color: #fff;
  font-size: 18px;
  margin: 0 20px;
  transition: color 0.3s;
}

.nav-link:hover {
  color: #ecf0f1;
}

/* Main Content */
main {
  padding: 20px;
}

/* Footer Section */
footer {
  background: #333;
  color: #fff;
  text-align: center;
  padding: 10px 0;
}


</style>
