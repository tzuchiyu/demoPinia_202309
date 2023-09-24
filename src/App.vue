<script setup lang="ts">
    import { RouterView } from 'vue-router';
    import { useCounterStore } from "@/stores/counter.ts" //引入stores
    useCounterStore(); //使用
</script>

<template>
    <RouterView />
</template>
