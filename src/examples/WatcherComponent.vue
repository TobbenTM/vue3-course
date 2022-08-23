<template>
  <div class="component">
    <input
      v-model="searchQuery"
      placeholder="What would you like to find?"
    /><br/>
    <p v-if="searching">Searching...</p>
    <p v-else-if="result">Fount {{ result }} results!</p>
    <p v-else>Didn't find anything!</p>
  </div>
</template>

<script>
import debounce from '../utils/debounce.js';

export default {
  data() {
    return {
      searchQuery: '',
      searching: false,
      result: null,
    };
  },
  created() {
    this.debouncedSearch = debounce(this.search, 1000);
  },
  watch: {
    // eslint-disable-next-line
    searchQuery(newQuery, oldQuery) {
      if (newQuery) {
        this.debouncedSearch();
        this.searching = true;
      }
    },
  },
  methods: {
    search() {
      // TODO: Add HTTP request to get data
      this.result = Math.floor(Math.random()*100);
      this.searching = false;
    },
  },
};
</script>

<style scoped>
.component input {
  line-height: 2em;
  padding: .5em;
}
</style>