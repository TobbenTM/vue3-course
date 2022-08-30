import { createPinia } from "pinia";
import { createApp } from "vue";
import App from "./App.vue";
import router from './examples/router'

createApp(App)
  .use(router)
  .use(createPinia())
  .mount("#app");
