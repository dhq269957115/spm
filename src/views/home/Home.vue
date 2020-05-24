<template>
  <div id="home">
    <nav-bar class="home-nav">
      <div slot="center" v-html="msg"></div>
    </nav-bar>
    <home-Swiper></home-Swiper>
  </div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar";
import HomeSwiper from "./childrenComponents/HomeSwiper";
import { getHomeMultidata } from "network/home";
export default {
  name: "home",
  components: {
    NavBar,
    HomeSwiper
  },
  data() {
    return {
      result: null,
      msg: "购物车"
    };
  },
  created() {
    getHomeMultidata().then(res => {
      this.result = res;
      console.log(this.result);
    });
  }
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
