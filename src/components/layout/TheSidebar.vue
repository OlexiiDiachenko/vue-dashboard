<script setup lang="ts">
import { markRaw } from "vue";
import type { Component } from "vue";

import {
  Users,
  ChartNoAxesCombined,
  Share2,
  ChartNoAxesColumn,
  FileText,
  Brush,
} from "lucide-vue-next";

defineProps(["isOpen"]);

interface Page {
  icon: Component;
  title: string;
}

const pages: Page[] = [
  { icon: markRaw(Users), title: "Lead Dashboard" },
  { icon: markRaw(ChartNoAxesCombined), title: "Compaign Perfomance" },
  { icon: markRaw(Share2), title: "Social Media" },
  { icon: markRaw(ChartNoAxesColumn), title: "Competitor Analysis" },
  { icon: markRaw(FileText), title: "Reports" },
];

const role = "Manager";
const name = "John Doe";

const abb = name
  .split(" ")
  .map((n) => n[0])
  .join("");
</script>

<template>
  <aside id="sidebar" :class="{ open: isOpen }">
    <div class="company flex pd-6">
      <Brush :size="40" class="company-icon" />
      <div class="company-name">
        <h2 class="company-name-logo">Luniart</h2>
        <p class="company-name-description">Art studio</p>
      </div>
    </div>
    <ul class="route-list flex">
      <li
        v-for="(page, index) in pages"
        :key="index"
        class="route-item flex br-10"
      >
        <component :is="page.icon" />
        {{ page.title }}
      </li>
    </ul>
    <div class="user-wrapper">
      <div class="user pd-3">
        <div class="user-role">Role: {{ role }}</div>
        <div class="user-name flex">
          <p class="user-name-logo flex">{{ abb }}</p>
          <p class="user-name-name">{{ name }}</p>
        </div>
      </div>
    </div>
  </aside>
</template>

<style scoped>
#sidebar {
  width: 0px;
  color: var(--layout-sidebar-main-color);
  background-color: var(--layout-background-color);
  height: 100vh;
  transition: width 0.3s ease-in-out;
  overflow: hidden;
  position: relative;
}

#sidebar.open {
  width: 270px;
  border-right: 1px solid var(--layout-border-color);
}

.company {
  column-gap: 10px;
  align-items: center;
}

.company-icon {
  color: var(--accent-blue);
}

.company-name-logo {
  color: var(--layout-main-color);
}

.company-name-description {
  color: var(--layout-secondary-color);
}

.route-list {
  flex-direction: column;
  row-gap: 10px;
  padding-inline: calc(var(--spacing) * 3);
}

.route-item {
  align-items: center;
  column-gap: 10px;
  cursor: pointer;
  padding-block: calc(var(--spacing) * 3);
  padding-inline: calc(var(--spacing) * 4);
}

.route-item:hover {
  background-color: var(--accent-grey);
}

.user-wrapper {
  position: absolute;
  bottom: calc(var(--spacing) * 6);
  left: calc(var(--spacing) * 6);
  right: calc(var(--spacing) * 6);
}

.user {
  background-color: var(--accent-grey);
  border-radius: 10px;
}

.user-name {
  align-items: center;
  column-gap: 10px;
  padding-top: 10px;
}

.user-name-logo {
  background-color: var(--accent-blue);
  border-radius: 50%;
  width: calc(var(--spacing) * 8);
  height: calc(var(--spacing) * 8);
  font-size: 16px;
  align-items: center;
  justify-content: center;
}
</style>
