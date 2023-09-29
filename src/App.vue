<template>
  <v-app>
    <div class="background-image">
      <router-view />
    </div>
  </v-app>
</template>

<script setup>
//
</script>

<style>
/* Ensure all parent elements have height: 100% */
html,
body,
#app,
.v-application {
  height: 100%;
  margin: 0;
}

.background-image {
  /* Set a full-screen background image */
  background-image: url("/public/background.jpg"); /* Replace with the correct path to your image */
  background-size: cover;
  background-repeat: no-repeat;
  /* You can further customize the background with other properties */
  height: 100%; /* Ensure the div takes up the full viewport height */
}
</style>