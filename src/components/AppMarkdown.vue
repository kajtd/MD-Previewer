<template>
  <div class="markdown">
    <article
      :class="['markdown__box markdown__box--markdown', { 'preview-invisible': previewInvisible }]"
    >
      <header class="markdown__header">
        Markdown
        <TogglePreviewButton
          :preview-invisible="previewInvisible"
          hide-on-desktop
          @toggle-preview="togglePreview"
        />
      </header>
      <textarea v-model="editorText" name="editor" id="editor" class="markdown__editor"></textarea>
    </article>
    <article
      :class="['markdown__box markdown__box--preview', { 'preview-invisible': previewInvisible }]"
    >
      <header class="markdown__header">
        Preview
        <TogglePreviewButton
          :preview-invisible="previewInvisible"
          @toggle-preview="togglePreview"
        />
      </header>
      <div v-html="convertedHtml" class="markdown__preview"></div>
    </article>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { watchEffect } from 'vue';
import { storeToRefs } from 'pinia';
import { useStore } from '../store';
import Showdown from 'showdown';
import TogglePreviewButton from './TogglePreviewButton.vue';

const store = useStore();
const { editorText, convertedHtml } = storeToRefs(store);
const converter = new Showdown.Converter();

const previewInvisible = ref(false);

watchEffect(() => {
  convertedHtml.value = converter.makeHtml(editorText.value);
});

const togglePreview = (): void => {
  previewInvisible.value = !previewInvisible.value;
};
</script>

<style lang="scss">
@import './../assets/styles/variables.scss';

.markdown {
  flex: 1;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;

  @media (max-width: $mobile) {
    flex-direction: row-reverse;
  }

  &__box {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border-right: 5px solid $black-light;

    &--preview {
      width: 50%;
      border-left: 5px solid $black-light;
      border-right-width: 0;

      &.preview-invisible {
        display: none;
      }

      @media (max-width: $mobile) {
        display: none;

        &.preview-invisible {
          display: flex;
          width: 100%;
        }
      }
    }

    &--markdown {
      width: 50%;

      &.preview-invisible {
        width: 100%;
      }

      @media (max-width: $mobile) {
        width: 100%;

        &.preview-invisible {
          display: none;
        }
      }
    }

    @media (max-width: $mobile) {
      border: none;
    }
  }

  &__header {
    background-color: #1e1f22;
    width: 100%;
    height: 60px;
    margin-bottom: auto;
    padding: 0.7em $extra-em;
    letter-spacing: 0.1em;
    font-size: 1.25em;
    font-weight: 500;
    text-transform: uppercase;
    color: gainsboro;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  &__editor,
  &__preview {
    width: 100%;
    height: 100%;
    flex: 1 1 0;
    outline: none;
    border: none;
    resize: none;
    padding: $extra-em;
    background-color: transparent;
    overflow-y: auto;
  }

  &__editor {
    @include mono-text;
    display: block;
    color: $gray-400;
  }

  &__preview {
    @include slab-text;

    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
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
