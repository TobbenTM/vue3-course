<script setup>
const userMessage = 'Hello Vue 3!'
</script>

<template>
  <div class="component">
    <!-- Everything inside the mustaches
         get evaluated when shown -->
    {{ userMessage }}
  </div>
</template>