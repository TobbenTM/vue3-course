<script lang="ts" setup>
import SlotComponent from './SlotComponent.vue';
</script>

<template>
  <div class="component">
    <SlotComponent>
      <template #title>
        This is my card title
      </template>

      <p>And I have multiple paragraphs.</p>
      <p>Including this one.</p>
    </SlotComponent>
  </div>
</template>