<template>
  <div class="component">
    <!-- We can easily bind event handlers -->
    <button v-on:click="onButtonClicked">Push me!</button><br/>
    <button @click="onButtonClicked">Push me!</button><br/>

    <!-- Also with modifiers! -->
    <button v-on:click.prevent="onButtonClicked">Push me!</button>
  </div>
</template>

<script>
export default {
  methods: {
    onButtonClicked(e) {
      alert(`You pushed the button! defaultPrevented: ${e.defaultPrevented ? 'true' : 'false'}`);
    },
  },
};
</script>