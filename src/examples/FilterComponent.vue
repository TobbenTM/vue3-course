<template>
  <div class="component">
    <!-- We can run data through filters (old way) -->
    {{ currentDate | formatDate }} <br/>
    {{ currentDate | formatDate | capitalize }} <br/>

    <!-- Less magic enforced now: -->
    {{ currentDate.toDateString() }} <br/>
    {{ currentDate.toDateString().toUpperCase() }}
  </div>
</template>

<script>
export default {
  data() {
    return {
      currentDate: new Date(),
    };
  },
  filters: {
    formatDate(date) {
      return date.toDateString();
    },
    capitalize(string) {
      return string.toUpperCase();
    },
  },
};
</script>