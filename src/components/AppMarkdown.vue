<template>
  <div class="markdown">
    <article class="markdown__box markdown__box--left">
      <header class="markdown__header">Markdown</header>
      <textarea v-model="editorText" name="editor" id="editor" class="markdown__editor"></textarea>
    </article>
    <article class="markdown__box markdown__box--right">
      <header class="markdown__header">Preview</header>
      <div v-html="convertedHtml" class="markdown__preview"></div>
    </article>
  </div>
</template>

<script setup lang="ts">
import { ref, watchEffect } from 'vue';
import Showdown from 'showdown';

const converter = new Showdown.Converter();
const editorText = ref('# Start typing');
const convertedHtml = ref('');

watchEffect(() => {
  convertedHtml.value = converter.makeHtml(editorText.value);
});
</script>

<style lang="scss" scoped>
@import './../assets/styles/variables.scss';

.markdown {
  flex: 1;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;

  &__box {
    width: 50%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border-right: 5px solid $light-black;

    &--right {
      border-left: 5px solid $light-black;
      border-right-width: 0;
    }
  }

  &__header {
    background-color: #1e1f22;
    width: 100%;
    margin-bottom: auto;
    padding: 0.7em calc(1em + 7px);
    letter-spacing: 0.1em;
    font-size: 1.25em;
    font-weight: 500;
    text-transform: uppercase;
    color: gainsboro;
  }

  &__editor,
  &__preview {
    width: 100%;
    height: 100%;
    flex: 1 1 0;
    outline: none;
    border: none;
    resize: none;
    padding: calc(1em + 7px);
    background-color: transparent;
    overflow-y: auto;
  }

  &__editor {
    @include mono-text;
    display: block;
    color: $gray-400;
  }
}
</style>
