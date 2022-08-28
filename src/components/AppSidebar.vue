<template>
  <transition name="sidebar">
    <aside class="sidebar" v-show="sidebarVisible">
      <Logo class="sidebar__logo" />
      <button class="sidebar__add-button button--primary" @click="addNewMarkdown">
        New document
      </button>
      <h2 class="sidebar__title">Your documents</h2>
      <ul class="sidebar__list">
        <li v-for="(markdown, index) in markdowns" :key="index" class="sidebar__item">
          <button
            :class="[
              'sidebar__button button',
              { 'button--active': currentMarkdownIndex === index },
            ]"
            @click="setCurrentMarkdownIndex(index)"
          >
            <span class="button__title"> {{ markdown.title }} </span>
            <span class="button__date">{{ markdown.date }}</span>
          </button>
        </li>
      </ul>
    </aside>
  </transition>
</template>

<script setup lang="ts">
import Logo from './Logo.vue';
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
  padding: 100px calc(1em + 7px) 0 calc(1em + 7px);

  &__title {
    margin-top: 2em;
  }

  &__list {
    padding: 0;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 0.4em;
    height: 100%;
    list-style: none;
  }

  &__item {
    width: 100%;
  }

  &__logo {
    margin-bottom: 2em;
  }

  .button {
    font-family: $font-normal;
    width: 100%;
    padding: 1em;
    border-radius: 0.2em;
    background-color: transparent;
    border: 2px solid $gray-400;
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
