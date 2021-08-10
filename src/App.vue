<template>
  <div>
    <div>
      <router-link to="/">首页</router-link>
      <router-link to="/about">关于</router-link>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      msg: "成功",
    };
  },
};
</script>

<style scoped>
</style>