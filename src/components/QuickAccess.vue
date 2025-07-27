<template>
    <div>
      <div class="section-title">
        <i class="fas fa-bolt"></i>
        <h2>Quick Access</h2>
      </div>
      <div class="quick-access">
        <div v-for="(item, index) in accessItems" :key="index" class="access-card">
          <i :class="item.icon"></i>
          <h3>{{ item.title }}</h3>
          <p>{{ item.description }}</p>
          <a href="#" class="btn" @click.prevent="handleAccess(index)">{{ item.buttonText }}</a>
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
            title: 'Service Evaluation Center',
            description: 'Users can evaluate the systems services (Health Resource Center, Community Interaction, Medical Service Connection) on a scale of 1 to 10',
            buttonText: 'Start Evaluation'
          },
          {
            icon: 'fas fa-calendar-check',
            title: 'Medical Service Coordination',
            description: 'Quickly schedule telemedicine services, access medical insurance support, and find nearby hospitals and pharmacies',
            buttonText: 'Schedule Service'
          },
          {
            icon: 'fas fa-comments',
            title: 'Community Interaction',
            description: 'Participate in community forums, view event calendars, and join volunteer teams to share experiences',
            buttonText: 'Join the Community'
          }
        ]
      }
    },
    methods: {
      handleAccess(index) {
        if (index === 0) {
          // 第一个按钮是"开始评价"
          this.$router.push({ name: 'RatingPage' });
        } else if (index === 1) {
          // 第二个按钮是"预约服务"
          console.log('预约服务');
          // 可以在这里添加实际的路由名称
          // this.$router.push({ name: 'AppointmentPage' });
        } else if (index === 2) {
          // 第三个按钮是"加入社区"
          console.log('加入社区');
          // 可以在这里添加实际的路由名称
          // this.$router.push({ name: 'CommunityPage' });
        }
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