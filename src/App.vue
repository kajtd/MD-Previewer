<script setup lang="ts">
import AppNavbar from './components/AppNavbar.vue';
import AppMarkdown from './components/AppMarkdown.vue';
import AppSidebar from './components/AppSidebar.vue';
</script>

<template>
  <main class="app-wrapper">
    <AppNavbar />
    <AppMarkdown />
    <AppSidebar />
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
