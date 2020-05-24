<template>
  <div id="app">
    <router-view></router-view>
    <main-tab-bar></main-tab-bar>
  </div>
</template>

<script>
import MainTabBar from "components/content/mainTabbar/MainTabBar";
import { getHomeMultidata } from "network/home";

export default {
  name: "App",
  components: {
    MainTabBar,
  },
  data() {
    return {
      images: null,
      msg: 123456,
      musics: [
        { id: 1, src: "MUSIC/西川貴教 - HOT LIMIT.mp3" },
        { id: 2, src: "MUSIC/西川貴教 - INVOKE.mp3" },
        { id: 3, src: "MUSIC/霄磊 - 叹郁孤.mp3" },
        { id: 4, src: "MUSIC/澤野弘之 - BLAZE [ZERO-TWO Ver.].mp3" },
        { id: 5, src: "MUSIC/澤野弘之 - DRAGON RISES.mp3" },
      ],
      curentIndex: 0,
    };
  },
  methods: {
    show() {
      this.$message("element-ui");
    },
    changeMusic(index) {
      this.curentIndex = index;
    },
  },
  computed: {
    getMusicSrc() {
      return this.musics[this.curentIndex].src;
    },
  },
  create() {
    getHomeMultidata().then((res) => {
      this.images = res;
      console.log(1);
      console.log(this.images);
    });
  },
};
</script>

<style>
@import url("./assets/css/base.css");
span {
  cursor: pointer;
}
.active {
  background-color: blue;
}
</style>
