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
        title: 'Welcome to the Immigrant Health Navigation System',
        description: 'Providing comprehensive and convenient health management services to help you easily adapt to your new health environment'
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