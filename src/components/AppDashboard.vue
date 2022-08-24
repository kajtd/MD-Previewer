<template>
  <div class="dashboard">
    <article class="dashboard__window dashboard__window--left window">
      <header class="window__header">Markdown</header>
      <div class="window__content">{{ text }}</div>
    </article>
    <article class="dashboard__window dashboard__window--right window">
      <header class="window__header">Preview</header>
      <div v-html="convertedHtml" class="window__content"></div>
    </article>
  </div>
</template>

<script setup lang="ts">
import Showdown from 'showdown';

const converter = new Showdown.Converter();
const text = '# Hello, markdown!';
const convertedHtml = converter.makeHtml(text);
</script>

<style lang="scss" scoped>
.dashboard {
  flex: 1;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;

  .window {
    width: 50%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border-right: 5px solid #2c2d30;

    &--right {
      border-left: 5px solid #2c2d30;
      border-right-width: 0;
    }

    &__header {
      background-color: #1e1f22;
      width: 100%;
      margin-bottom: auto;
      padding: calc(1em + 7px);
      font-size: 1.25em;
      font-weight: 500;
      text-transform: uppercase;
      color: gainsboro;
    }

    &__content {
      width: 100%;
      flex: 1;
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }
}
</style>
