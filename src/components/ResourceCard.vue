<template>
    <div class="resource-card">
      <h3><i :class="resource.icon"></i> {{ resource.title }}</h3>
      <ul class="resource-list">
        <li v-for="(item, index) in resource.items" :key="index">{{ item }}</li>
      </ul>
    </div>
  </template>
  
  <script>
  export default {
    name: 'ResourceCard',
    props: {
      resource: {
        type: Object,
        required: true
      }
    }
  }
  </script>
  
  <style scoped>
  .resource-card {
    background: var(--white);
    border-radius: var(--border-radius);
    box-shadow: var(--shadow);
    padding: 25px;
    transition: all 0.3s ease;
    border-left: 3px solid var(--primary-color);
  }
  
  .resource-card:hover {
    transform: translateY(-3px);
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  }
  
  .resource-card h3 {
    margin-bottom: 15px;
    color: var(--text-color);
    display: flex;
    align-items: center;
  }
  
  .resource-card h3 i {
    margin-right: 10px;
    color: var(--primary-color);
  }
  
  .resource-list {
    list-style-type: none;
  }
  
  .resource-list li {
    margin-bottom: 10px;
    padding-left: 10px;
    position: relative;
  }
  
  .resource-list li:before {
    content: "•";
    position: absolute;
    left: -5px;
    color: var(--primary-color);
    font-size: 1.2rem;
  }
  </style>