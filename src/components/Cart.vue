<script setup>
import { PlusIcon, MinusIcon, TrashIcon } from "@heroicons/vue/24/solid";
</script>
<template>
  <div class="p-4">
    <h2 class="text-2xl font-bold mb-4">Shopping Cart (3 items)</h2>
    <ul>
      <li class="flex justify-between items-center border-b py-2">
        <span class="font-semibold">Product Name</span>
        <span class="font-semibold">Price</span>
        <span class="font-semibold">Subtotal</span>
        <span class="font-semibold">Quantity</span>
        <span class="font-semibold">Total</span>
      </li>
      <li class="flex justify-between items-center border-b py-2">
        <span>Product A * 3</span>
        <span>$29.99</span>
        <div class="flex justify-between items-center">
          <button
            type="button"
            class="px-2 py-1 border text-xl rounded cursor-pointer"
          >
            <plus-icon class="size-6" />
          </button>
          <button
            type="button"
            class="px-2 py-1 border text-xl rounded cursor-pointer mx-2"
          >
            <minus-icon class="size-6" />
          </button>
          <a href="#" class="text-red-500 hover:underline">
            <trash-icon class="size-6" />
          </a>
        </div>
      </li>
    </ul>
    <div class="mt-4 font-bold">Total: $89.97</div>
    <button class="mt-4 block bg-red-500 text-white px-3 py-1 hover:bg-red-600">
      clear cart
    </button>
  </div>
</template>
