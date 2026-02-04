<script setup>
import { RouterLink, RouterView } from "vue-router";
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
            <RouterLink to="/cart">Cart</RouterLink>
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
