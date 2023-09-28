<template>
  <section class="contact">
    <h2 class="section-title">Contact Me</h2>
    <p class="contact-description"><b>You can reach me via the following:</b></p>
    <ul class="contact-list">
      <li class="contact-item">
        <span class="contact-label">Email:</span> s223358044@deakin.edu.au
      </li>
      <li class="contact-item">
        <span class="contact-label">LinkedIn:</span> <a href="https://www.linkedin.com/in/jackson-liakopoulos" class="contact-link" target="_blank">linkedin.com/in/jackson-liakopoulos</a>
      </li>
      <li class="contact-item">
        <span class="contact-label">GitHub:</span> <a href="https://github.com/Jackson384" class="contact-link" target="_blank">github.com/Jackson384</a>
      </li>
    </ul>
  </section>
</template>

<script>
export default {
  name: "myContact",
};
</script>

<style scoped>
/* Styling for the Contact component */
.contact {
  padding: 30px;
  text-align: center;
  background-color: #1a1a1a;
  box-shadow: 0px 0px 10px rgba(255, 107, 107, 0.3);
  border-radius: 10px;
}

.section-title {
  font-size: 32px;
  color: #ff6b6b;
}

.contact-description {
  font-size: 20px;
  line-height: 1.8;
  margin-bottom: 30px;
  color: #fff; 
}

.contact-label {
  font-weight: bold;
  color: #ff6b6b;
}

.contact-item {
  font-size: 20px;
  line-height: 1.8;
  margin-bottom: 15px;
  color: #fff; 
}

.contact-link {
  color: #00cec9;
  text-decoration: none;
}

.contact-link:hover {
  text-decoration: underline;
  color: #00b894;
}

</style>


