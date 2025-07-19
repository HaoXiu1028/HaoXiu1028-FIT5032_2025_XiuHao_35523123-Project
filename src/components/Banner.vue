<template>
    <section class="banner">
      <h1>{{ title }}</h1>
      <p>{{ description }}</p>
    </section>
  </template>
  
  <script>
  export default {
    name: 'Banner',
    data() {
      return {
        title: '欢迎来到移民健康导航系统',
        description: '为您提供全面、便捷的健康管理服务，帮助您轻松适应新的健康环境'
      }
    }
  }
  </script>
  
  <style scoped>
  .banner {
    background: linear-gradient(135deg, #6a93cb 0%, #4a90e2 100%);
    color: var(--white);
    padding: 50px 5%;
    text-align: center;
    margin-bottom: 40px;
  }
  
  .banner h1 {
    font-size: 2.5rem;
    margin-bottom: 15px;
    font-weight: 600;
  }
  
  .banner p {
    font-size: 1.2rem;
    max-width: 800px;
    margin: 0 auto;
    opacity: 0.9;
  }
  </style>