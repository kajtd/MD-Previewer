import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useStore = defineStore('store', () => {
  const sidebarVisible = ref(false);

  function toggleSidebar(): void {
    sidebarVisible.value = !sidebarVisible.value;
  }

  return { sidebarVisible, toggleSidebar };
});
