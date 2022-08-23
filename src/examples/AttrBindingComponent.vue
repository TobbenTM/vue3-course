<template>
  <div class="component">
    <!-- We can also bind attributes -->
    <a v-bind:href="url">Link to {{ url }}</a><br/>
    <a :href="url">Link to {{ url }}</a>
  </div>
</template>

<script>
export default {
  data() {
    return {
      url: 'http://tobbentm.com',
    };
  },
};
</script>