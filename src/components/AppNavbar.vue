<template>
  <header class="header">
    <nav class="header__nav nav">
      <div class="nav__box nav__box--left">
        <HamburgerMenuButton />
        <div class="nav__logo logo">
          <img src="../assets/markdown.svg" class="logo__image" alt="logo" />
          <span class="logo__text">MDPreviewer</span>
        </div>
      </div>
      <div class="nav__box nav__box--right">
        <button class="nav__delete-button button--secondary">Delete changes</button>
        <button class="nav__save-button button--primary">Save Readme</button>
      </div>
    </nav>
  </header>
</template>

<script setup lang="ts">
import HamburgerMenuButton from './HamburgerMenuButton.vue';
</script>

<style scoped lang="scss">
@import './../assets/styles/main.scss';

.header {
  background-color: #2c2d30;
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

    .logo {
      margin-left: 2em;
      display: inline-flex;
      place-items: center;
      gap: 0.5em;

      &__image {
        height: 3em;
        filter: drop-shadow(0 0 6px $primary);
      }

      &__text {
        font-size: 1.75em;
        font-weight: 600;
      }
    }
  }
}
</style>
