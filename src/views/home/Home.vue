<template>
  <div id="home">
    <nav-bar class="home-nav">
      <div slot="center" v-html="msg"></div>
    </nav-bar>
    <el-carousel indicator-position="outside" height="150px">
      <el-carousel-item v-for="(item, key, i) in result" :key="key">
        <div>
          <img :src="result[key].g_img" alt />
        </div>
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar";
import { getHomeMultidata } from "network/home";
export default {
  name: "home",
  components: {
    NavBar,
  },
  data() {
    return {
      result: null,
      msg: "购物车",
    };
  },
  created() {
    getHomeMultidata().then((res) => {
      this.result = res;
      console.log(this.result);
    });
  },
};
</script>

<style>
.home-nav {
  background-color: pink;
  color: #fff;
}
img {
  width: 100%;
}
</style>
