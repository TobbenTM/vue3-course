<template>
  <div class="component">
    <input
      v-model="searchQuery"
      placeholder="What would you like to find?"
    /><br/>
    <p v-if="searching">Searching...</p>
    <p v-else-if="result">Found {{ result }} results!</p>
    <p v-else>Didn't find anything!</p>
  </div>
</template>

<script setup>
import { ref, watch } from 'vue';
import debounce from '../utils/debounce.js';

const searchQuery = ref('')
const searching = ref(false)
const result = ref(null)

function search() {
  // TODO: Add HTTP request to get data
  result.value = Math.floor(Math.random()*100);
  searching.value = false;
};
const debouncedSearch = debounce(search, 1000);

watch(searchQuery, (newQuery, oldQuery) => {
  if (newQuery) {
    debouncedSearch();
    searching.value = true;
  }
})
</script>

<style scoped>
.component input {
  line-height: 2em;
  padding: .5em;
}
</style>