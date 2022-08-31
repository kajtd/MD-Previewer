<template>
  <button
    :class="['preview-button', { 'hide-on-desktop': hideOnDesktop && !previewInvisible }]"
    @click="$emit('togglePreview')"
  >
    <img
      v-if="!previewInvisible"
      src="./../assets/icons/eye.svg"
      alt=""
      class="icon icon--hovered icon--large"
    />
    <img
      v-else
      src="./../assets/icons/eye-slashed.svg"
      alt=""
      class="icon icon--hovered icon--large"
    />
  </button>
</template>

<script setup lang="ts">
defineProps({
  previewInvisible: Boolean,
  hideOnDesktop: Boolean,
});

defineEmits(['togglePreview']);
</script>

<style scoped lang="scss">
@import './../assets/styles/variables.scss';

.preview-button {
  border: none;
  background-color: transparent;

  &.hide-on-desktop {
    @media (min-width: $mobile) {
      display: none;
    }
  }
}
</style>
