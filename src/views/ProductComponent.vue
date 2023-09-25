<script setup lang="ts">
import { ref } from "vue";
import { ElRow, ElCol, ElCard, ElButton } from "element-plus";
import { useProductStore } from "@/stores/counter.ts"; //引入stores
const productStore = useProductStore(); //使用
</script>

<template>
  <h2 class="intro" style="text-align: center">Products</h2>
  <el-row style="margin: 20px; display: flex; justify-content: center">
    <el-col
      v-for="(i, index) in productStore.products"
      :id="index"
      :key="index"
      :span="8"
      style="margin: 10px"
    >
      <el-card :body-style="{ padding: '0px' }" shadow="hover">
        <img :src="i.image" class="image" />
        <div style="padding: 14px">
          <span>{{ i.title }}</span>
          <div class="bottom">
            <p class="time">$ {{ i.price }}</p>
            <el-button @click="productStore.addIntoCart(i)" class="button"
              >Add into cart</el-button
            >
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
  padding: 5px;
  min-height: auto;
  background-color: black;
  color: white;
}

.image {
  width: 100%;
  display: block;
}
</style>
