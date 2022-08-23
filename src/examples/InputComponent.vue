<template>
  <div class="component">
    <input
      v-model="userMessage"
      placeholder="Leave a message.."
    />
    <p>The message is: "{{ userMessage }}"</p>
    <p>Or "{{ userMessage.replace('react', 'vue') }}" without silly frameworks!</p>
    <!-- (This should be done with computed properties, more about that soon!) -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      userMessage: '',
    };
  },
};
</script>

<style scoped>
.component input {
  line-height: 2em;
  padding: .5em;
}
</style>