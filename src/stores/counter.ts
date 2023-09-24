import { ref, computed } from "vue";
import { defineStore } from "pinia";
import products from "@/data/products.json";

// 定義useCounterStore
export const useProductStore = defineStore("ProductStore", {
  state: () => {
    return {
      products: products,
    };
  },
});
