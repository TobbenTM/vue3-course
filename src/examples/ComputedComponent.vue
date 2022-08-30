<script setup>
import { computed, ref } from 'vue';

const rawValue = ref(3)
const computedValue = computed(() =>
  rawValue.value * rawValue.value)
</script>

<template>
  <div class="component">
    {{ rawValue }} | {{ computedValue }} <br/>
    <button @click="rawValue += 1">
      Level up!
    </button>
  </div>
</template>