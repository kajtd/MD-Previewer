<template>
  <div class="logo">
    <img src="../assets/markdown.svg" class="logo__image" alt="logo" />
    <span class="logo__text">MDPreviewer</span>
  </div>
</template>

<style lang="scss" scoped>
@import './../assets/styles/variables.scss';

.logo {
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
</style>
