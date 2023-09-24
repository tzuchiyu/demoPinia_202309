<script setup lang="ts">
import { RouterView } from "vue-router";
import { ElRow, ElCol, ElCard, ElButton } from "element-plus";
import { useProductStore } from "@/stores/counter.ts"; //引入stores
const productStore = useProductStore(); //使用
</script>

<template>
  <RouterView />
  <el-row>
    <el-col v-for="(i, index) in productStore.products" :key="index" :span="6">
      <el-card :body-style="{ padding: '0px' }" shadow="hover">
        <img src="" class="image" />
        <div style="padding: 14px">
          <span>{{ i.title }}</span>
          <div class="bottom">
            <time class="time">{{ i.price }}</time>
            <el-button text class="button">Add into cart</el-button>
          </div>
        </div>
      </el-card>
    </el-col>
  </el-row>
</template>
<style>
.time {
  font-size: 12px;
  color: #999;
}

.bottom {
  margin-top: 13px;
  line-height: 12px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.button {
  padding: 0;
  min-height: auto;
}

.image {
  width: 100%;
  display: block;
}
</style>
