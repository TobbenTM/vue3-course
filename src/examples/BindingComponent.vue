<template>
  <div class="component">
    <!-- Everything inside the mustaches
         get evaluated when shown -->
    {{ userMessage }}
  </div>
</template>

<script>
export default {
  data() {
    return {
      userMessage: 'Hello Vue!',
    };
  },
};
</script>