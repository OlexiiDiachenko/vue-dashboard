<script setup lang="ts">
import { ref } from "vue";

import TheHeader from "./components/layout/TheHeader.vue";
import TheSidebar from "./components/layout/TheSidebar.vue";
import LeadDashboardView from "./views/leadDashboard/LeadDashboardView.vue";

const sidebarOpen = ref(false);
</script>

<template>
  <div class="app-container flex">
    <TheSidebar :isOpen="sidebarOpen" />
    <div class="main-wrapper">
      <TheHeader
        :is-sidebar-open="sidebarOpen"
        @toogle="sidebarOpen = !sidebarOpen"
      />
      <main id="main" class="pd-6">
        <LeadDashboardView />
      </main>
    </div>
  </div>
</template>

<style scoped>
.main-wrapper {
  flex: 1;
  display: flex;
  flex-direction: column;
}

#main {
  background-color: var(--layout-main-background-color);
  flex: 1;
}
</style>
