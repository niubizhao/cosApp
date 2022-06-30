<template>
  <div>
    <div class="container">
      <van-sticky :offset-top="0">
        <topBar></topBar>
      </van-sticky>
      <van-pull-refresh v-model="refreshing" @refresh="onRefresh">
        <van-list
          v-model:loading="loading"
          :finished="finished"
          finished-text="没有更多了"
          @load="onLoad"
        >
          <van-cell
            v-for="item in list"
            :key="item"
            :title="item"
            size="large"
            is-link
          />
        </van-list>
      </van-pull-refresh>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue'
import topBar from '@/components/TopBar.vue'
export default {
  setup() {
    const list = ref([])
    const loading = ref(false)
    const finished = ref(false)
    const refreshing = ref(false)

    const onLoad = () => {
      setTimeout(() => {
        if (refreshing.value) {
          list.value = []
          refreshing.value = false
        }

        for (let i = 0; i < 10; i++) {
          list.value.push(`权益/卡券库存不足提醒${list.value.length + 1}`)
        }
        loading.value = false

        if (list.value.length >= 40) {
          finished.value = true
        }
      }, 1000)
    }

    const onRefresh = () => {
      // 清空列表数据
      finished.value = false

      // 重新加载数据
      // 将 loading 设置为 true，表示处于加载状态
      loading.value = true
      onLoad()
    }

    return {
      list,
      onLoad,
      loading,
      finished,
      onRefresh,
      refreshing
    }
  },
  components: {
    topBar
  }
}
</script>

<style lang="scss" scoped>
</style>