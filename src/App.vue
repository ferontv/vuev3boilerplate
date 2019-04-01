<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <h1>{{msg}}</h1>
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";

export default {
  name: "app",
  components: {
    HelloWorld
  },
  data() {
    return {
      msg: "Hola Vue"
    };
  }
};
</script>

<style lang="scss">
</style>
