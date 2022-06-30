<template>
  <div class="container">
    <topBar></topBar>
    <van-form @submit="onSubmit">
      <van-cell-group inset>
        <van-field
          v-model="result"
          is-link
          readonly
          name="picker"
          label="证件类型"
          placeholder="请选择证件类型"
          @click="showPicker = true"
        />
        <van-popup v-model:show="showPicker" position="bottom">
          <van-picker
            :columns="columns"
            @confirm="onConfirm"
            @cancel="showPicker = false"
          />
        </van-popup>

        <van-field
          v-model="password"
          type="password"
          name="证件号码"
          label="证件号码"
          placeholder="请输入证件号码"
        />
        <van-field
          v-model="password"
          type="password"
          name="客户号"
          label="客户号"
          placeholder="请输入客户号"
        />
      </van-cell-group>
      <div style="margin: 16px">
        <van-button round block type="primary" native-type="submit">
          查询
        </van-button>
      </div>
    </van-form>

    <nav-bar />
  </div>
</template>

<script>
import { ref } from 'vue'
import navBar from '@/components/NavBar.vue'
import topBar from '@/components/TopBar.vue';
export default {
  setup() {
    const result = ref('')
    const showPicker = ref(false)
    const columns = ['身份证', '户口簿', '护照', '军官证', '港澳通行证','台湾居民来往大陆通行证','港澳台居民来往内陆通行证','其他']

    const onConfirm = (value) => {
      result.value = value
      showPicker.value = false
    }
    const username = ref('')
    const password = ref('')
    const onSubmit = (values) => {
      console.log('submit', values)
    }

    return {
      username,
      password,
      onSubmit,
      result,
      columns,
      onConfirm,
      showPicker
    }
  },
  components: {
    navBar,
    topBar
  }
}
</script>

<style lang="scss" scoped>
.container{
  background-color: #fff
}
</style>