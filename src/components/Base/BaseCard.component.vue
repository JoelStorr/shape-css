<template>
  <div class="base-card" :style="cssVars">
    <i class="fa-solid" :class="{ icon }"></i>
    <h3>{{ name }}</h3>
    <p>{{ desc }}</p>
    <router-link :to="toolPath">
      {{ name }}
      <i class="fa-solid fa-chevron-right"></i>
    </router-link>
  </div>
</template>

<script>
export default {
  props: {
    icon: String,
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

<style lang="scss">
.base-card {
  width: 15vw;
  height: 25vh;
  background-color: white;
  border-radius: 5px;
  box-shadow: 5px 5px 3px 2px rgb(204, 204, 204);
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  margin: var(--padding-tb) var(--padding-lr);
}
</style>
