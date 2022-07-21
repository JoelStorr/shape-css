<template>
  <div id="content">
    <button class="startbtn" @click="changeToMenue">Start</button>
    <h1 class="headLabel">Shape <br />CSS</h1>

    <Transition>
      <div class="blocker" if="!show"></div>
    </Transition>
    <canvas id="canvas"></canvas>
  </div>
</template>

<script>
// eslint-disable-next-line object-curly-newline
import { Engine, Render, Runner, Bodies, Composite } from 'matter-js';

export default {
  data() {
    return {
      runner: null,
      engine: null,
      render: null,
      show: true,
    };
  },
  mounted() {
    // dimentions
    const height = window.innerHeight;
    const width = window.innerWidth;

    // relational Dimentions
    const pheight = height / 100;
    const pwidth = width / 100;

    // Build Canvas
    const canvas = document.getElementById('canvas');

    canvas.width = width;
    canvas.height = height;

    // create an engine
    const engine = Engine.create({
      render: {
        element: document.body,
        canvas,
        options: {
          width,
          height,
        },
      },
    });

    this.engine = engine;

    // create a renderer
    const render = Render.create({
      element: document.body,
      canvas,
      options: {
        width,
        height,
      },
      engine,
    });

    this.render = render;

    const options = {
      friction: 0.7,
    };

    // create two boxes and a ground
    for (let i = 0; i <= 100; i += 1) {
      let bodyrand;
      const randVal = Math.floor(Math.random() * 3);
      if (randVal === 0) {
        // Boxes
        bodyrand = Bodies.rectangle(
          Math.random() * width,
          -20,
          pwidth * 4,
          pwidth * 4,
          options,
        );
      } else if (randVal === 1) {
        // Circles
        bodyrand = Bodies.circle(
          Math.random() * width,
          -20,
          pwidth * 3,
          pwidth * 3,
          50,
          options,
        );
      } else {
        // Polygons
        bodyrand = Bodies.polygon(
          Math.random() * width,
          -20,
          3,
          pwidth * 3,
          options,
        );
      }

      Composite.add(engine.world, [bodyrand]);
    }

    // Main Static Circle
    const boxStatic = Bodies.circle(
      width / 2,
      height / 2,
      pheight * 40,
      {
        isStatic: true,
      },
      100,
    );
    const ground = Bodies.rectangle(width / 2, height, width, 1, {
      isStatic: true,
    });

    // add all of the bodies to the world
    Composite.add(engine.world, [boxStatic, ground]);

    // run the renderer
    Render.run(render);

    // create runner
    const runner = Runner.create();
    this.runner = runner;

    // run the engine
    Runner.run(runner, engine);
  },

  methods: {
    changeToMenue() {
      this.show = false;
      this.$router.push('/main-menue');
      // Destroy Render Engine on Route Change
      Render.stop(this.render);
      this.render.canvas.remove();
      Engine.clear(this.engine);
      this.render.canvas = null;
      this.render.context = null;
      this.render.textures = {};
    },
  },
};
</script>

<style scoped>
#content {
  background-color: #14161f;
  width: 100vw;
  height: 100vh;
}
#canvas {
  position: absolute;
  opacity: 1;
  top: 0;
  left: 0;
}

.headLabel {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  color: white;
  font-weight: 700;
  font-size: 20rem;
  line-height: 1.4;
  z-index: 1;
  user-select: none;
}
.startbtn {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 150px;
  height: 50px;
  background: none;
  border: 1px solid white;
  border-radius: 5px;
  color: white;
  font-weight: bold;
  font-size: 1.5rem;

  z-index: 10;
}

.blocker {
  width: 100vw;
  height: 100vh;
  background-color: #14161f;
  opacity: 1;
}

.v-enter-active,
.v-leave-active {
  transition: opacity 1s ease;
  opacity: 1;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}

@media screen and(max-width: 900) {
  .headLabel {
    font-size: 1rem;
    min-height: 100vh;
  }
  #content {
    height: max-content;
  }
}
</style>
