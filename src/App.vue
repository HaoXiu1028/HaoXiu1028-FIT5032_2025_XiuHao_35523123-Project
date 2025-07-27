<template>
  <div class="app">
    <Header />

    <button 
      @click="toggleLogin" 
      style="position: absolute; top: 20px; right: 20px; z-index: 200;
      padding: 10px 20px;      /* 增加内边距 */
      font-size: 16px;         /* 增大字体 */
      min-width: 10px;
      border-radius: 8px"
    >
      {{ isLogin ? 'Return' : 'Login' }}
    </button>

    <Banner />
    <main class="container">
      <!-- <router-view></router-view> -->
      <Login v-if="isLogin" />
      <div v-else style="width: 100%;">
        <QuickAccess />
        <NewsSection />
        <ResourceSection />
        
      </div>
    </main>
    <br>
    <br>
    <br>
    
    <router-view></router-view>

    <!-- <Footer /> -->
  </div>
</template>

<script>
import Login from './views/Login.vue'
import Header from './components/Header.vue'
import Banner from './components/Banner.vue'
import QuickAccess from './components/QuickAccess.vue'
import NewsSection from './components/NewsSection.vue'
import ResourceSection from './components/ResourceSection.vue'
import Footer from './components/Footer.vue'
import RatingPage from './views/RatingPage.vue'



export default {
  name: 'App',
  components: {
    Header,
    Banner,
    QuickAccess,
    NewsSection,
    ResourceSection,
    Footer,
    Login,
    RatingPage
  },
  data() {
    return {
      isLogin: false
    }
  },
  methods: {
    toggleLogin() {
      this.isLogin = !this.isLogin
    }
  }
}
</script>

<style>
@import url('./assets/styles.css');
</style>