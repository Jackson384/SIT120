<template>
  <section class="projects">
    <h2 class="section-title">Projects</h2>
    <div class="project-list">
      <div class="project-item">
        <h3 class="project-title">calculator app</h3>
        <p class="project-description">In this project I designed a responsive calculator web app using html, css, js, and vue.</p>
      </div>
      <div class="project-item">
        <h3 class="project-title">Basic Website</h3>
        <p class="project-description">In this project I created a basic website that is equiped with various user interactions (i.e. buttons, drop-down menus, etc.)</p>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "myProjects",
};
</script>

<style scoped>
.projects {
  padding: 30px;
  text-align: center;
  background-color: #1a1a1a;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.3);
  border-radius: 10px;
}

.section-title {
  font-size: 32px;
  color: #ff6b6b;
}

.project-item {
  border: 2px solid #ff6b6b;
  padding: 20px;
  margin: 20px;
  background-color: #1a1a1a;
  box-shadow: 0px 0px 10px rgba(255, 107, 107, 0.3);
  border-radius: 10px;
  transition: transform 0.3s ease-in-out;
}

.project-item:hover {
  transform: scale(1.05);
}

.project-title {
  font-size: 24px;
  margin-bottom: 10px;
  color: #ff6b6b;
}

.project-description {
  font-size: 18px;
  line-height: 1.6;
  color: #fff; 
}

</style>

