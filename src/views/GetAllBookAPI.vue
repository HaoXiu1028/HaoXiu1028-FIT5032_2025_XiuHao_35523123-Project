<template>
    <div class="container mt-4">
      <h3>All Books from Firestore (JSON Format)</h3>
      <div v-if="error" class="alert alert-danger">{{ error }}</div>
      <div v-if="isLoading" class="d-flex align-items-center">
        <strong>Loading...</strong>
        <div class="spinner-border ms-auto" role="status" aria-hidden="true"></div>
      </div>
      <pre v-else class="code-block">{{ booksJson }}</pre>
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted, computed } from 'vue';
  import { getFirestore, collection, getDocs } from "firebase/firestore";
  
  const books = ref([]);
  const isLoading = ref(true);
  const error = ref(null);
  
  // 使用计算属性将书籍数据格式化为美观的JSON字符串
  const booksJson = computed(() => {
    return JSON.stringify(books.value, null, 2);
  });
  
  // 在组件挂载后从Firestore获取数据
  onMounted(async () => {
    try {
      const db = getFirestore();
      const querySnapshot = await getDocs(collection(db, "books"));
      const booksData = [];
      querySnapshot.forEach((doc) => {
        booksData.push({ id: doc.id, ...doc.data() });
      });
      books.value = booksData;
      error.value = null;
    } catch (err) {
      console.error("Error fetching documents: ", err);
      error.value = "Failed to fetch books from Firestore.";
    } finally {
      isLoading.value = false;
    }
  });
  </script>
  
  <style scoped>
  .code-block {
    background-color: #f8f9fa;
    border: 1px solid #dee2e6;
    border-radius: .25rem;
    padding: 1rem;
    white-space: pre-wrap;
    word-wrap: break-word;
  }
  </style>