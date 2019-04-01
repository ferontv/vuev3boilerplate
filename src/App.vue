<template>
  <div id="app">
    <!-- ocultado -->
    <p v-show="showValue">{{value}}</p>
    <!-- eliminado del dom -->
    <p v-if="showValue">{{value}}</p>
    <p v-else-if="false">{{ 'algo mas' }}</p>
    <p v-else>{{ 'lo ultimo' }}</p>
    <ul>
      <li :key="i" v-for="i in items">{{ i }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "app",
  data() {
    return {
      msg: "Hola Vue!",

      showValue: false,
      value: "Algo",

      items: [1, 2, 3, 4, 5]
    };
  }
};
</script>

<style lang="scss">
@import "./scss/main.scss";
</style>