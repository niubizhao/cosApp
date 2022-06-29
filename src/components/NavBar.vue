<template>
  <div>
      <van-tabbar v-model="active" route fixed>
      <van-tabbar-item replace to="/home"  icon="home-o">首页</van-tabbar-item>
      <van-tabbar-item replace to="/equiltSearth"  icon="search">权益查询</van-tabbar-item>
      <van-tabbar-item replace to="/customer"  icon="friends-o">客户等级</van-tabbar-item>
      <van-tabbar-item replace to="/applicationForm"  icon="setting-o">申请单</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
import { ref } from 'vue';
export default {
  setup () {
   const active = ref(0);
    return { active };
  }
}
</script>

<style lang="scss" scoped>

</style>