<template>
  <transition name="sidebar">
    <aside class="sidebar" v-show="sidebarVisible">
      <div class="sidebar__divider"></div>
      <AppLogo class="sidebar__logo" />
      <h2 class="sidebar__title">My documents</h2>
      <button class="sidebar__add-button button--primary" @click="addNewMarkdown">
        New document
        <img src="./../assets/icons/plus.svg" alt="" class="icon" />
      </button>
      <h2 class="sidebar__subtitle">Your documents</h2>
      <ul class="sidebar__list">
        <li v-for="(markdown, index) in markdowns" :key="index" class="sidebar__item">
          <button
            :class="[
              'sidebar__document-button document-button',
              { 'document-button--active': currentMarkdownIndex === index },
            ]"
            @click="setCurrentMarkdownIndex(index)"
          >
            <span class="document-button__title"> {{ markdown.title }} </span>
            <span class="document-button__date">{{ markdown.date }}</span>
          </button>
        </li>
      </ul>
    </aside>
  </transition>
</template>

<script setup lang="ts">
import AppLogo from './AppLogo.vue';
import { useStore } from '../store';
import { storeToRefs } from 'pinia';
const store = useStore();
const { sidebarVisible, markdowns, currentMarkdownIndex } = storeToRefs(store);
const { addNewMarkdown, setCurrentMarkdownIndex } = store;
</script>

<style lang="scss" scoped>
@import './../assets/styles/variables.scss';

.sidebar {
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 300px;
  background-color: $black-light;
  padding: 100px $extra-em 0 $extra-em;

  &__divider {
    width: 100%;
    height: 2px;
    background-color: $gray-500;
    margin-bottom: 1em;
  }

  &__title {
    color: $gray-500;
    text-transform: uppercase;
    font-size: 1.2em;
    margin-bottom: 1em;
  }

  &__add-button {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.7em;
  }

  &__list {
    position: relative;
    list-style: none;
    overflow-y: auto;
    max-height: 400px;
    padding: 0;
    padding-right: 12px;
  }

  &__item {
    width: 100%;
    margin-bottom: 0.5em;
  }

  .document-button {
    font-family: $font-normal;
    width: 100%;
    padding: 1em;
    background-color: transparent;
    border: 2px solid $gray-400;
    border-radius: 0.3em;
    display: flex;
    justify-content: space-between;
    align-items: center;
    cursor: pointer;
    transition: background 0.25s ease-in;

    &:hover {
      background-color: rgba(0, 0, 0, 0.3);
    }

    &__title {
      font-weight: 900;
    }

    &__date {
      font-weight: 300;
    }

    &--active {
      background-color: rgba(0, 0, 0, 0.3);
    }
  }
}

.sidebar-enter-active,
.sidebar-leave-active {
  transition: all 0.2s ease-in-out;
}
.sidebar-enter-from {
  transform: translateX(-300px);
}
.sidebar-enter-to {
  transform: translateX(0);
}
.sidebar-leave-to {
  transform: translateX(-300px);
}
</style>
