<script setup lang="ts">
import { RouterView } from "vue-router";
import { ElMenuItem } from "element-plus";
import { useProductStore } from "@/stores/counter.ts"; //引入stores
const productStore = useProductStore(); //使用
</script>

<template>
  <el-menu
    class="el-menu-demo bg-black"
    mode="horizontal"
    background-color="black"
    text-color="#fff"
    active-text-color="#ffd04b"
  >
    <el-menu-item>
      <router-link to="/">Product</router-link>
    </el-menu-item>
    <el-menu-item>
      <router-link to="/cart">Cart ({{ productStore.total }})</router-link>
    </el-menu-item>
  </el-menu>
  <div><RouterView /></div>
</template>
<style></style>
