<script setup>
import { PlusIcon, MinusIcon, TrashIcon } from "@heroicons/vue/24/solid";
import { useCartStore } from "@/stores/Cart";
const cartStore = useCartStore();
const increment = (id) => {
  cartStore.increaseQuantity(id);
};
const decrement = (id) => {
  cartStore.decreaseQuantity(id);
};
const remove = (id) => {
  cartStore.removeItem(id);
};
</script>
<template>
  <div class="p-4">
    <h2 class="text-2xl font-bold mb-4">
      Shopping Cart ({{ cartStore.cartCount }} items)
    </h2>
    <div v-if="cartStore.items.length === 0" class="text-gray-500">
      <p class="mb-3 block">Your cart is empty.</p>
      <router-link
        to="/"
        class="text-sm p-3 bg-teal-500 text-white hover:bg-teal-400"
        >Browse products
      </router-link>
    </div>

    <ul>
      <li class="flex justify-between items-center border-b py-2">
        <span class="font-semibold">Product Name</span>
        <span class="font-semibold">Product Img</span>
        <span class="font-semibold">Price</span>
        <span class="font-semibold">Subtotal</span>
        <span class="font-semibold">Quantity</span>

        <span class="font-semibold">Actions</span>
      </li>
      <li
        v-for="item in cartStore.items"
        :key="item.id"
        class="flex justify-between items-center border-b py-2"
      >
        <span>{{ item.name }} × {{ item.quantity }}</span>
        <img :src="item.url" :alt="item.name" class="w-10 h-10" />
        <span>${{ item.price.toFixed(2) }}</span>
        <span>${{ (item.price * item.quantity).toFixed(2) }}</span>
        <span>{{ item.quantity }}</span>
        <div class="flex justify-between items-center">
          <button
            type="button"
            @click="increment(item.id)"
            class="px-2 py-1 border text-xl rounded cursor-pointer"
          >
            <plus-icon class="size-6" />
          </button>
          <button
            type="button"
            @click="decrement(item.id)"
            class="px-2 py-1 border text-xl rounded cursor-pointer mx-2"
          >
            <minus-icon class="size-6" />
          </button>
          <a
            href="#"
            @click.prevent="remove(item.id)"
            class="text-red-500 hover:underline"
          >
            <trash-icon class="size-6" />
          </a>
        </div>
      </li>
    </ul>
    <div class="mt-4 font-bold" v-if="cartStore.items.length > 0">
      Total: {{ cartStore.cartTotal.toFixed(2) }}
    </div>
    <button
      @click="cartStore.clearCart()"
      v-if="cartStore.items.length > 0"
      class="mt-4 block bg-red-500 text-white px-3 py-1 hover:bg-red-600"
    >
      clear cart
    </button>
  </div>
</template>
