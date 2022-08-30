<template>
  <div class="wrapper">
    <h2>
      <slot name="title" />
    </h2>
    <div class="content">
      <slot />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.wrapper {
  border-radius: 1rem;
  padding: 1rem;
  box-shadow: 0 0 10px 10px rgba(0, 0, 0, 0.5);

  h2 {
    text-align: left;
  }
  .content {
    margin-top: 0.5rem;
    text-align: left;
  }
}
</style>
