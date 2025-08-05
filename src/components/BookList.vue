

<template>
    <div class="book-list-container">
      <h2>书籍列表</h2>
  
      <!-- 查询控制 -->
      <div class="query-controls">
        <div class="control-group">
          <strong>排序方式:</strong>
          <button @click="setSortBy('isbn')" :class="{ active: sortBy === 'isbn' }">按 ISBN</button>
          <button @click="setSortBy('name')" :class="{ active: sortBy === 'name' }">按书名</button>
        </div>
        <div class="control-group">
          <strong>限制数量:</strong>
          <button @click="setLimit(3)" :class="{ active: limitCount === 3 }">3 条</button>
          <button @click="setLimit(10)" :class="{ active: limitCount === 10 }">10 条</button>
          <button @click="setLimit(0)" :class="{ active: !limitCount }">无限制</button>
        </div>
      </div>
  
      <!-- 加载与错误提示 -->
      <div v-if="loading" class="loading-state">正在加载书籍...</div>
      <div v-if="error" class="error-state">{{ error }}</div>
      
      <!-- 书籍列表 -->
      <ul v-if="books.length" class="list-group">
        <li v-for="book in books" :key="book.id" class="list-group-item">
          <div v-if="editingBookId !== book.id" class="book-display">
            <span>
              <strong>{{ book.name }}</strong> - ISBN: {{ book.isbn }}
            </span>
            <div class="book-actions">
              <button class="btn btn-sm btn-outline-primary" @click="startEditing(book)">编辑</button>
              <button class="btn btn-sm btn-outline-danger" @click="deleteBook(book.id)">删除</button>
            </div>
          </div>
  
          <!-- 编辑表单 -->
          <div v-else class="book-edit">
            <input type="text" v-model="editForm.name" class="form-control mb-2" placeholder="书名">
            <input type="number" v-model="editForm.isbn" class="form-control mb-2" placeholder="ISBN">
            <div class="edit-actions">
              <button class="btn btn-sm btn-success" @click="saveChanges(book.id)">保存</button>
              <button class="btn btn-sm btn-secondary" @click="cancelEditing">取消</button>
            </div>
          </div>
        </li>
      </ul>
      <div v-else-if="!loading" class="no-books">
        没有找到符合条件的书籍。
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref, watch, reactive } from 'vue';
  import db from '../firebase/init.js';
  import { collection, query, where, orderBy, limit, onSnapshot, doc, deleteDoc, updateDoc } from 'firebase/firestore';
  
  // 响应式状态
  const books = ref([]);
  const loading = ref(true);
  const error = ref(null);
  const sortBy = ref('isbn'); // 默认排序字段
  const limitCount = ref(0); // 0 表示无限制
  
  const editingBookId = ref(null);
  const editForm = reactive({ name: '', isbn: '' });
  
  let unsubscribe = null; // 用于存储 onSnapshot 的取消订阅函数
  
  // 构建查询并监听
  const setupSubscription = () => {
    loading.value = true;
    error.value = null;
  
    // 如果已有监听，先取消
    if (unsubscribe) {
      unsubscribe();
    }
  
    try {
      const booksCollection = collection(db, 'books');
      
      // 构建动态查询
      let q = query(
        booksCollection,
        where("isbn", ">", 0), // 一个基础的 where 查询
        orderBy(sortBy.value, 'asc') // 根据 sortBy 的值动态排序
      );
  
      // 如果设置了 limit, 添加到查询中
      if (limitCount.value > 0) {
        q = query(q, limit(limitCount.value));
      }
  
      // 设置实时监听
      unsubscribe = onSnapshot(q, (snapshot) => {
        books.value = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        loading.value = false;
      }, (err) => {
        console.error("Firebase Snapshot Error:", err);
        error.value = "无法加载书籍列表。";
        loading.value = false;
      });
  
    } catch (err) {
      console.error("Error setting up subscription:", err);
      error.value = "查询时发生错误。";
      loading.value = false;
    }
  };
  
  // --- 控制函数 ---
  const setSortBy = (field) => {
    sortBy.value = field;
  };
  
  const setLimit = (num) => {
    limitCount.value = num;
  };
  
  // 监听排序或限制的改变，并重新设置监听
  watch([sortBy, limitCount], setupSubscription, { immediate: true });
  
  
  // --- CRUD 操作 ---
  
  // 删除书籍
  const deleteBook = async (id) => {
    if (confirm('确定要删除这本书吗？')) {
      try {
        await deleteDoc(doc(db, 'books', id));
        // onSnapshot 会自动更新UI
      } catch (err) {
        console.error("Error deleting book:", err);
        alert('删除失败！');
      }
    }
  };
  
  // 开始编辑
  const startEditing = (book) => {
    editingBookId.value = book.id;
    editForm.name = book.name;
    editForm.isbn = book.isbn;
  };
  
  // 取消编辑
  const cancelEditing = () => {
    editingBookId.value = null;
  };
  
  // 保存更改
  const saveChanges = async (id) => {
    if (!editForm.name || !editForm.isbn) {
      alert("书名和 ISBN 不能为空。");
      return;
    }
    try {
      const bookRef = doc(db, 'books', id);
      await updateDoc(bookRef, {
        name: editForm.name,
        isbn: Number(editForm.isbn)
      });
      cancelEditing(); // 退出编辑模式
    } catch (err) {
      console.error("Error updating book:", err);
      alert('更新失败！');
    }
  };
  
  </script>
  
  <style scoped>
  .book-list-container {
    padding: 20px;
    background-color: #f9f9f9;
    border-radius: 8px;
  }
  .query-controls {
    display: flex;
    gap: 20px;
    margin-bottom: 20px;
    padding: 10px;
    background-color: #e9ecef;
    border-radius: 8px;
    flex-wrap: wrap;
  }
  .control-group {
    display: flex;
    align-items: center;
    gap: 10px;
  }
  .query-controls button {
    border: 1px solid #007bff;
    background-color: white;
    color: #007bff;
    border-radius: 5px;
    padding: 5px 10px;
    cursor: pointer;
  }
  .query-controls button.active {
    background-color: #007bff;
    color: white;
  }
  .list-group-item {
    display: flex;
    flex-direction: column;
  }
  .book-display, .book-edit {
    width: 100%;
  }
  .book-display {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .book-actions, .edit-actions {
    display: flex;
    gap: 10px;
  }
  .loading-state, .error-state, .no-books {
    text-align: center;
    padding: 20px;
    color: #6c757d;
  }
  .error-state {
    color: #dc3545;
  }
  </style>