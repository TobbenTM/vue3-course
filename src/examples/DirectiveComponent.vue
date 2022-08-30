<template>
  <div class="component">
    <button v-loading="savingChanges" v-on:click="savingChanges = true">
      Save
    </button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      savingChanges: false,
    };
  },
  directives: {
    // Shorthand for bind + update
    loading: function (el, { value }) {
      el.disabled = value;
      if (value) {
        el.classList.add("loading");
      }
    },
  },
};
</script>

<style scoped>
@keyframes animate-background {
  to {
    background-position: 0 -200%;
  }
}

button {
  padding: 0.4rem 0.75rem;
  border-radius: 0.5rem;
  overflow: hidden;
  border: 1px solid black;
  color: black;
  font-weight: 600;
  font-family: inherit;
  cursor: pointer;
}
button.loading {
  background: linear-gradient(
      rgba(255, 0, 0, 1) 0%,
      rgba(255, 154, 0, 1) 10%,
      rgba(208, 222, 33, 1) 20%,
      rgba(79, 220, 74, 1) 30%,
      rgba(63, 218, 216, 1) 40%,
      rgba(47, 201, 226, 1) 50%,
      rgba(28, 127, 238, 1) 60%,
      rgba(95, 21, 242, 1) 70%,
      rgba(186, 12, 248, 1) 80%,
      rgba(251, 7, 217, 1) 90%,
      rgba(255, 0, 0, 1) 100%
    )
    0 0/100% 200%;
  animation: animate-background 2s linear infinite;
  cursor: wait;
}
</style>
