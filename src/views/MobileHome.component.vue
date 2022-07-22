<template>
  <div id="content">
    <h1>Looks like you are on Mobile</h1>
    <p>
      We currently don't support Mobile devices :( <br />
      You can copy the Link to this site below to send it to a Pc
    </p>
    <button v-copy="url">
      Copy URL
      <i class="fa-solid fa-clipboard space"></i>
    </button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      url: 'https://joelstorr.github.io/shape-css-gp/',
    };
  },
};
</script>

<style scoped>
#content {
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  padding: 20px 40px;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
h1 {
  color: white;
  font-size: 3rem;
  margin-bottom: 40px;
}
p {
  color: white;
  font-size: 1.5rem;
  margin-bottom: 40px;
}
button {
  height: 50px;
  background: none;
  border: solid 2px white;
  border-radius: 2px;
  font-weight: bold;
  color: white;
}

button:active {
  background: white;
  color: #14161f;
}

.space {
  margin-left: 10px;
}
</style>
