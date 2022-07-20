<template>
  <div class="content">
    <div class="testLabel">Testing</div>
    <div id="drawhere"></div>
  </div>
</template>

<script>
// eslint-disable-next-line object-curly-newline
import { Engine, Render, Runner, Bodies, Composite } from 'matter-js';

export default {
  mounted() {
    // module aliases

    // create an engine
    const engine = Engine.create();

    // create a renderer
    const render = Render.create({
      element: document.querySelector('#drawhere'),
      engine,
    });

    // create two boxes and a ground
    const boxA = Bodies.rectangle(400, 200, 80, 80);
    const boxB = Bodies.rectangle(450, 50, 80, 80);
    const ground = Bodies.rectangle(400, 610, 810, 60, { isStatic: true });

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

<style></style>
