import { defineStore } from "pinia";
import { ref, computed } from "vue";
export const useCartStore = defineStore("cart", () => {
  const items = ref([]);
  const cartTotal = computed(() =>
    items.value.reduce((total, item) => total + item.price * item.quantity, 0),
  );

  const cartCount = computed(() =>
    items.value.reduce((total, item) => total + item.quantity, 0),
  );
  const addItem = (product) => {
    const existingItem = items.value.find((item) => item.id === product.id);
    if (existingItem) {
      existingItem.quantity++;
    } else {
      items.value.push({ ...product, quantity: 1 });
    }
  };
  const removeItem = (id) => {
    items.value = items.value.filter((item) => item.id !== id);
  };

  const increaseQuantity = (id) => {
    const item = items.value.find((item) => item.id === id);
    if (item) {
      item.quantity++;
    }
  };
  const decreaseQuantity = (id) => {
    const item = items.value.find((item) => item.id === id);
    if (item && item.quantity > 1) {
      item.quantity--;
      if (item.quantity === 0) {
        removeItem(id);
      }
    }
  };
  const clearCart = () => {
    items.value = [];
  };
  return {
    items,
    cartTotal,
    cartCount,
    addItem,
    removeItem,
    increaseQuantity,
    decreaseQuantity,
    clearCart,
  };
});
