<template>
    <div>
      <div class="section-title">
        <i class="fas fa-bolt"></i>
        <h2>快速访问</h2>
      </div>
      <div class="quick-access">
        <div v-for="(item, index) in accessItems" :key="index" class="access-card">
          <i :class="item.icon"></i>
          <h3>{{ item.title }}</h3>
          <p>{{ item.description }}</p>
          <a href="#" class="btn">{{ item.buttonText }}</a>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'QuickAccess',
    data() {
      return {
        accessItems: [
          {
            icon: 'fas fa-notes-medical',
            title: '健康资源中心',
            description: '获取传染病预防、慢性病管理和心理健康支持等专业健康资源',
            buttonText: '查看资源'
          },
          {
            icon: 'fas fa-calendar-check',
            title: '医疗服务对接',
            description: '快速预约远程医疗服务，获取医保支持，寻找附近医院和药房',
            buttonText: '预约服务'
          },
          {
            icon: 'fas fa-comments',
            title: '社区互动',
            description: '参与社区论坛，查看活动日历，加入志愿者团队交流心得',
            buttonText: '加入社区'
          }
        ]
      }
    }
  }
  </script>
  
  <style scoped>
  .quick-access {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 20px;
    margin-bottom: 40px;
  }
  
  .access-card {
    background: var(--white);
    border-radius: var(--border-radius);
    box-shadow: var(--shadow);
    padding: 25px;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    border-top: 3px solid var(--primary-color);
    text-align: center;
  }
  
  .access-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  }
  
  .access-card i {
    font-size: 2.5rem;
    color: var(--primary-color);
    margin-bottom: 15px;
  }
  
  .access-card h3 {
    font-size: 1.2rem;
    margin-bottom: 12px;
    color: var(--text-color);
  }
  
  .access-card p {
    color: var(--dark-gray);
    margin-bottom: 20px;
    font-size: 0.95rem;
  }
  </style>