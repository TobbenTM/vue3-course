<template>
  <div class="component">
    <!--
      On this component you can utilize v-model
            for two-way communication!
    -->
    <input type="text" placeholder="Street address" v-model="localState.street"/>
    <input type="text" placeholder="Zip" v-model="localState.zip"/>
    <input type="text" placeholder="City" v-model="localState.city"/>
  </div>
</template>

<script>
export default {
  props: ['value'],
  data() {
    return {
      localState: {
        street: null,
        zip: null,
        city: null,
      },
    };
  },
  created() {
    this.localState = Object.assign({}, this.localState, this.value);
  },
  watch: {
    localState: {
      deep: true,
      handler(newValue) {
        this.$emit('input', newValue);
      },
    },
    value: {
      deep: true,
      handler(newValue) {
        this.localState = Object.assign(this.localState, newValue);
      },
    },
  },
};
</script>

<style lang="scss" scoped>
.component {
  display: grid;
  grid-template-areas:
    "street street"
    "zip city";
  grid-template-columns: 2fr 3fr;
  grid-gap: .2em;

  input[placeholder="Street address"] {
    grid-area: street;
  }
  input[placeholder="Zip"] {
    grid-area: zip;
  }
  input[placeholder="City"] {
    grid-area: city;
  }
}
</style>