<template>
  <div class="component">
    <!-- We can show/hide elements based on data -->
    <p v-if="showMessage">Vue is so cool!</p>
    <p v-else-if="showError">Oops, something went wrong!</p>
    <p v-else>What the heck happened!?</p>

    <!-- Et alternativ til v-if er v-show -->
    <p v-show="false">This exists, but is hidden</p>

    <button v-on:click="showMessage = false">Remove message</button> | 
    <button v-on:click="showError = false">Remove error</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      showMessage: true,
      showError: true,
    };
  },
};
</script>