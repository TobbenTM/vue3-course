<template>
  <div class="component">
    <h1>Chuck Norris <strong>facts</strong></h1>
    <p v-if="loading">Loading data...</p>
    <p v-else-if="error">{{ error }}</p>
    <p v-else-if="!data">No data to show!</p>
    <p v-else>{{ data | formatFact }}</p>
  </div>
</template>

<script>
import axios from 'axios';

function sleep (time) {
  return new Promise((resolve) => setTimeout(resolve, time));
}

export default {
  data() {
    return {
      loading: false,
      error: null,
      data: null,
    };
  },
  async mounted() {
    await this.loadData();
  },
  async activated() {
    // We're only using activated() because this component
    //    is wrapped in a keep-alive, and thus cached
    await this.loadData();
  },
  methods: {
    async loadData() {
      this.loading = true;
      this.error = null;

      try {
        var result = await axios.get('https://api.chucknorris.io/jokes/random');
        this.data = result.data;
        await sleep(5000);
        this.loading = false;
      } catch (err) {
        this.error = err;
        this.loading = false;
      }
    },
  },
  filters: {
    formatFact(fact) {
      if (!fact) return 'No facts are needed about Chuck';
      return fact.value;
    },
  },
};
</script>