<template>
  <div id="app">
    <h1>{{ count }}</h1>
    <button @click="increment">+1</button>
    <button @click="decrement">-1</button>
  </div>
</template>


<script>
import { mapState,mapMutations } from "vuex";
export default {
  name: "App",
  data() {
    return {};
  },
  components: {},
  computed: mapState({
    count: "count",
  }),
  methods: {
    increment: function () {
      this.commit("increment");
    },
    decrement: function () {
      this.commit("decrement");
    },
    ...mapMutations(["increment","decrement"])
  },
};
</script>