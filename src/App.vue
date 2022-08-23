<script setup lang="ts">
import AppNavbar from './components/AppNavbar.vue';
</script>

<template>
  <main class="app-wrapper">
    <AppNavbar />
  </main>
</template>

<style scoped lang="scss">
.app-wrapper {
  background-color: #15161a;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  min-height: 100vh;
  width: 100%;
}
</style>
