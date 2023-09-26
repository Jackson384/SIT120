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
      <!-- Add more project entries here -->
    </div>
  </section>
</template>

<script>
export default {
  name: "myProjects",
};
</script>

<style scoped>
/* Styling for the Projects component */
.projects {
  padding: 20px;
  text-align: center;
  background-color: #fff; /* White background */
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.2); /* Subtle box shadow */
  border-radius: 5px; /* Rounded corners */
}

.section-title {
  font-size: 28px;
  color: #007BFF; /* Blue title color */
}

.project-list {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

.project-item {
  border: 1px solid #ccc;
  padding: 10px;
  margin: 10px;
  text-align: center;
  background-color: #fff; /* White background */
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.2); /* Subtle box shadow */
  border-radius: 5px; /* Rounded corners */
  transition: transform 0.2s ease-in-out; /* Smooth transition effect */
}

.project-item:hover {
  transform: scale(1.05); /* Scale up slightly on hover */
}

.project-title {
  font-size: 18px;
  margin-bottom: 5px;
  color: #007BFF; /* Blue title color */
}

.project-description {
  font-size: 14px;
  line-height: 1.4;
  color: #333; /* Dark text color */
}
</style>
