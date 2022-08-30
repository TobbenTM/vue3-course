<script setup>
import { ref } from 'vue';

const url = ref('https://tobbentm.com')
</script>

<template>
  <div class="component">
    <!-- We can also bind attributes -->
    <a v-bind:href="url">Link to {{ url }}</a><br/>
    <a :href="url">Link to {{ url }}</a>
  </div>
</template>