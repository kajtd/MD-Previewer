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

  &__preview {
    @include mono-text;
    gap: 1.25em;

    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
      font-family: $font-slab;
      font-weight: bold;
      color: $gray-100;
    }
    h1 {
      font-size: 2em;
    }
    h2 {
      font-size: 1.75em;
      font-weight: lighter;
    }
    h3 {
      font-size: 1.5em;
    }
    h4 {
      font-size: 1.25em;
    }
    h5 {
      font-size: 1em;
    }
    h6 {
      font-size: 0.875em;
    }

    p {
      @include slab-text;
      color: $gray-400;
      code {
        @include mono-text;
        color: $gray-500;
      }
    }

    ol,
    ul {
      @include slab-text;
      padding-left: 1.5em;
      color: $gray-400;
    }
    ul {
      list-style: none;
      display: flex;
      flex-direction: column;
      gap: 0.625em;
      li {
        padding-left: 1.5em;
        position: relative;
        line-height: 1.5em;
        &::before {
          content: '';
          position: absolute;
          left: 0;
          top: 8px;
          color: $primary;
          background: $primary;
          width: 4px;
          height: 4px;
          border-radius: 50%;
        }
      }
    }

    blockquote {
      background-color: $gray-800;
      padding: 1.5em;
      border-radius: 0.25em;
      border-left: 0.25em solid $primary;
      margin-left: 0;
      margin-top: 2em;
      p,
      a {
        font-weight: bold;
        font-size: 1em;
        line-height: 1.5em;
        color: $gray-100;
      }
      a:hover {
        transition: color 0.3s ease-in-out;
        color: $primary;
      }
    }
    pre {
      background-color: $gray-800;
      padding: 1.5em;
      border-radius: 0.25em;
      display: block;
      white-space: pre-wrap;
      code {
        @include mono-text;
        color: $gray-100;
      }
    }
  }
}
</style>
