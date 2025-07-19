<template>
  <div class="app">
    <Header />
    <Banner />
    <main class="container">
      <QuickAccess />
      <NewsSection />
      <ResourceSection />
    </main>
    <Footer />
  </div>
</template>

<script>
import Header from './components/Header.vue'
import Banner from './components/Banner.vue'
import QuickAccess from './components/QuickAccess.vue'
import NewsSection from './components/NewsSection.vue'
import ResourceSection from './components/ResourceSection.vue'
import Footer from './components/Footer.vue'

export default {
  name: 'App',
  components: {
    Header,
    Banner,
    QuickAccess,
    NewsSection,
    ResourceSection,
    Footer
  }
}
</script>

<style>
@import url('./assets/styles.css');
</style>