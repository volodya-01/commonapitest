<template>
  <div class="hello">
   
    this is sucess
  </div>
</template>

<script>
export default {
  name: "sucess",

  created() {
    this.$store.dispatch("getMineBaseApi");
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.hello {
  font-size: 90px;
  font-family: "行楷";
  font-weight: 900;
  color: balack;
}
</style>
