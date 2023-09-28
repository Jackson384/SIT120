<template>
  <section class="home">
    <h2 class="section-title">Welcome to My Portfolio</h2>
    <p class="section-description">Hello and thank you for visiting my portfolio! I'm thrilled to 
      have you here as I showcase my passion, creativity, and dedication through the projects and 
      experiences I've collected along my journey. Whether you're an employer looking for a potential 
      collaborator or simply an enthusiast exploring the world of design and development, I invite you 
      to browse through my work and get to know more about my skills, aspirations, and the unique 
      perspective I bring to the table. Feel free to navigate through the various sections and get in touch 
      if you have any questions or would like to connect. Let's embark on this creative journey together!</p>

  </section>
</template>

<script>
export default {
  name: "myHome",
};
</script>

<style scoped>
.home {
  padding: 30px;
  text-align: center;
  background-color: var(--background-color);
}

.section-title {
  font-size: 36px;
  color: #ff6b6b;
}

.section-description {
  font-size: 20px;
  line-height: 1.8;
  color: var(--text-color);
}

</style>

