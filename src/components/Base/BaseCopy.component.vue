<template>
  <section class="code-dispaly" v-copy="valueWatcher">
    <slot></slot>
    <div class="overlay">Copy</div>
  </section>
</template>

<script>
export default {
  props: ['copySetter'],
  computed: {
    valueWatcher() {
      return this.copySetter;
    },
  },
};
</script>

<style lang="scss" scoped>
.code-dispaly {
  position: relative;
  flex: 2;
  margin-top: 50px;
  min-width: 60%;
  max-width: 90%;
  height: 50px;
  background-color: rgba(0, 0, 0, 0.55);
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: center;

  .overlay {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    width: 100%;
    height: 100%;
    background-color: #d19966;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.5rem;
    font-weight: bold;
    color: white;
    opacity: 0;
    transition: opacity 0.5s ease-in-out;
    user-select: none;

    &:hover {
      opacity: 1;
    }
  }
}
</style>
