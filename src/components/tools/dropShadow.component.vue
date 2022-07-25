<template>
  <div>
    <h1>Box Shadow</h1>

    <section class="toolwrapper">
      <section class="inputs">
        <label for="shift-right">
          Shift Right: {{ shiftRight }} px
          <input
            type="range"
            id="shift-right"
            min="-50"
            max="50"
            v-model="shiftRight"
          />
        </label>
        <label for="shift-left">
          Shift Left: {{ shiftLeft }} px
          <input
            type="range"
            id="shift-left"
            min="-50"
            max="50"
            v-model="shiftLeft"
          />
        </label>
        <label for="spread">
          Spreade: {{ spread }} px
          <input type="range" id="spread" min="-50" max="50" v-model="spread" />
        </label>
        <label for="blur">
          Blur: {{ blur }} px
          <input type="range" id="blur" min="-50" max="50" v-model="blur" />
        </label>
        <label for="opacity">
          Opacity: {{ opacity }}
          <input
            type="range"
            id="opacity"
            min="0"
            max="1"
            step="0.01"
            v-model="opacity"
          />
        </label>
        <label for="inset">
          Inset: {{ inset }}
          <input type="checkbox" id="inset" v-model="inset" />
        </label>
      </section>

      <section class="dispaly">
        <div class="frame">
          <div class="shape" :style="shadowSetter"></div>
        </div>
      </section>

      <Base-copy :copySetter="copySetter">
        <p v-if="inset">
          box-shadow: inset
          <span class="yellow"
            >{{ shiftRight }}px {{ shiftLeft }}px {{ spread }}px {{ blur }}px
            rgba({{ color }} {{ opacity }})</span
          >;
        </p>
        <p v-else>
          box-shadow:
          <span class="yellow"
            >{{ shiftRight }}px {{ shiftLeft }}px {{ spread }}px {{ blur }}px
            rgba({{ color }} {{ opacity }})</span
          >;
        </p>
      </Base-copy>
    </section>
  </div>
</template>

<script>
import BaseCopy from '../Base/BaseCopy.component.vue';

export default {
  components: {
    'Base-copy': BaseCopy,
  },
  data() {
    return {
      shiftRight: 0,
      shiftLeft: 0,
      spread: 0,
      blur: 0,
      opacity: 1,
      inset: false,
      color: '255, 255, 255,',
    };
  },

  computed: {
    shadowSetter() {
      if (this.inset) {
        return {
          'box-shadow': `inset ${this.shiftRight}px ${this.shiftLeft}px ${this.blur}px ${this.spread}px rgba(${this.color} ${this.opacity})`,
        };
      }
      return {
        'box-shadow': `${this.shiftRight}px ${this.shiftLeft}px ${this.blur}px ${this.spread}px rgba(${this.color} ${this.opacity})`,
      };
    },
    copySetter() {
      if (this.inset) {
        console.log('set Inset');
        return `box-shadow: inset ${this.shiftRight}px ${this.shiftLeft}px ${this.blur}px ${this.spread}px rgba(${this.color} ${this.opacity});`;
      }
      return `box-shadow: ${this.shiftRight}px ${this.shiftLeft}px ${this.blur}px ${this.spread}px rgba(${this.color} ${this.opacity});`;
    },
  },
};
</script>

<style lang="scss" scoped>
h1 {
  color: white;
}
button {
  z-index: 10;
}

.toolwrapper {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  overflow: hidden;

  min-width: 50vw;
  max-width: 60vw;
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-direction: row;
  flex-wrap: wrap;
  border: 2px solid white;
  padding: 50px 0;
  border-radius: 5px;
}
.inputs {
  flex: 0;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  border: 1px solid white;
  padding: 20px;
  min-width: 200px;
  height: 300px;

  label {
    color: white;
    display: flex;
    flex-direction: column;
    max-width: 25vw;
    text-align: left;
  }
  input[type='checkbox'] {
    cursor: pointer;
    width: 18px;
    height: 18px;
    border-radius: 5px;
  }

  input[type='checkbox']:checked {
    cursor: pointer;
  }
}

.frame {
  flex: 0;
  width: 300px;
  height: 300px;
  border: solid 1px white;
  display: flex;
  align-items: center;
  justify-content: center;

  .shape {
    width: 250px;
    height: 250px;
    background-color: #4a4e69;
    z-index: 0;
  }
}
p {
  font-family: monospace;
  font-weight: bold;
  font-size: 1rem;
  color: white;
  .yellow {
    color: #d19966;
  }
}
</style>
