<template>
  <div class="goods">
    <topBar></topBar>
    <van-grid clickable :column-num="2" :gutter="10" style="margin-top:10px">
      <van-grid-item icon="home-o" text="消息提醒" to="/tasks" dot/>
      <van-grid-item icon="search" text="待办任务" to="/tasks" dot/>
      <van-grid-item icon="search" text="待开发模块"/>
      <van-grid-item icon="search" text="待开发模块"/>

    </van-grid>
    <nav-bar />
  </div>
</template>

<script>
import { ref } from 'vue';
import navBar from '@/components/NavBar.vue';
import topBar from '@/components/TopBar.vue';

import {
  Tag,
  Col,
  Icon,
  Cell,
  CellGroup,
  Swipe,
  Toast,
  SwipeItem,
  ActionBar,
  ActionBarIcon,
  ActionBarButton,
  
} from 'vant'

export default {
    setup() {
    const active = ref(0);
    return { active };
  },
  name: 'home',
  components: {
    [Tag.name]: Tag,
    [Col.name]: Col,
    [Icon.name]: Icon,
    [Cell.name]: Cell,
    [CellGroup.name]: CellGroup,
    [Swipe.name]: Swipe,
    [SwipeItem.name]: SwipeItem,
    [ActionBar.name]: ActionBar,
    [ActionBarIcon.name]: ActionBarIcon,
    [ActionBarButton.name]: ActionBarButton,
    navBar,
    topBar

  },

  data() {
    return {
      active:'',
    }
  },

  methods: {}
}
</script>

<style lang="less">
.goods {
  padding-bottom: 50px;

  &-swipe {
    img {
      width: 100%;
      display: block;
    }
  }

  &-title {
    font-size: 16px;
  }

  &-price {
    color: #f44;
  }

  &-express {
    color: #999;
    font-size: 12px;
    padding: 5px 15px;
  }

  &-cell-group {
    margin: 15px 0;

    .van-cell__value {
      color: #999;
    }
  }

  &-tag {
    margin-left: 5px;
  }
}
</style>
