<template>
  <header class="header">
    <nav class="header__nav nav">
      <div class="nav__box nav__box--left">
        <div class="nav__hamburger-wrapper">
          <HamburgerMenuButton />
        </div>
        <AppLogo class="nav__logo" />
        <div class="nav__divider"></div>
        <div class="nav__input-wrapper">
          <img src="../assets/icons/file.svg" class="icon" alt="" />
          <div>
            <label for="title" class="nav__title-label">Document name</label>
            <input
              v-model.sync="documentTitle"
              placeholder="Document title"
              name="title"
              id="title"
              class="nav__title-input"
            />
          </div>
        </div>
      </div>
      <div class="nav__box nav__box--right">
        <button aria-label="delete document" class="nav__delete-button" @click="deleteDocument">
          <img src="./../assets/icons/trash.svg" alt="" class="icon icon--hovered icon--large" />
        </button>
        <button
          aria-label="save readme"
          class="nav__save-button save-button button--primary"
          @click="saveReadme(documentTitle)"
        >
          <span class="save-button__text">Save Changes</span>
          <img src="./../assets/icons/save.svg" alt="" class="save-button__icon icon icon--large" />
        </button>
      </div>
    </nav>
  </header>
</template>

<script setup lang="ts">
import HamburgerMenuButton from './HamburgerMenuButton.vue';
import AppLogo from './AppLogo.vue';
import { useStore } from '../store';
import { storeToRefs } from 'pinia';
const store = useStore();
const { documentTitle } = storeToRefs(store);
const { deleteDocument, saveReadme } = store;
</script>

<style scoped lang="scss">
@import './../assets/styles/main.scss';

.header {
  background-color: $black-light;
  width: 100%;

  .nav {
    height: 72px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: relative;

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
        padding: 1em;

        @media (max-width: $mobile) {
          padding: 1em 0.2em;
        }
      }
    }

    &__hamburger-wrapper {
      height: 100%;
      top: 0;
      left: 0;
      position: absolute;
      display: grid;
      place-items: center;
      width: 70px;
      background: #35393f;

      @media (max-width: $mobile) {
        width: 50px;
      }
    }

    &__logo {
      margin-left: 80px;

      @media (max-width: $mobile) {
        display: none;
      }
    }

    &__divider {
      background-color: $gray-500;
      height: 60px;
      width: 2px;
      margin: 0 16px 0 12px;

      @media (max-width: $mobile) {
        display: none;
      }
    }

    &__input-wrapper {
      display: flex;
      gap: 1em;

      @media (max-width: $mobile) {
        margin-left: 60px;

        .icon {
          width: 16px;
        }
      }
    }

    &__title-label {
      color: #7c8187;
      font-size: 13px;
      font-weight: 300;
      display: block;
      position: relative;
      top: 10px;

      @media (max-width: $mobile) {
        display: none;
      }
    }

    &__title-input {
      max-width: 200px;
      outline: none;
      background: transparent;
      border: none;
      padding: 0.8em 0;
      border-bottom: 2px solid $gray-600;
      font-weight: 600;

      &:focus {
        border-color: $gray-100;
      }

      @media (max-width: $mobile) {
        max-width: 150px;
      }
    }

    &__delete-button {
      background-color: transparent;
      border: none;
      margin-right: 0.5em;
    }

    .save-button {
      display: grid;
      place-items: center;
      height: 40px;
      padding: 0 10px;
      &__text {
        @media (max-width: $mobile) {
          display: none;
        }
      }
      &__icon {
        @media (min-width: $mobile) {
          display: none;
        }
      }
    }
  }
}
</style>
