<template>
    <header class="navbar">
      <div class="logo">
        <i class="fas fa-heartbeat"></i>
        <span>移民健康导航</span>
      </div>
      <div class="language-switch">
        <button class="language-btn" @click="changeLanguage">
          中文 <i class="fas fa-chevron-down"></i>
        </button>
      </div>
    </header>
  </template>
  
  <script>
  export default {
    name: 'Header',
    methods: {
      changeLanguage() {
        alert('语言选择菜单将在此显示')
      }
    }
  }
  </script>
  
  <style scoped>
  .navbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 15px 5%;
    background-color: var(--white);
    box-shadow: var(--shadow);
    position: sticky;
    top: 0;
    z-index: 100;
  }
  
  .logo {
    display: flex;
    align-items: center;
    font-weight: 600;
    font-size: 1.4rem;
    color: var(--primary-color);
  }
  
  .logo i {
    margin-right: 10px;
    font-size: 1.8rem;
  }
  
  .language-switch {
    position: relative;
  }
  
  .language-btn {
    background: none;
    border: 1px solid var(--medium-gray);
    border-radius: 4px;
    padding: 8px 15px;
    cursor: pointer;
    display: flex;
    align-items: center;
    font-size: 0.9rem;
    transition: all 0.2s ease;
  }
  
  .language-btn:hover {
    background-color: var(--light-gray);
  }
  
  .language-btn i {
    margin-left: 5px;
    color: var(--dark-gray);
  }
  </style>