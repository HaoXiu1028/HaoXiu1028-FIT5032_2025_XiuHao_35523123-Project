<template>
    <div>
      <div class="section-title">
        <i class="fas fa-book-medical"></i>
        <h2>健康资源中心</h2>
      </div>
      <div class="resource-grid">
        <ResourceCard v-for="(resource, index) in resources" :key="index" :resource="resource" />
      </div>
    </div>
  </template>
  
  <script>
  import ResourceCard from './ResourceCard.vue'
  
  export default {
    name: 'ResourceSection',
    components: {
      ResourceCard
    },
    data() {
      return {
        resources: [
          {
            icon: 'fas fa-virus',
            title: '传染病预防',
            items: [
              '疫苗指南与接种日历',
              '感染控制与预防建议',
              '季节性传染病应对措施'
            ]
          },
          {
            icon: 'fas fa-heartbeat',
            title: '慢性病管理',
            items: [
              '糖尿病管理工具包',
              '高血压管理计划',
              '健康饮食与运动指南'
            ]
          },
          {
            icon: 'fas fa-brain',
            title: '心理健康',
            items: [
              '心理咨询服务指南',
              '危机干预热线',
              '减压与情绪管理技巧'
            ]
          },
          {
            icon: 'fas fa-child',
            title: '儿童健康',
            items: [
              '儿童疫苗接种计划',
              '学校健康政策指南',
              '儿童营养与发育'
            ]
          }
        ]
      }
    }
  }
  </script>
  
  <style scoped>
  .resource-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
    gap: 20px;
    margin-top: 20px;
  }
  </style>