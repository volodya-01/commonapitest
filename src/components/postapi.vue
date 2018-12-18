<template>
  <div class="postapi">

    <h2>postapi</h2>
  </div>
</template>

<script>
import qs from "qs";
export default {
  name: "postapi",
  created() {
    this.$axios
      .post(
        "http://iwen.wiki/sxtstu/blueberrypai/login.php",
        qs.stringify({
          params: {
            user_id: "iwen@qq.com",
            password: "iwen123",
            verification_code: "crfvw"
          }
        })
      )
      .then(res => {
        console.log(res.data);
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
