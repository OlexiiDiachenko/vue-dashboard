<script setup lang="ts">
import { X, Menu, Bell, Sun } from "lucide-vue-next";

defineEmits(["toogle"]);
defineProps(["isSidebarOpen"]);
</script>

<template>
  <header id="header" class="flex">
    <div class="page-header flex">
      <button @click="$emit('toogle')" class="page-header-toogle">
        <X v-if="isSidebarOpen" /> <Menu v-else />
      </button>
      <div class="page-header-title">
        <h1 class="page-header-title">Lead Dashboard</h1>
        <p class="page-header-date">
          {{ new Date().toLocaleDateString() }}
        </p>
      </div>
    </div>

    <div class="buttons flex">
      <button class="notification"><Bell /></button>
      <button class="mode"><Sun /></button>
    </div>
  </header>
</template>

<style scoped>
#header {
  height: 75px;
  background-color: var(--layout-background-color);
  border-bottom: 1px solid var(--layout-border-color);
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
}

.page-header {
  gap: 20px;
}

.page-header-title {
  font-size: 22px;
  color: var(--layout-main-color);
}

.page-header-date {
  color: var(--layout-secondary-color);
  font-weight: 300;
}

.buttons {
  gap: 20px;
}

button {
  color: var(--layout-main-color);
}
</style>
