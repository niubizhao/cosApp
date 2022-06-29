<template>
  <div>
    <van-nav-bar
  title="app"
  left-text="返回"
  left-arrow
  @click-left="onClickLeft"
/>

  </div>
</template>

<script>
export default {
  setup() {
    const onClickLeft = () => history.back();
    return {
      onClickLeft,
    };
  }
}
</script>

<style lang="scss" scoped>

</style>