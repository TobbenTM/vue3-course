<script setup lang="ts">
import { ref } from "vue";
import AppPresenter from "./presenter.js";
import AppProgress from "./components/AppProgress.vue";
import AppSlide from "./components/AppSlide.vue";
import VerticalImage from "./components/VerticalImage.vue";
import CodeBlock from "./components/CodeBlock.vue";

import BasicComponentExample from "./examples/BasicComponent.vue?raw";
import BasicComponentVue3Example from "./examples/BasicComponentVue3.vue?raw";
import BindingComponent from "./examples/BindingComponent.vue";
import BindingComponentExample from "./examples/BindingComponent.vue?raw";
import BindingComponentVue3 from "./examples/BindingComponentVue3.vue";
import BindingComponentVue3Example from "./examples/BindingComponentVue3.vue?raw";
import AttrBindingComponent from "./examples/AttrBindingComponent.vue";
import AttrBindingComponentExample from "./examples/AttrBindingComponent.vue?raw";
import InputComponent from "./examples/InputComponent.vue";
import InputComponentExample from "./examples/InputComponent.vue?raw";
import EventComponent from "./examples/EventComponent.vue";
import EventComponentExample from "./examples/EventComponent.vue?raw";
import ConditionalComponent from "./examples/ConditionalComponent.vue";
import ConditionalComponentExample from "./examples/ConditionalComponent.vue?raw";
import ListComponent from "./examples/ListComponent.vue";
import ListComponentExample from "./examples/ListComponent.vue?raw";
import ReactivityComponent from "./examples/ReactivityComponent.vue";
import ReactivityComponentExample from "./examples/ReactivityComponent.vue?raw";
import ComputedComponent from "./examples/ComputedComponent.vue";
import ComputedComponentExample from "./examples/ComputedComponent.vue?raw";
import LifecycleComponent from "./examples/LifecycleComponent.vue";
import WatcherComponent from "./examples/WatcherComponent.vue";
import WatcherComponentExample from "./examples/WatcherComponent.vue?raw";
import FilterComponent from "./examples/FilterComponent.vue";
import FilterComponentExample from "./examples/FilterComponent.vue?raw";
import RegistrationExample from "./examples/RegistrationExample.js?raw";
import VModelUsageComponent from "./examples/VModelUsageComponent.vue";
import VModelComponentExample from "./examples/VModelComponent.vue?raw";
import DirectiveComponent from "./examples/DirectiveComponent.vue";
import DirectiveComponentExample from "./examples/DirectiveComponent.vue?raw";
import SlotComponentExample from "./examples/SlotComponent.vue?raw";
import SlotUsageComponent from "./examples/SlotUsageComponent.vue";
import SlotUsageComponentExample from "./examples/SlotUsageComponent.vue?raw";
import RouterExample from "./examples/router.js?raw";
import RouterComponent from "./examples/RouterComponent.vue";
import RouterComponentExample from "./examples/RouterComponent.vue?raw";
import StoreExample from "./examples/store.ts?raw";
import PiniaComponent from "./examples/PiniaComponent.vue";
import PiniaComponentExample from "./examples/PiniaComponent.vue?raw";

const progress = ref(0);
</script>

<template>
  <main>
    <app-presenter v-on:progress="progress = $event">
      <app-slide>
        <img src="./assets/logo.png" />
        <h1>Vue.js</h1>
        <h4>Introductionary course</h4>
        <a href="http://vue3.tobbentm.com" style="width: 100%">
          vue3.tobbentm.com
        </a>
        <a href="https://github.com/tobbentm/vue3-course">
          github.com/tobbentm/vue3-course
        </a>
      </app-slide>

      <app-slide>
        <h1>Agenda:</h1>
        <ul>
          <li>What's Vue.js?</li>
          <li>Devtools</li>
          <li>Components</li>
          <li>Data binding</li>
          <li>Event handling</li>
          <li>Computed properties</li>
          <li>Watchers</li>
          <li>Custom inputs</li>
          <li style="text-decoration: line-through">Filters</li>
          <li>Directives</li>
          <li>Slots</li>
          <li>Lifecycle</li>
          <li>Routing &amp; state</li>
        </ul>
      </app-slide>

      <app-slide>
        <h1>Who am I?</h1>
        <img
          src="./assets/tobias.c2f5a22.png"
          style="border-radius: 50%; overflow: hidden; max-width: 256px"
        />
        <h4>Tobias Lønnerød Madsen</h4>
        <p>Fullstack developer .Net</p>
        <br />
        <a href="https://github.com/TobbenTM">github.com/TobbenTM</a>
      </app-slide>

      <app-slide>
        <h1>What's Vue.js?</h1>
        <div class="half">
          <ul>
            <li>
              Easy to learn
              <ul>
                <li>Only using html/css/js/ts</li>
              </ul>
            </li>
            <li>
              Flexible
              <ul>
                <li>Can be use in small apps to replace jQuery</li>
                <li>Or in big Single Page Applications!</li>
                <li>Using frameworks with Nuxt we get SSR &amp; SSG too</li>
              </ul>
            </li>
            <li>
              Fast
              <ul>
                <li>Tree-shakable API for small bundles</li>
                <li>
                  Consistently as
                  <a
                    href="https://krausest.github.io/js-framework-benchmark/current.html#eyJmcmFtZXdvcmtzIjpbImtleWVkL2FuZ3VsYXIiLCJrZXllZC9hbmd1bGFyanMiLCJrZXllZC9yZWFjdCIsImtleWVkL3N2ZWx0ZSIsImtleWVkL3Z1ZSJdLCJiZW5jaG1hcmtzIjpbIjAxX3J1bjFrIiwiMDJfcmVwbGFjZTFrIiwiMDNfdXBkYXRlMTB0aDFrX3gxNiIsIjA0X3NlbGVjdDFrIiwiMDVfc3dhcDFrIiwiMDZfcmVtb3ZlLW9uZS0xayIsIjA3X2NyZWF0ZTEwayIsIjA4X2NyZWF0ZTFrLWFmdGVyMWtfeDIiLCIwOV9jbGVhcjFrX3g4IiwiMjFfcmVhZHktbWVtb3J5IiwiMjJfcnVuLW1lbW9yeSIsIjIzX3VwZGF0ZTUtbWVtb3J5IiwiMjVfcnVuLWNsZWFyLW1lbW9yeSIsIjI2X3J1bi0xMGstbWVtb3J5IiwiMzFfc3RhcnR1cC1jaSIsIjM0X3N0YXJ0dXAtdG90YWxieXRlcyJdLCJkaXNwbGF5TW9kZSI6MSwiY2F0ZWdvcmllcyI6WzEsMiwzLDRdfQ=="
                    target="_blank"
                  >
                    fast or faster than React &amp; Angular in benchmarks
                  </a>
                </li>
              </ul>
            </li>
            <li>Straight forward <a href="https://vuejs.org/guide/introduction.html" target="_blank">documentation</a></li>
            <li>Opinionated</li>
          </ul>
        </div>
        <img src="./assets/fe_stats_v2.png" class="half" />
      </app-slide>

      <app-slide>
        <h1>Devtools</h1>
        <ul>
          <li>
            Great extensions made for
            <a
              href="https://chrome.google.com/webstore/detail/vuejs-devtools/nhdogjmejiglipccpnnnanhbledajbpd"
            >
              Chrome
            </a>
            and
            <a
              href="https://addons.mozilla.org/en-US/firefox/addon/vue-js-devtools/"
            >
              Firefox
            </a>
          </li>
          <li>
            Fast prototyping with
            <span style="text-decoration: line-through">@vue/cli</span> or vite
          </li>
        </ul>
        <code-block :code="`yarn create vite --template vue-ts`" lang="text/x-sh" />
      </app-slide>

      <app-slide>
        <h1>Components (Options API)</h1>
        <code-block :code="BasicComponentExample" lang="text/x-vue" />
        <p>Component.vue</p>
      </app-slide>

      <app-slide>
        <h1>Components (Composition API)</h1>
        <code-block :code="BasicComponentVue3Example" lang="text/x-vue" />
        <p>Component.vue</p>
      </app-slide>

      <app-slide>
        <h1>Components</h1>
        <h2 class="subtitle">How to register for usage?</h2>
        <code-block
          :code="RegistrationExample"
          lang="text/javascript"
          class="half"
        />
        <div class="half">
          <h4>Works for:</h4>
          <ul>
            <li>Components</li>
            <li style="text-decoration: line-through">Filters</li>
            <li>Plugins</li>
            <li>Directives</li>
          </ul>
        </div>
      </app-slide>

      <app-slide>
        <h1>Data binding (Options API)</h1>
        <div class="half">
          <code-block :code="BindingComponentExample" lang="text/x-vue" />
          <p>BindingComponent.vue</p>
        </div>
        <binding-component class="half" />
      </app-slide>

      <app-slide>
        <h1>Data binding (Composition API)</h1>
        <div class="half">
          <code-block :code="BindingComponentVue3Example" lang="text/x-vue" />
          <p>BindingComponent.vue</p>
        </div>
        <binding-component-vue3 class="half" />
      </app-slide>

      <app-slide>
        <h1>Reactivity with composition API</h1>
        <div class="half">
          <code-block :code="ReactivityComponentExample" lang="text/x-vue" />
          <p>ReactivityComponent.vue</p>
        </div>
        <reactivity-component class="half" />
      </app-slide>

      <app-slide>
        <h1>Data binding for attributtes</h1>
        <div class="half">
          <code-block :code="AttrBindingComponentExample" lang="text/x-vue" />
          <p>AttrBindingComponent.vue</p>
        </div>
        <attr-binding-component class="half" />
      </app-slide>

      <app-slide>
        <h1>Data binding with evaluation</h1>
        <div class="half">
          <code-block :code="InputComponentExample" lang="text/x-vue" />
          <p>InputComponent.vue</p>
        </div>
        <input-component class="half" />
      </app-slide>

      <app-slide>
        <h1>Event handling</h1>
        <div class="two-thirds">
          <code-block :code="EventComponentExample" lang="text/x-vue" />
          <p>EventComponent.vue</p>
        </div>
        <event-component class="one-third" />
      </app-slide>

      <app-slide>
        <h1>The Vue object (Options API) vs Composition API</h1>
        <div class="half">
          <code-block
            :code="`export default {
  name: 'ComponentName',
  props: {}, // properties
  data() {}, // reactive data
  computed: {}, // computed data
  components: {}, // other components used
  watch: {}, // observe reactive data
  methods: {}, // methods

  // lifecycle handlers
  beforeCreate() {},
  created() {},
  beforeMount() {},
  mounted() {},
  beforeUpdate() {},
  updated() {},
  activated() {},
  deactivated() {},
  beforeUnmount() {},
  unmounted() {},
  errorCaptured() {},
};`"
            lang="text/javascript"
          />
        </div>
        <div class="half">
          <code-block
            :code="`<script setup>
// Name cannot be set using composition API
const props = defineProps()
const data = reactive({})
const computed = computed(() => 123)
import Component from './Component.vue'
watch(data, async (newData, oldData) => {})
async function method() {}

// lifecycle handlers
onBeforeCreate(() => {})
onCreated(() => {})
onBeforeMount(() => {})
onMounted(() => {})
onBeforeUpdate(() => {})
onUpdated(() => {})
onActivated(() => {})
onDeactivated(() => {})
onBeforeUnmount(() => {})
onUnmounted(() => {})
onErrorCaptured(() => {})
</script>`"
          />
        </div>
      </app-slide>

      <app-slide>
        <h1>Conditional Rendering</h1>
        <div class="two-thirds">
          <code-block
            :code="ConditionalComponentExample"
            lang="text/x-vue"
            :template-only="true"
          />
          <p>ConditionalComponent.vue</p>
        </div>
        <conditional-component class="one-third" />
      </app-slide>

      <app-slide>
        <h1>List Rendering</h1>
        <div class="half">
          <code-block :code="ListComponentExample" lang="text/x-vue" />
          <p>ListComponent.vue</p>
        </div>
        <list-component class="half" />
      </app-slide>

      <app-slide>
        <h1>Computed properties</h1>
        <div class="half">
          <ul>
            <li>Will be updated if any source is updated</li>
            <li>Cached based on dependencies</li>
            <li>Great for hooking up to a global state</li>
            <li>Works as normal properties in the component</li>
          </ul>
          <computed-component />
        </div>
        <code-block
          class="half"
          :code="ComputedComponentExample"
          lang="text/x-vue"
        />
      </app-slide>

      <app-slide>
        <h1>Watchers</h1>
        <div class="half">
          <code-block
            :code="WatcherComponentExample"
            lang="text/javascript"
            :script-only="true"
          />
          <p>WatcherComponent.vue</p>
        </div>
        <div class="half">
          <ul>
            <li>Used for reacting to changes on properties</li>
            <li>(Usually better to use computed properties)</li>
          </ul>
          <watcher-component />
        </div>
      </app-slide>

      <app-slide>
        <h1>Custom inputs</h1>
        <div class="half">
          <ul>
            <li>Some times we want custom inputs</li>
            <li>We can exploit two-way binding with v-model</li>
            <li>(should not be overdone)</li>
          </ul>
          <v-model-usage-component />
          <code-block
            code='<address-input v-model="address"/>'
            lang="text/x-vue"
            :script-only="true"
          />
        </div>
        <div class="half">
          <code-block
            :code="VModelComponentExample"
            lang="text/javascript"
            :script-only="true"
          />
          <p>VModelComponent.vue</p>

          <ul>
            <li>We can customize the name of the value being bound</li>
            <li>And also have multiple bindings with different names</li>
          </ul>
        </div>
      </app-slide>

      <app-slide>
        <h1 style="text-decoration: line-through;">Filters</h1>
        <div class="half">
          <code-block :code="FilterComponentExample" lang="text/x-vue" />
          <p>FilterComponent.vue</p>
        </div>
        <div class="half">
          <ul>
            <li>Use for easily transforming text</li>
            <li>In a reusable way</li>
          </ul>
          <filter-component />
        </div>
      </app-slide>

      <app-slide>
        <h1>Directives</h1>
        <div class="half">
          <ul>
            <li>To make element-level changes easy</li>
            <li>In a reusable way</li>
            <li>
              Can register hooks for:
              <ul>
                <li>bind</li>
                <li>inserted</li>
                <li>update</li>
                <li>componentUpdated</li>
                <li>unbind</li>
              </ul>
            </li>
          </ul>
          <directive-component />
        </div>
        <div class="half">
          <code-block :code="DirectiveComponentExample" strip-style lang="text/x-vue" />
          <p>DirectiveComponent.vue</p>
        </div>
      </app-slide>

      <app-slide>
        <h1>Slots</h1>
        <div class="half">
          <ul>
            <li>Slots can be used to pass children into components</li>
            <li>We can have multiple named slots for complex wrappers</li>
            <li>Slots can also take in props from the wrapper!</li>
          </ul>
          <code-block :code="SlotComponentExample" template-only lang="text/x-vue" />
          <p>SlotComponent.vue</p>
        </div>
        <div class="half">
          <code-block :code="SlotUsageComponentExample" template-only lang="text/x-vue" />
          <p>SlotUsageComponent.vue</p>
          <slot-usage-component />
        </div>
      </app-slide>

      <app-slide>
        <h1>The Vue object | composition API</h1>
        <div class="half">

          <code-block
            :code="`export default {
  name: 'ComponentName', // ✔️
  props: {}, // properties ✔️
  data() {}, // reactive data ✔️
  computed: {}, // computed data ✔️
  components: {}, // other components used ✔️
  watch: {}, // observe reactive data ✔️
  methods: {}, // methods ✔️

  // lifecycle handlers
  beforeCreate() {},
  created() {},
  beforeMount() {},
  mounted() {},
  beforeUpdate() {},
  updated() {},
  activated() {},
  deactivated() {},
  beforeDestroy() {},
  destroyed() {},
  errorCaptured() {},
};`"
            lang="text/javascript"
          />
        </div>
        <div class="half">
          <code-block
            :code="`<script setup>
// Name cannot be set using composition API
const props = defineProps() ✔️
const data = reactive({}) ✔️
const computed = computed(() => 123) ✔️
import Component from './Component.vue' ✔️
watch(data, async (newData, oldData) => {}) ✔️
async function method() {} ✔️

// lifecycle handlers
onBeforeCreate(() => {})
onCreated(() => {})
onBeforeMount(() => {})
onMounted(() => {})
onBeforeUpdate(() => {})
onUpdated(() => {})
onActivated(() => {})
onDeactivated(() => {})
onBeforeUnmount(() => {})
onUnmounted(() => {})
onErrorCaptured(() => {})
</script>`"
          />
        </div>
      </app-slide>

      <app-slide>
        <h1>Agenda:</h1>
        <ul>
          <li>✅ What's Vue.js?</li>
          <li>✅ Devtools</li>
          <li>✅ Components</li>
          <li>✅ Data binding</li>
          <li>✅ Event handling</li>
          <li>✅ Computed properties</li>
          <li>✅ Watchers</li>
          <li>✅ Custom inputs</li>
          <li style="text-decoration: line-through">✅ Filters</li>
          <li>✅ Directives</li>
          <li>✅ Slots</li>
          <li>Lifecycle</li>
          <li>Routing &amp; state</li>
        </ul>
      </app-slide>

      <app-slide>
        <h1>Lifecycle</h1>
        <h2 class="subtitle">How do we react to component state?</h2>
      </app-slide>

      <app-slide>
        <!-- <h1>Lifecycle</h1> -->
        <a
          href="https://vuejs.org/guide/essentials/lifecycle.html#lifecycle-diagram"
          style="display: contents"
          target="_blank"
        >
          <vertical-image src="static/lifecycle_vue3.png" />
        </a>
      </app-slide>

      <app-slide>
        <h1>Lifecycle</h1>
        <h2 class="subtitle">Practical example</h2>
        <ul class="half">
          <li>Can be used for loading data whenever shown</li>
          <li>Can be used for cleaning up resources when no longer needed</li>
        </ul>
        <lifecycle-component class="half" />
      </app-slide>

      <app-slide>
        <h1>Routing &amp; state</h1>
        <h2 class="subtitle">For bigger applications</h2>
      </app-slide>

      <app-slide>
        <img src="./assets/logo.png" />
        <h1>Vue Router</h1>
        <h2 class="subtitle">The recommended routing provider</h2>
        <a target="_blank" href="https://router.vuejs.org/">router.vuejs.org</a>
      </app-slide>

      <app-slide>
        <h1>Vue Router</h1>
        <div class="half">
          <code-block :code="RouterExample" lang="text/javascript" />
          <p>router.js</p>
        </div>
        <div class="half">
          <code-block :code="RouterComponentExample" template-only lang="text/x-vue" />
          <p>RouterComponent.vue</p>
          <router-component />
        </div>
      </app-slide>

      <app-slide>
        <h1>🍍 Pinia</h1>
        <h2 class="subtitle">The recommended state provider</h2>
        <a target="_blank" href="https://pinia.vuejs.org/">pinia.vuejs.org</a>
      </app-slide>

      <app-slide>
        <h1>🍍 Pinia</h1>
        <div class="half">
          <code-block :code="StoreExample" lang="text/typescript" />
          <p>store.ts</p>
          <pinia-component />
        </div>
        <div class="half">
          <code-block :code="PiniaComponentExample" lang="text/x-vue" />
          <p>PiniaComponent.vue</p>
          <pinia-component />
        </div>
      </app-slide>

      <app-slide>
        <h1>Let's code!</h1>
        <h2 class="subtitle">This are our goals:</h2>
        <ul>
          <li>Run our own Vue project</li>
          <li>
            Create our own component!
            <ul>
              <li>With an input field</li>
              <li>And something to show the users input</li>
            </ul>
          </li>
          <li>Add the component to App.vue</li>
        </ul>
        <code-block
          :code="`yarn create vite
yarn
yarn dev`"
          lang="text/x-sh"
        />
      </app-slide>

      <app-slide>
        <img src="./assets/power_of_sharing.png" />
      </app-slide>
    </app-presenter>
    <app-progress :progress="progress" />
  </main>
</template>

<style>
html,
body {
  padding: 0;
  margin: 0;
  height: 100%;
  overflow: hidden;
}
main {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100%;
  font-size: 1.5em;
}

.slide-left-enter-active,
.slide-left-leave-active,
.slide-right-enter-active,
.slide-right-leave-active {
  transition: all 0.5s ease-in-out;
}

.slide-left-enter-from,
.slide-left-leave-to,
.slide-right-enter-from,
.slide-right-leave-to {
  opacity: 0;
}

.slide-left-enter-from,
.slide-right-leave-to {
  transform: translateX(-75px);
}

.slide-right-enter-from,
.slide-left-leave-to {
  transform: translateX(75px);
}
</style>
