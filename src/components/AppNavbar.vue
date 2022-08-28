<template>
  <header class="header">
    <nav class="header__nav nav">
      <div class="nav__box nav__box--left">
        <HamburgerMenuButton />
        <Logo class="nav__logo" />
        <input
          v-model.sync="documentTitle"
          placeholder="Document title"
          name="title"
          class="nav__title-input"
        />
      </div>
      <div class="nav__box nav__box--right">
        <button
          class="nav__delete-button button--secondary"
          :diabled="markdowns.length === 1"
          @click="deleteDocument"
        >
          Delete document
        </button>
        <button class="nav__save-button button--primary" @click="saveReadme(documentTitle)">
          Save changes
        </button>
      </div>
    </nav>
  </header>
</template>

<script setup lang="ts">
import HamburgerMenuButton from './HamburgerMenuButton.vue';
import Logo from './Logo.vue';
import { useStore } from '../store';
import { storeToRefs } from 'pinia';
const store = useStore();
const { documentTitle, markdowns } = storeToRefs(store);
const { deleteDocument, saveReadme } = store;
</script>

<style scoped lang="scss">
@import './../assets/styles/main.scss';

.header {
  background-color: $black-light;
  width: 100%;
  padding: 1em;

  .nav {
    display: flex;
    align-items: center;
    justify-content: space-between;

    &__box {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 0.5em;

      &--left {
        @media (max-width: $mobile) {
          width: 100%;
          justify-content: space-between;
        }
      }

      &--right {
        @media (max-width: $mobile) {
          display: none;
        }
      }
    }

    &__logo {
      margin-left: 2em;
    }

    &__title-input {
      width: 200px;
      outline: none;
      margin-left: 2em;
      background: transparent;
      border: none;
      padding: 0.8em 0;
      border-bottom: 2px solid $gray-400;

      &:focus {
        border-bottom: 2px solid $gray-200;
      }
    }
  }
}
</style>
