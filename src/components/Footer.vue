<template>
    <footer class="footer">
      <div class="footer-content">
        <div class="footer-section" v-for="(section, index) in footerSections" :key="index">
          <h3>{{ section.title }}</h3>
          <ul class="footer-links">
            <li v-for="(link, linkIndex) in section.links" :key="linkIndex">
              <a :href="link.url">{{ link.text }}</a>
            </li>
          </ul>
        </div>
      </div>
      <div class="copyright">
        <p>&copy; 2023 移民健康导航系统. 保留所有权利。</p>
      </div>
    </footer>
  </template>
  
  <script>
  export default {
    name: 'Footer',
    data() {
      return {
        footerSections: [
          {
            title: '健康资源中心',
            links: [
              { text: '传染病预防', url: '#' },
              { text: '慢性病管理', url: '#' },
              { text: '心理健康支持', url: '#' },
              { text: '儿童健康指南', url: '#' }
            ]
          },
          {
            title: '医疗服务',
            links: [
              { text: '远程医疗预约', url: '#' },
              { text: '医保申请支持', url: '#' },
              { text: '紧急医疗导航', url: '#' },
              { text: '药房定位服务', url: '#' }
            ]
          },
          {
            title: '社区互动',
            links: [
              { text: '互助论坛', url: '#' },
              { text: '活动日历', url: '#' },
              { text: '志愿者招募', url: '#' },
              { text: '文化融合活动', url: '#' }
            ]
          },
          {
            title: '个人账户',
            links: [
              { text: '健康档案', url: '#' },
              { text: '定制提醒', url: '#' },
              { text: '偏好设置', url: '#' },
              { text: '语言选择', url: '#' }
            ]
          }
        ]
      }
    }
  }
  </script>
  
  <style scoped>
  .footer {
    background-color: var(--text-color);
    color: var(--white);
    padding: 40px 5% 20px;
  }
  
  .footer-content {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 30px;
    max-width: 1200px;
    margin: 0 auto;
  }
  
  .footer-section h3 {
    margin-bottom: 20px;
    font-size: 1.2rem;
    position: relative;
    padding-bottom: 10px;
  }
  
  .footer-section h3:after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 50px;
    height: 2px;
    background: var(--primary-color);
  }
  
  .footer-links {
    list-style-type: none;
  }
  
  .footer-links li {
    margin-bottom: 12px;
  }
  
  .footer-links a {
    color: #c0c0c0;
    text-decoration: none;
    transition: color 0.3s ease;
  }
  
  .footer-links a:hover {
    color: var(--primary-color);
  }
  
  .copyright {
    text-align: center;
    padding-top: 30px;
    margin-top: 30px;
    border-top: 1px solid rgba(255, 255, 255, 0.1);
    color: #9e9e9e;
    font-size: 0.9rem;
  }
  </style>