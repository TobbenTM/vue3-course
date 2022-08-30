<script lang="ts" setup>
import { RouterView, RouterLink } from 'vue-router'
</script>

<template>
  <div class="component">
    <nav>
        <RouterLink to="/page1">
            Page 1
        </RouterLink>
        <RouterLink to="/page2">
            Page 2
        </RouterLink>
    </nav>
    <RouterView />
  </div>
</template>

<style scoped>
nav {
    display: grid;
    gap: 1rem;
    grid-template-columns: repeat(2, 1fr);
    margin-bottom: 1rem;
}
a {
    text-decoration: none;
}
.router-link-active {
    text-decoration: underline;
}
</style>