<script>
import { RouterView } from 'vue-router';
import AppHeader from './components/AppHeader.vue';
import AppFooter from './components/AppFooter.vue'
export default {
  name: 'App',
  data() {
    return {
    }
  },
  components: {
    RouterView,
    AppHeader,
    AppFooter,
  },
  methods: {

  }

}
</script>

<template>
  <AppHeader></AppHeader>
  <main>
    <router-view></router-view>
  </main>

  <AppFooter></AppFooter>
</template>

<style></style>
