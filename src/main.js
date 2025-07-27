import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import { auth } from './firebase';
import { onAuthStateChanged } from 'firebase/auth';
import { mapMutations } from 'vuex';

// 监听认证状态变化
onAuthStateChanged(auth, (user) => {
  if (user) {
    store.commit('setUser', user);
  } else {
    store.commit('setUser', null);
  }
});

createApp(App).use(router).use(store).mount('#app');