<template>
  <div id="app">
    <input v-model="name">
    <input v-model="lastName">
    <p>{{fullName }}</p>
    <div class="field">
      <label class="label">Fecha de nacimiento</label>
      <div class="control">
        <input class="input" v-model="birthday" type="date">
      </div>
    </div>
    <p>{{age}}</p>
  </div>
</template>

<script>
export default {
  name: "app",
  data() {
    return {
      name: "",
      lastName: "",
      birthday: ""
    };
  },
  computed: {
    fullName() {
      return `${this.name} ${this.lastName}`;
    },
    age() {
      return (
        new Date(new Date() - new Date(this.birthday)).getUTCFullYear() - 1970
      );
    }
  },
  watch: {
    name(newVal, oldVal) {
      console.log(newVal, oldVal);
    }
  }
};
</script>

<style lang="scss">
@import "./scss/main.scss";
</style>