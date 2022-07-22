<template>
  <div>
    <h1>3D Transform Component</h1>
    <section class="toolwrapper">
      <section class="inputs">
        <label for="perspective">
          Perspective: {{ perspective }} px
          <input
            type="range"
            id="perspective"
            min="0"
            max="999"
            v-model="perspective"
          />
        </label>
        <label for="rotateX">
          Rotate X: {{ rotateX }} deg
          <input
            type="range"
            id="rotateX"
            min="-180"
            max="180"
            v-model="rotateX"
          />
        </label>
        <label for="rotateY">
          Rotate Y: {{ rotateY }} deg
          <input
            type="range"
            id="rotateY"
            min="-180"
            max="180"
            v-model="rotateY"
          />
        </label>
        <label for="rotateZ">
          Rotate Z: {{ rotateZ }} deg
          <input
            type="range"
            id="rotateZ"
            min="-180"
            max="180"
            v-model="rotateZ"
          />
        </label>
      </section>

      <section class="dispaly">
        <div class="frame">
          <div class="shape" :style="perspectiveSetter"></div>
        </div>
      </section>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      perspective: 0,
      rotateX: 0,
      rotateY: 0,
      rotateZ: 0,
    };
  },
  computed: {
    perspectiveSetter() {
      return {
        transform: `perspective(${this.perspective}px) rotateX(${this.rotateX}deg) rotateY(${this.rotateY}deg) rotateZ(${this.rotateZ}deg)`,
      };
    },
  },
};
</script>

<style lang="scss" scoped>
h1 {
  color: white;
}
.toolwrapper {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  min-width: 50vw;
  max-width: 60vw;
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-direction: row;
  border: 2px solid white;
  padding: 50px 0;
  border-radius: 5px;
}
.inputs {
  display: flex;
  flex-direction: column;

  label {
    color: white;
    display: flex;
    flex-direction: column;
    max-width: 15vw;
  }
}

.frame {
  width: 300px;
  height: 300px;
  border: solid 1px white;
  display: flex;
  align-items: center;
  justify-content: center;

  .shape {
    width: 250px;
    height: 250px;
    background-color: red;
  }
}
</style>
