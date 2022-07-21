<template>
  <div class="full-view">
    <h1>Main Menu (Work in Progress)</h1>

    <div class="menue-container">
      <base-card-component
        v-for="example in examples"
        :setIcon="example.icon"
        :name="example.name"
        :desc="example.desc"
        :toolPath="example.toolPath"
        :key="example.toolPath"
        :setPadding="['10px', '5px']"
      />
    </div>
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
          icon: 'fa-eye-dropper',
          name: 'Color Picker',
          desc: 'Find the Perfect Color for your project',
          toolPath: '/color-picker',
        },
        {
          icon: 'fa-eye-dropper',
          name: '3D Transform',
          desc: 'Find the Perfect Color for your project',
          toolPath: '/3d-transform',
        },
        {
          icon: 'fa-eye-dropper',
          name: 'Drop Shadow',
          desc: 'Find the Perfect Color for your project',
          toolPath: '/drop-sahdow',
        },
        {
          icon: 'fa-eye-dropper',
          name: 'Color Picker',
          desc: 'Find the Perfect Color for your project',
          toolPath: '/color-picker',
        },
        {
          icon: 'fa-eye-dropper',
          name: '3D Transform',
          desc: 'Find the Perfect Color for your project',
          toolPath: '/3d-transform',
        },
        {
          icon: 'fa-eye-dropper',
          name: 'Drop Shadow',
          desc: 'Find the Perfect Color for your project',
          toolPath: '/drop-sahdow',
        },
        {
          icon: 'fa-eye-dropper',
          name: 'Color Picker',
          desc: 'Find the Perfect Color for your project',
          toolPath: '/color-picker',
        },
        {
          icon: 'fa-eye-dropper',
          name: '3D Transform',
          desc: 'Find the Perfect Color for your project',
          toolPath: '/3d-transform',
        },
        {
          icon: 'fa-eye-dropper',
          name: 'Drop Shadow',
          desc: 'Find the Perfect Color for your project',
          toolPath: '/drop-sahdow',
        },
        {
          icon: 'fa-eye-dropper',
          name: 'Color Picker',
          desc: 'Find the Perfect Color for your project',
          toolPath: '/color-picker',
        },
        {
          icon: 'fa-eye-dropper',
          name: '3D Transform',
          desc: 'Find the Perfect Color for your project',
          toolPath: '/3d-transform',
        },
        {
          icon: 'fa-eye-dropper',
          name: 'Drop Shadow',
          desc: 'Find the Perfect Color for your project',
          toolPath: '/drop-sahdow',
        },
      ],
    };
  },
};
</script>

<style>
.full-view {
  width: 100vw;
  height: 100vh;
  background-color: #14151f;
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
</style>
