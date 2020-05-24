<template>
  <nav-bar class="category-nav">
    <div slot="center" v-html="msg"></div>
  </nav-bar>
</template>

<script>
import NavBar from "components/common/navbar/NavBar";

export default {
  name: "category",
  data() {
    return {
      msg: "分类"
    };
  },
  components: {
    NavBar
  }
};
</script>

<style>
</style>