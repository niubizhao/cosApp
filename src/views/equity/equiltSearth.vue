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
          name="保单号"
          label="保单号"
          placeholder="请输入保单号"
        />
        <van-field
          v-model="password"
          type="password"
          name="MDM客户号"
          label="MDM客户号"
          placeholder="MDM客户号"
        />
      </van-cell-group>
      <div style="margin: 16px">
        <van-button round block type="primary" native-type="submit">
          查询
        </van-button>
      </div>
    </van-form>
    <el-table :data="tableData" style="width: 100%" height="550">
      <el-table-column fixed prop="date" label="Date" width="150" />
      <el-table-column prop="name" label="Name" width="120" />
      <el-table-column prop="state" label="State" width="120" />
      <el-table-column prop="city" label="City" width="220" />
      <el-table-column prop="address" label="Address" width="300" />
      <el-table-column prop="zip" label="Zip" width="120" />
    </el-table>
    <nav-bar />
  </div>
</template>

<script>
import { ref } from 'vue'
import navBar from '@/components/NavBar.vue'
import topBar from '@/components/TopBar.vue'
export default {
  setup() {
    const result = ref('')
    const showPicker = ref(false)
    const columns = [
      '身份证',
      '户口簿',
      '护照',
      '军官证',
      '港澳通行证',
      '台湾居民来往大陆通行证',
      '港澳台居民来往内陆通行证',
      '其他'
    ]

    const onConfirm = (value) => {
      result.value = value
      showPicker.value = false
    }
    const username = ref('')
    const password = ref('')
    const onSubmit = (values) => {
      console.log('submit', values)
    }
    const tableData = [
      {
        date: '2016-05-03',
        name: 'Tom',
        state: 'California',
        city: 'Los Angeles',
        address: 'No. 189, Grove St, Los Angeles',
        zip: 'CA 90036'
      },
      {
        date: '2016-05-02',
        name: 'Tom',
        state: 'California',
        city: 'Los Angeles',
        address: 'No. 189, Grove St, Los Angeles',
        zip: 'CA 90036'
      },
      {
        date: '2016-05-02',
        name: 'Tom',
        state: 'California',
        city: 'Los Angeles',
        address: 'No. 189, Grove St, Los Angeles',
        zip: 'CA 90036'
      },
      {
        date: '2016-05-02',
        name: 'Tom',
        state: 'California',
        city: 'Los Angeles',
        address: 'No. 189, Grove St, Los Angeles',
        zip: 'CA 90036'
      },
      {
        date: '2016-05-02',
        name: 'Tom',
        state: 'California',
        city: 'Los Angeles',
        address: 'No. 189, Grove St, Los Angeles',
        zip: 'CA 90036'
      },
      {
        date: '2016-05-02',
        name: 'Tom',
        state: 'California',
        city: 'Los Angeles',
        address: 'No. 189, Grove St, Los Angeles',
        zip: 'CA 90036'
      },
      {
        date: '2016-05-02',
        name: 'Tom',
        state: 'California',
        city: 'Los Angeles',
        address: 'No. 189, Grove St, Los Angeles',
        zip: 'CA 90036'
      },
      {
        date: '2016-05-02',
        name: 'Tom',
        state: 'California',
        city: 'Los Angeles',
        address: 'No. 189, Grove St, Los Angeles',
        zip: 'CA 90036'
      },
      {
        date: '2016-05-02',
        name: 'Tom',
        state: 'California',
        city: 'Los Angeles',
        address: 'No. 189, Grove St, Los Angeles',
        zip: 'CA 90036'
      },
      {
        date: '2016-05-02',
        name: 'Tom',
        state: 'California',
        city: 'Los Angeles',
        address: 'No. 189, Grove St, Los Angeles',
        zip: 'CA 90036'
      },
      {
        date: '2016-05-02',
        name: 'Tom',
        state: 'California',
        city: 'Los Angeles',
        address: 'No. 189, Grove St, Los Angeles',
        zip: 'CA 90036'
      },
      {
        date: '2016-05-02',
        name: 'Tom',
        state: 'California',
        city: 'Los Angeles',
        address: 'No. 189, Grove St, Los Angeles',
        zip: 'CA 90036'
      },
      {
        date: '2016-05-02',
        name: 'Tom',
        state: 'California',
        city: 'Los Angeles',
        address: 'No. 189, Grove St, Los Angeles',
        zip: 'CA 90036'
      },
      {
        date: '2016-05-02',
        name: 'Tom',
        state: 'California',
        city: 'Los Angeles',
        address: 'No. 189, Grove St, Los Angeles',
        zip: 'CA 90036'
      },
      {
        date: '2016-05-04',
        name: 'Tom',
        state: 'California',
        city: 'Los Angeles',
        address: 'No. 189, Grove St, Los Angeles',
        zip: 'CA 90036'
      },
      {
        date: '2016-05-01',
        name: 'Tom',
        state: 'California',
        city: 'Los Angeles',
        address: 'No. 189, Grove St, Los Angeles',
        zip: 'CA 90036'
      },
      {
        date: '2016-05-08',
        name: 'Tom',
        state: 'California',
        city: 'Los Angeles',
        address: 'No. 189, Grove St, Los Angeles',
        zip: 'CA 90036'
      },
      {
        date: '2016-05-06',
        name: 'Tom',
        state: 'California',
        city: 'Los Angeles',
        address: 'No. 189, Grove St, Los Angeles',
        zip: 'CA 90036'
      },
      {
        date: '2016-05-07',
        name: 'Tom',
        state: 'California',
        city: 'Los Angeles',
        address: 'No. 189, Grove St, Los Angeles',
        zip: 'CA 90036'
      }
    ]

    return {
      username,
      password,
      onSubmit,
      result,
      columns,
      onConfirm,
      showPicker,
      tableData
    }
  },
  components: {
    navBar,
    topBar
  }
}
</script>

<style lang="scss" scoped>
.container {
  background-color: #fff;
}
</style>