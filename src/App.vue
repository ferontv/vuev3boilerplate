<template>
  <div id="app">
    <h1>{{ msg }}</h1>
    <p>{{ 1 + 1 }}</p>
    <p>{{ 'Hola' + 'Mundo' }}</p>
    <p>{{ person.name }}</p>
    <p>{{ person.name.toUpperCase() }}</p>
    <p>{{ JSON.stringify(person) }}</p>
    <p>{{ true ? 'true' : 'false' }}</p>
  </div>
</template>

<script>
export default {
  name: "app",
  data() {
    return {
      msg: "Hola Vue!",

      person: {
        name: "Juan"
      }
    };
  }
};
</script>

<style lang="scss">
@import "./scss/main.scss";
</style>