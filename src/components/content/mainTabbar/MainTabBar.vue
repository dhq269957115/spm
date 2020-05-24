<template>
  <tab-bar>
    <tab-bar-item path="/home" activeColor="green">
      <img slot="item-img" src="~assets/img/logo.png" />
      <img slot="item-img-active" src="~assets/img/logo.png" alt />
      <div slot="item-info">首页</div>
    </tab-bar-item>
    <tab-bar-item path="/category">
      <img slot="item-img" src="~assets/img/logo.png" alt />
      <img slot="item-img-active" src="~assets/img/logo.png" alt />
      <div slot="item-info">分类</div>
    </tab-bar-item>
    <tab-bar-item path="/cart">
      <img slot="item-img" src="~assets/img/logo.png" alt />
      <img slot="item-img-active" src="@/assets/img/logo.png" alt />
      <div slot="item-info">购物车</div>
    </tab-bar-item>
    <tab-bar-item path="/profile">
      <img slot="item-img" src="~assets/img/logo.png" alt />
      <img slot="item-img-active" src="~assets/img/logo.png" alt />
      <div slot="item-info">我的</div>
    </tab-bar-item>
  </tab-bar>
</template>

<script>
import TabBar from "components/common/tabbar/TabBar";
import TabBarItem from "components/common/tabbar/TabBarItem";
export default {
  name: "MainTabBar",
  components: {
    TabBar,
    TabBarItem
  }
};
</script>

<style>
</style>