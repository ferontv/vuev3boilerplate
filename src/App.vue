<template>
  <div id="app">
    <section class="section">
      <nav class="nav has-shadow">
        <div class="container">
          <div class="field has-addons">
            <div class="control is-expanded">
              <input
                class="input is-large"
                type="text"
                placeholder="¿Qué canción estás buscando"
                v-model="searchQuery"
              >
            </div>
            <div class="control">
              <a class="button is-info is-large" @click="search">Buscar</a>
            </div>
            <div class="control">
              <a class="button is-danger is-large">&times;</a>
            </div>
          </div>
          <p class="help is-info has-text-right">
            <small>{{ searchMessage }}</small>
          </p>
        </div>
      </nav>
      <div class="container results">
        <div class="columns">
          <div class="column">
            <ul :key="t.name" v-for="t in tracks">
              <li class="row">{{ t.name }} - {{ t.artist }}</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
const tracks = [
  { name: "Muchacha", artist: "Luis Alberto Spinetta" },
  { name: "Hoy aca en el baile", artist: "El pepo" },
  { name: "I was made fro loving you", artist: "Kiss" }
];

export default {
  name: "app",
  data() {
    return {
      searchQuery: "",
      tracks: []
    };
  },
  computed: {
    searchMessage() {
      return `Encontrados: ${this.tracks.length}`;
    }
  },
  methods: {
    search() {
      // console.log(this.searchQuery);
      this.tracks = tracks;
    }
  }
};
</script>

<style lang="scss">
@import "./scss/main.scss";

.results {
  margin-top: 50px;
}
</style>