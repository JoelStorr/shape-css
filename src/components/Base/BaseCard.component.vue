<template>
  <div class="base-card" :style="cssVars">
    <i :class="['fa-solid', 'main-icon', setIcon]"></i>
    <h2>{{ name }}</h2>
    <p>{{ desc }}</p>
    <router-link :to="toolPath" class="outline-btn">
      {{ name }}
      <i class="fa-solid fa-chevron-right"></i>
    </router-link>
  </div>
</template>

<script>
export default {
  props: {
    setIcon: String,
    name: String,
    desc: String,
    toolPath: String,
    setPadding: Array,
  },

  computed: {
    cssVars() {
      return {
        '--padding-tb': this.setPadding[0],
        '--padding-lr': this.setPadding[1],
      };
    },
  },
};
</script>

<style lang="scss" scoped>
.base-card {
  width: 25vw;
  height: 35vh;
  border: 1px solid white;
  background-color: #ffffff06;
  border-radius: 5px;
  box-shadow: 5px 5px 2px 1px rgba(55, 55, 56, 0.515);
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  margin: var(--padding-tb) var(--padding-lr);
  padding: 25px;
}

h2,
p {
  color: #f8f9ff;
}

.main-icon {
  background-color: #f8f9ff;
  width: 80px;
  height: 80px;
  text-align: center;
  vertical-align: middle;
  line-height: 80px;
  border-radius: 50px;
  font-size: 2rem;
  color: #14151f;
}
.outline-btn {
  border: 1px solid #f8f9ff;
  margin: 0 20px;
  padding: 5px 0;
  text-decoration: none;
  color: #f8f9ff;
  border-radius: 2px;
  max-width: 15vw;
  min-width: 10vw;
}
</style>
