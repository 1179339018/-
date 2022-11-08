<!--  -->
<template>
  <div>
    <h1>路由</h1>
    <button @click="gotohome()">去首页</button>
    <button @click="gotobasis()">去vue基础</button>
    <button @click="go()">前进</button>
    <button @click="back()">后退</button>
    <h1>{{count}}</h1>
  </div>
</template>

<script>
export default {
  name: "router",
  data() {
    return {
      gotohome() {
        this.$router.push("/");
      },
      gotobasis() {
        this.$router.push("/basis");
      },
      go() {
        this.$router.go(1);
      },
      back() {
        this.$router.go(-1);
      },
    };
  },

  components: {},

  computed: {
    count: function() {
            return this.$store.state.count
        }
  },

  methods: {},
};
</script>
<style lang='scss' scoped>
</style>