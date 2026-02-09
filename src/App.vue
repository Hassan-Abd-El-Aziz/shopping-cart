<script setup>
import { RouterLink, RouterView } from "vue-router";
import { ShoppingCartIcon } from "@heroicons/vue/24/solid";
import { useCartStore } from "@/stores/Cart";
const cartStore = useCartStore();
</script>

<template>
  <div class="min-h-screen">
    <header class="bg-white p-4 shadow">
      <h1 class="text-2xl font-bold">Shopping Cart App</h1>
      <nav>
        <ul class="flex flex-wrap gap-2">
          <li>
            <RouterLink to="/">Home</RouterLink>
          </li>
          <li>
            <RouterLink to="/cart" class="relative">
              <span> <ShoppingCartIcon class="w-5 h-5 inline-block" /> </span>
              <span
                v-if="cartStore.cartCount > 0"
                class="bg-red-600 rounded-2xl px-1.5 text-xs py-0.5 text-white absolute top-[-8px] right-[-16px]"
                >{{ cartStore.cartCount }}</span
              >
            </RouterLink>
          </li>
        </ul>
      </nav>
    </header>
    <main class="p-4">
      <RouterView />
    </main>
  </div>
</template>

<style scoped>
nav a.router-link-exact-active,
.router-link-active {
  color: #00bba7;
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}
</style>
