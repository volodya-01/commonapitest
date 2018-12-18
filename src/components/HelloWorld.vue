<template>
  <div class="hello">
   
    <postapi></postapi>
  </div>
</template>

<script>
import postapi from "@/components/postapi";
import Vuex from "vuex";
export default {
  name: "HelloWorld",
  components: {
    postapi
  },
  created() {
    this.$axios("https://www.wwtliu.com/sxtstu/blueberrypai/getIndexBanner.php")
      .then(res => {
        console.log(res.data);
        /*   this.$router.push({ name: "sucess" }); */
      })
      .catch(error => {
        console.log(error);
      });
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
