<template>
  <div id="swiper">
    <a href="javascript:;" id="arrow-l">&lt</a>
    <a href="javascript:;" id="arrow-r">&gt</a>
    <ul class="asd">
      <slot></slot>
    </ul>
    <ol id="circle"></ol>
  </div>
</template>

<script>
export default {
  name: "Swiper"
};

import { lbt } from "./lbt.js";
lbt();
</script>

<style>
* {
  margin: 0;
  padding: 0;
}
#arrow-l,
#arrow-r {
  display: none;
  text-align: center;
  line-height: 60px;
  font-size: 20px;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 30px;
  height: 60px;
  z-index: 999;
  background-color: rgba(0, 0, 0, 0.3);
  color: rgba(255, 255, 255, 0.6);
}
#arrow-r {
  right: 0;
}
#circle {
  width: 100px;
  height: 15px;
  background-color: rgba(255, 255, 255, 0);
  position: absolute;
  border-radius: 50%;
  left: 30px;
  bottom: 20px;
}
#swiper #circle li {
  width: 12px;
  height: 12px;
  background-color: #fff;
  border-radius: 50%;
  display: inline-block;
  margin: 2px 5px 0;
  cursor: pointer;
}
#swiper {
  margin-top: 20px;
  margin-bottom: 20px;
  width: 100%;
  height: 320px;
  position: relative;
  overflow: hidden;
  background-color: royalblue;
}
#swiper ul {
  position: absolute;
  top: 0;
  left: 0;
  width: 600%;
  list-style: none;
  padding: 0;
}
#swiper ul li {
  float: left;
  width: 320px;
  height: 100%;
}
.current {
  background-color: #f10215 !important;
}
</style>