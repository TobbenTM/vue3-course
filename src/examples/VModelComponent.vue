<script setup>
import { computed } from 'vue'

const props = defineProps(['modelValue'])
const emit = defineEmits(['update:modelValue'])

const value = computed({
  get() {
    return props.modelValue
  },
  set(value) {
    emit('update:modelValue', value)
  }
})
</script>

<template>
  <div class="component">
    <!--
      On this component you can utilize v-model
            for two-way communication!
    -->
    <input type="text" placeholder="Street address" v-model="value.street"/>
    <input type="text" placeholder="Zip" v-model="value.zip"/>
    <input type="text" placeholder="City" v-model="value.city"/>
  </div>
</template>

<style lang="scss" scoped>
.component {
  display: grid;
  grid-template-areas:
    "street street"
    "zip city";
  grid-template-columns: 2fr 3fr;
  grid-gap: .2em;

  input[placeholder="Street address"] {
    grid-area: street;
  }
  input[placeholder="Zip"] {
    grid-area: zip;
  }
  input[placeholder="City"] {
    grid-area: city;
  }
}
</style>