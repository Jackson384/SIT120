<template>
  <section class="about">
    <h2 class="section-title">About Me</h2>
    <p class="about-description"><b><u>My Skills</u></b></p>
    <p class="about-description"><b>- HTML: </b>I have a strong command of HTML (HyperText Markup Language) and its latest standards, ensuring that web content is structured, accessible, and semantically meaningful.</p>
    <p class="about-description"><b>- CSS: </b>With expertise in Cascading Style Sheets (CSS), I can transform design concepts into reality, crafting visually appealing and responsive layouts that adapt seamlessly to various devices and screen sizes.</p>
    <p class="about-description"><b>- JavaScript: </b>JavaScript is my programming language of choice for adding interactivity and functionality to websites. I'm proficient in using JavaScript to create dynamic user experiences, handle user interactions, and work with APIs.</p>
    <p class="about-description"><b>- Vue 3: </b>Vue.js has become a central part of my development toolkit. I specialize in Vue 3, harnessing its reactivity system and component-based architecture to build efficient and maintainable web applications. Vue allows me to create highly interactive and responsive interfaces that delight users.</p>

  </section>
</template>

<script>
export default {
  name: "myAbout",
};
</script>

<style scoped>
:root {
  --primary-color: #ff6b6b;
  --text-color: #fff;
  --background-color: #1a1a1a;
}

.about-description {
  font-size: 20px;
  line-height: 1.8;
  color: var(--text-color);
}

.about {
  background-color: var(--background-color);
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.3);
  border-radius: 10px;
}

@media (max-width: 768px) {
  .about-description {
    font-size: 18px;
  }
}

</style>

