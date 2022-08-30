<template>
  <div class="logo">
    <img src="../assets/icons/markdown.svg" class="logo__image" alt="logo" />
    <span class="logo__text">MD-Previewer</span>
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
    margin-left: 4px;
    font-size: 1.2em;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.1em;
  }
}
</style>
