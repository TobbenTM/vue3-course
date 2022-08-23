import Vue from 'vue';
import BasicComponent from './BasicComponent.vue';

// We can register components locally (Options API):
export default {
  components: {
    BasicComponent,
  },
};

// If using composition API, an import is enough

// Or globally for everyone to use:
Vue.component('basic-component', BasicComponent);