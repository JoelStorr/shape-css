<template>
  <div class="full-view">
    <h1>Find the right Tool</h1>

    <div class="menue-container">
      <base-card-component
        v-for="example in examples"
        :setIcon="example.icon"
        :name="example.name"
        :desc="example.desc"
        :toolPath="example.toolPath"
        :key="example.toolPath"
        :setPadding="['50px', '10px']"
      />
    </div>
    <h2>More Tools are on the way ...</h2>
  </div>
</template>

<script>
import BaseCardComponent from '@/components/Base/BaseCard.component.vue';

export default {
  components: { BaseCardComponent },

  data() {
    return {
      examples: [
        {
          icon: ' fa-solid fa-cube',
          name: '3D Transform',
          desc: 'An easy way to provide 3D transforms to your elements.',
          toolPath: '/tools/threed-transform',
        },
        {
          icon: 'fa-solid fa-clone',
          name: 'Box Shadow',
          desc: 'Easily apply shadows to your elemnts',
          toolPath: '/tools/drop-shadow',
        },
      ],
    };
  },
};
</script>

<style scoped>
.full-view {
  width: 100vw;
  height: 100vh;
  background-color: #14151f;
  overflow-y: scroll;
  overflow-x: hidden;
}

.menue-container {
  margin-top: 10vh;
  display: flex;
  justify-content: space-around;
  flex-direction: row;
  flex-wrap: wrap;
}
h1 {
  color: white;
  padding-top: 10vh;
}
h2 {
  color: white;
  margin-top: 50px;
}
</style>
