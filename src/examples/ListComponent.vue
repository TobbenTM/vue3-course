<template>
  <div class="component">
    <!-- We can iterate over lists -->
    <ul>
      <li
        v-for="user in users"
        :key="user"
      >
        {{ user }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      users: [
        'Tobias',
        'Harald Rex',
        'Michael Scott',
      ],
    };
  },
};
</script>