<script setup>
const products = [
  {
    id: 1,
    name: "Product A",
    price: 29.99,
    url: "https://i.ibb.co/dw1F3H8F/P1.png",
  },
  {
    id: 2,
    name: "Product B",
    price: 49.99,
    url: "https://i.ibb.co/5X4t66RC/p2.png",
  },
  {
    id: 3,
    name: "Product C",
    price: 19.99,
    url: "https://i.ibb.co/60cJrpNM/m3.png",
  },
  {
    id: 4,
    name: "Product D",
    price: 9.99,
    url: "https://i.ibb.co/60cJrpNM/m3.png",
  },
  {
    id: 5,
    name: "Product E",
    price: 4.99,
    url: "https://i.ibb.co/dw1F3H8F/P1.png",
  },
  {
    id: 6,
    name: "Product F",
    price: 1.99,
    url: "https://i.ibb.co/dw1F3H8F/P1.png",
  },
];
function addToCart(product) {
  // Emit event to parent component
  emit("add-to-cart", product);
}
</script>
<template>
  <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
    <div
      v-for="product in products"
      :key="product.id"
      class="border p-4 rounded shadow flex flex-col items-center justify-center"
    >
      <img :src="product.url" :alt="product.name" class="w-25 h-25" />
      <h3 class="font-bold text-lg">{{ product.name }}</h3>
      <p class="text-gray-600">${{ product.price.toFixed(2) }}</p>
      <button
        @click="addToCart(product)"
        class="bg-blue-400 text-white px-3 py-1 rounded mt-2 hover:bg-blue-600"
      >
        Add to Cart
      </button>
    </div>
  </div>
</template>
