<template>
  <div class="hamburger">
    <input
      type="checkbox"
      id="nav-checkbox"
      @click="store.toggleSidebar"
      class="hamburger__input"
      :checked="store.sidebarVisible"
    />
    <label class="hamburger__lines-wrapper" for="nav-checkbox">
      <button aria-label="hamburger" class="hamburger__lines">
        <div class="hamburger__line-wrapper hamburger__line-wrapper--top">
          <div class="hamburger__line hamburger__line--top"></div>
        </div>
        <div class="hamburger__line-wrapper hamburger__line-wrapper--middle">
          <div class="hamburger__line hamburger__line--middle"></div>
        </div>
        <div class="hamburger__line-wrapper hamburger__line-wrapper--bottom">
          <div class="hamburger__line hamburger__line--bottom"></div>
        </div>
      </button>
    </label>
  </div>
</template>

<script setup lang="ts">
import { useStore } from '../store';

const store = useStore();
</script>

<style scoped lang="scss">
@import './../assets/styles/variables.scss';

.hamburger {
  z-index: 40;
  display: inline-flex;

  &__input {
    display: none;

    &:checked + .hamburger__lines-wrapper .hamburger__line-wrapper .hamburger__line--bottom {
      transform: rotateZ(45deg);
    }
    &:checked + .hamburger__lines-wrapper .hamburger__line-wrapper .hamburger__line--middle {
      opacity: 0;
    }
    &:checked + .hamburger__lines-wrapper .hamburger__line-wrapper .hamburger__line--top {
      transform: rotateZ(-45deg);
    }
    &:checked + .hamburger__lines-wrapper .hamburger__line-wrapper--bottom {
      transform: none;
    }
    &:checked + .hamburger__lines-wrapper .hamburger__line-wrapper--middle {
      transform: none;
    }
    &:checked + .hamburger__lines-wrapper .hamburger__line-wrapper--top {
      transform: none;
    }
    &:checked + .hamburger__lines-wrapper .hamburger__line--bottom {
      transform: none;
      transition-delay: 0.1s;
    }
    &:checked + .hamburger__lines-wrapper .hamburger__line--middle {
      transform: none;
      transition-delay: 0.1s;
    }
    &:checked + .hamburger__lines-wrapper .hamburger__line--top {
      transform: none;
      transition-delay: 0.1s;
    }
    &:checked + .hamburger__lines-wrapper .hamburger__line-wrapper {
      transition-delay: 0s;
    }
  }

  &__lines-wrapper {
    display: block;
    position: relative;
    width: 32px;
    height: 32px;
    z-index: 50;
    cursor: pointer;
  }
  &__lines {
    display: block;
    cursor: pointer;
    all: unset;

    * {
      pointer-events: none;
    }
  }

  &__line-wrapper {
    position: absolute;
    left: 0px;
    top: 13px;
    transition: transform 0.2s ease-in-out 0.1s;

    &--top {
      transform: translateY(-7px) scaleX(0.88235);
    }

    &--middle {
      transform: translateY(0px) scaleX(0.88235);
    }

    &--bottom {
      transform: translateY(7px) scaleX(0.88235);
    }

    @media (max-width: $mobile) {
      left: 6px;

      &--top {
        transform: translateY(-5px) scaleX(0.88235);
      }

      &--bottom {
        transform: translateY(5px) scaleX(0.88235);
      }
    }
  }

  &__line {
    border-radius: 3px;
    height: 3px;
    width: 30px;
    transition: transform 0.2s ease-in-out;
    background-color: white;
    @media (max-width: $mobile) {
      height: 2px;
      width: 20px;
    }
  }
}
</style>
