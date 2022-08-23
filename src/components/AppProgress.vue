<script setup lang="ts">
const { progress } = defineProps<{
  progress: number;
}>();
</script>

<template>
  <div class="progress" :style="{ width: `${progress}%` }"></div>
</template>

<style scoped>
.progress {
  height: 3px;
  position: absolute;
  bottom: 0;
  left: 0;
  background: #cf122d;
  box-shadow: 0 0 10px #cf122d;
  transition: width .4s ease-in-out;
}
</style>
