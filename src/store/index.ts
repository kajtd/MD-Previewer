import { defineStore } from 'pinia';
import { ref, watch } from 'vue';

interface Markdown {
  title: string;
  text: string;
  date: string;
}

export const useStore = defineStore('store', () => {
  const sidebarVisible = ref(false);
  const convertedHtml = ref('');
  const markdowns = ref<Markdown[]>(
    JSON.parse(localStorage.getItem('markdowns') as string) || [
      {
        title: 'first.md',
        text: '# Start typing',
        date: new Date().toLocaleDateString(),
      },
    ]
  );
  const currentMarkdownIndex = ref(
    JSON.parse(localStorage.getItem('currentMarkdownIndex') as string) || 0
  );
  const editorText = ref(markdowns.value[currentMarkdownIndex.value].text);
  const documentTitle = ref(markdowns.value[currentMarkdownIndex.value].title);

  watch(currentMarkdownIndex, () => {
    editorText.value = markdowns.value[currentMarkdownIndex.value].text;
    documentTitle.value = markdowns.value[currentMarkdownIndex.value].title;
    localStorage.setItem('currentMarkdownIndex', JSON.stringify(currentMarkdownIndex.value));
    localStorage.setItem('markdowns', JSON.stringify(markdowns.value));
  });

  const toggleSidebar = (): void => {
    sidebarVisible.value = !sidebarVisible.value;
  };

  const setCurrentMarkdownIndex = (index: number): void => {
    currentMarkdownIndex.value = index;
  };

  const deleteDocument = (): void => {
    if (markdowns.value.length === 1) return;
    markdowns.value.splice(currentMarkdownIndex.value, 1);
    currentMarkdownIndex.value > 0 ? currentMarkdownIndex.value-- : currentMarkdownIndex.value++;
  };

  const saveReadme = (title = ''): void => {
    markdowns.value[currentMarkdownIndex.value] = {
      title,
      text: editorText.value,
      date: new Date().toLocaleDateString(),
    };
    localStorage.setItem('markdowns', JSON.stringify(markdowns.value));
  };

  const addNewMarkdown = (): void => {
    markdowns.value.push({
      title: 'untitled.md',
      text: '',
      date: new Date().toLocaleDateString(),
    });
    currentMarkdownIndex.value = markdowns.value.length - 1;
  };

  return {
    sidebarVisible,
    editorText,
    convertedHtml,
    markdowns,
    documentTitle,
    currentMarkdownIndex,
    setCurrentMarkdownIndex,
    toggleSidebar,
    deleteDocument,
    saveReadme,
    addNewMarkdown,
  };
});
