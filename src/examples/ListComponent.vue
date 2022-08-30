<script setup>
const users = [
  "Tobias",
  "Harald Rex",
  "Michael Scott"
];
</script>

<template>
  <div class="component">
    <!-- We can iterate over lists -->
    <ul>
      <li v-for="user in users" :key="user">
        {{ user }}
      </li>
    </ul>
  </div>
</template>