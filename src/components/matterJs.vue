<template>
  <div class="content">
    <div class="testLabel">Shape CSS</div>
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

    const options = {
      friction: 0.8,
    };

    // create two boxes and a ground
    for (let i = 0; i <= 100; i += 1) {
      let bodyrand;
      const randVal = Math.floor(Math.random() * 3);
      if (randVal === 0) {
        bodyrand = Bodies.rectangle(
          Math.random() * width,
          0,
          150,
          150,
          options,
        );
      } else if (randVal === 1) {
        bodyrand = Bodies.circle(Math.random() * width, 0, 80, 80, 50, options);
      } else {
        bodyrand = Bodies.polygon(Math.random() * width, 0, 3, 100, options);
      }

      Composite.add(engine.world, [bodyrand]);
    }

    const boxA = Bodies.rectangle(400, 200, 80, 80);
    const boxB = Bodies.rectangle(450, 50, 80, 80);
    const boxStatic = Bodies.circle(
      width / 2,
      height / 2,
      400,
      {
        isStatic: true,
      },
      100,
    );
    const ground = Bodies.rectangle(width / 2, height, width, 1, {
      isStatic: true,
    });

    // add all of the bodies to the world
    Composite.add(engine.world, [boxA, boxB, boxStatic, ground]);

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
.testLabel {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: white;
  font-weight: 700;
  font-size: 350px;
}
</style>
