<template>
  <div class="contentWrapper">
    <nav>
      <router-link to="/main-menu">
        <i class="fa-solid fa-arrow-left"></i
      ></router-link>
    </nav>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'toolsView',
};
</script>

<style scoped>
.contentWrapper {
  min-width: 100vw;
  min-height: 100vh;
  overflow: hidden;
  background-color: #14151f;
}

nav {
  width: 100vw;
}

i {
  position: absolute;
  top: 60px;
  left: 30px;
  width: 40px;
  height: 40px;
  font-size: 1.5rem;
  color: white;
  text-align: center;
  /* vertical-align: middle; */
  /*  line-height: 55px; */
  border-radius: 30px;
  transition: all 0.5s ease-in-out;
  border: 2px solid white;
  display: flex;
  justify-content: center;
  align-items: center;
}

i:hover {
  background-color: white;
  color: #14151f;
}
</style>
