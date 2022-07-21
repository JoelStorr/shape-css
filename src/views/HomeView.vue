<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png" /> -->
    <matter-js-vue />
  </div>
</template>

<script>
// @ is an alias to /src

import matterJsVue from '@/components/HomeComp/matterJs.vue';

export default {
  name: 'HomeView',
  components: {
    matterJsVue,
  },

  methods: {},
};
</script>

<style>
.home {
  background-color: #14161f;
}
</style>
