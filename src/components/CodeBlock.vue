<script lang="ts" setup>
import { computed, onMounted, ref } from "vue";
import CodeMirror from "codemirror";
import "codemirror/lib/codemirror.css";
import "codemirror/theme/material.css";
import "codemirror/mode/shell/shell.js";
import "codemirror/mode/vue/vue.js";
import "codemirror/mode/javascript/javascript.js";

const {
  code,
  lang = "text/x-vue",
  scriptOnly = false,
  templateOnly = false,
} = defineProps<{
  code: string;
  lang?: string;
  scriptOnly?: boolean;
  templateOnly?: boolean;
}>();

const editorEl = ref<HTMLElement | null>(null)

const filteredCode = computed(() => {
  if (scriptOnly) {
    const matches = /<script>((?:.|\n|\r)*)<\/script>/gm.exec(code);
    return matches ? matches[1].trim() : code;
  }
  if (templateOnly) {
    const matches = /<template>((?:.|\n|\r)*)<\/template>/gm.exec(code);
    return matches ? matches[1].trim() : code;
  }
  return code;
});

onMounted(async () => {
  CodeMirror(editorEl.value!, {
    value: filteredCode.value,
    theme: 'material',
    mode: lang,
    readOnly: false,
    tabSize: 2,
    lineWrapping: true,
    lineNumbers: true,
    viewportMargin: Infinity,
    scrollbarStyle: undefined,
  })
})
</script>

<template>
  <div class="code-block">
    <div
      @keyup.stop
      class="code-block__mirror"
      ref="editorEl"
    />
  </div>
</template>

<style lang="scss">
.code-block {
  width: 100%;
  display: flex;
  justify-content: center;
  position: relative;

  &__mirror {
    padding: 1em;
    background: #263238;
    border-radius: 0.3em;
    overflow: hidden;
    box-shadow: 0 0.1em 0.5em rgba(0, 0, 0, 0.4);

    .CodeMirror {
      height: auto;
      text-align: left;

      pre {
        font-family: "Fira Code";
        font-variant-ligatures: contextual;
        font-size: 0.9em;
      }
    }
  }
}
</style>
