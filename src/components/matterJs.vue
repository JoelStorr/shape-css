<template>
  <div class="content">
    <div class="testLabel">Testing</div>
    <canvas id="canvas"></canvas>
  </div>
</template>

<script>
// eslint-disable-next-line object-curly-newline
import { Engine, Render, Runner, Bodies, Composite } from 'matter-js';

export default {
  data() {
    return {};
  },
  mounted() {
    // dimentions
    const height = window.innerHeight;
    const width = window.innerWidth;

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

    // create two boxes and a ground
    const boxA = Bodies.rectangle(400, 200, 80, 80);
    const boxB = Bodies.rectangle(450, 50, 80, 80);
    const ground = Bodies.rectangle(width / 2, height, width, 1, {
      isStatic: true,
    });

    // add all of the bodies to the world
    Composite.add(engine.world, [boxA, boxB, ground]);

    // run the renderer
    Render.run(render);

    // create runner
    const runner = Runner.create();

    // run the engine
    Runner.run(runner, engine);
  },
};
</script>

<style>
#canvas {
  position: absolute;
  z-index: -2;
  top: 0;
  left: 0;
}
</style>
