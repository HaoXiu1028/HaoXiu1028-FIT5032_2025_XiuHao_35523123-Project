<template>
    <div class="news-section">
      <div class="section-title">
        <i class="fas fa-newspaper"></i>
        <h2>新闻公告</h2>
      </div>
      <NewsCard v-for="(news, index) in newsList" :key="index" :news="news" />
    </div>
  </template>
  
  <script>
  import NewsCard from './NewsCard.vue'
  
  export default {
    name: 'NewsSection',
    components: {
      NewsCard
    },
    data() {
      return {
        newsList: [
          {
            date: '2023年10月15日',
            title: '移民健康政策重大更新',
            content: '最新发布的健康政策简化了移民医疗注册流程，扩展了医保覆盖范围，请尽快查看您是否符合新政策条件。',
            link: '#'
          },
          {
            date: '2023年10月10日',
            title: '秋季流感疫苗接种计划开始',
            content: '本地区免费流感疫苗接种已经开始，请查询附近接种点，保护您和家人的健康。',
            link: '#'
          }
        ]
      }
    }
  }
  </script>
  
  <style scoped>
  .news-section {
    margin-bottom: 40px;
  }
  </style>