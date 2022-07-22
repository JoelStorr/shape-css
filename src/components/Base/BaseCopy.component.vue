<template>
  <section class="code-dispaly" v-copy="copySetter">
    <slot></slot>
    <p class="helper">Click Here to Copy</p>
    <div class="overlay">Copy <i class="fa-solid fa-copy"></i></div>
  </section>
</template>

<script>
export default {
  props: ['copySetter'],
};
</script>

<style lang="scss" scoped>
.code-dispaly {
  position: relative;
  flex: 2;
  margin-top: 50px;
  min-width: 60%;
  max-width: 90%;
  height: 80px;
  background-color: rgba(0, 0, 0, 0.55);
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  .helper {
    color: rgb(187, 187, 187);
    font-weight: 200;
    font-size: 0.8rem;
    padding-top: 10px;
  }
  .overlay {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    width: 100%;
    height: 100%;
    background-color: #4a4e69;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.5rem;
    font-weight: bold;
    color: white;
    opacity: 0;
    transition: opacity 0.5s ease-in-out;
    user-select: none;

    i {
      padding-left: 10px;
    }
    &:hover {
      opacity: 1;
    }
    &:active {
      opacity: 1;
      background-color: #2f3143;
      color: #b8b8b8;
    }
  }
}
</style>
