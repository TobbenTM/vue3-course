<script lang="ts" setup>
import { reactive, ref } from 'vue';

const property1 = ref('Primitives can go in ref');
const property2 = reactive({
  field1: 'Objects can go in reactive'
})
</script>

<template>
  <div class="component">
    {{ property1 }} <br />
    {{ property2.field1 }}
  </div>
</template>