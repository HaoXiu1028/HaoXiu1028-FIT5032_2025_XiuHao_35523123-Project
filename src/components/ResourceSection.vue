<template>
    <div>
      <div class="section-title">
        <i class="fas fa-book-medical"></i>
        <h2>Health Resource Center</h2>
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
            title: 'Infectious Disease Prevention',
            items: [
              'Vaccination Guidelines and Schedule',
              'Infection Control and Prevention Recommendations',
              'Seasonal Infectious Disease Response Measures'
            ]
          },
          {
            icon: 'fas fa-heartbeat',
            title: 'Chronic Disease Management',
            items: [
              'Diabetes Management Toolkit',
              'Hypertension Management Plan',
              'Healthy Diet and Exercise Guide'
            ]
          },
          {
            icon: 'fas fa-brain',
            title: 'Mental Health',
            items: [
            'Psychological Counseling Service Guide',
              'Crisis Intervention Hotline',
              'Stress Reduction and Emotional Management Techniques'
            ]
          },
          {
            icon: 'fas fa-child',
            title: 'Childrens Health',
            items: [
            'Childrens Vaccination Schedule',
              'School Health Policy Guide',
              'Childrens Nutrition and Development'
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