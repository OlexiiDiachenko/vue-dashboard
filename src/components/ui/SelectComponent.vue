<script setup lang="ts">
import { ref } from "vue";
import { type Option } from "@/types";
import { ChevronDown } from "lucide-vue-next";

const props = defineProps<{
  placeholder: String;
  list: Array<Option>;
  selectedOption: String;
}>();

const emits = defineEmits<{
  chooseOption: [name: string];
}>();

const isOpen = ref(false);
</script>

<template>
  <section class="select" @click="isOpen = !isOpen" :class="{ open: isOpen }">
    <div class="placeholder">{{ placeholder }}</div>
    <ul class="options">
      <li class="option" @click="$emit('chooseOption', `${placeholder}`)">
        --
      </li>
      <li
        class="option"
        v-for="(listItem, index) in list"
        :key="index"
        @click="$emit('chooseOption', `${listItem.option}`)"
      >
        {{ listItem.placeholder }}
      </li>
    </ul>

    <ChevronDown class="chevronDown" />
  </section>
</template>

<style scoped>
.select {
  position: relative;
  padding-block: calc(var(--spacing) * 2);
  padding-right: calc(var(--spacing) * 8);
  padding-left: calc(var(--spacing) * 4);
  z-index: 5;
  font-size: 1rem;
  border: 1px solid var(--layout-sidebar-main-color);
  border-radius: 10px;
  flex: 1;
}

.options {
  position: absolute;
  bottom: 5px;
  left: 0;
  z-index: 1;
  display: none;
  flex-direction: column;
  width: 100%;
  background-color: var(--layout-main-color);
  border: 1px solid var(--layout-border-color);
  border-radius: 10px;
  transform: translateY(100%);
}

.select.open .options {
  display: flex;
}

.option {
  font-size: 1rem;
  padding-block: calc(var(--spacing) * 1);
  padding-inline: calc(var(--spacing) * 2);
  transition: background-color 0.2s ease-in-out;
  cursor: pointer;
}

.option:hover {
  background-color: var(--accent-blue);
}

.chevronDown {
  position: absolute;
  right: calc(var(--spacing) * 2);
  top: 50%;
  transform: translateY(-50%);
  z-index: 2;
}
</style>
