<script setup lang="ts">
import { ref } from "vue";
import { type Option } from "@/types";
import { ChevronDown, ChevronUpIcon } from "lucide-vue-next";

const props = defineProps<{
  defaultPlaceholder: String;
  options: Array<Option>;
  selectedOption: Option;
}>();

const emits = defineEmits<{
  chooseOption: [options: Option, selectedOption: Option];
}>();

const isOpen = ref(false);

function selectOption(selectedOption: Option, option: Option) {
  selectedOption.option = option.option;
  selectedOption.placeholder = option.placeholder;
}
</script>

<template>
  <div class="wrapper" @click="isOpen = !isOpen">
    <div class="select pd-3 br-10" :class="{ open: isOpen }">
      <span v-if="selectedOption.option == ''" class="placeholder">
        {{ defaultPlaceholder }}</span
      >
      <span v-else class="placeholder">{{ selectedOption.placeholder }}</span>

      <ul class="options">
        <li
          v-for="(option, index) in options"
          :key="index"
          class="option"
          :class="[selectedOption.option === option.option ? 'active' : '']"
          @click="selectOption(selectedOption, option)"
        >
          {{ option.placeholder }}
        </li>
      </ul>
    </div>

    <ChevronDown v-if="!isOpen" class="chevron" />
    <ChevronUpIcon v-else class="chevron" />
  </div>
</template>

<style scoped>
.wrapper {
  flex: 1;
  position: relative;
}

.select {
  font-size: 1rem;
  border: 1px solid var(--layout-sidebar-main-color);
  cursor: pointer;
  position: relative;
}

.options {
  flex-direction: column;
  position: absolute;
  bottom: 5px;
  left: 0;
  right: 0;
  transform: translateY(100%);
  border: 1px solid var(--layout-sidebar-main-color);
  background-color: var(--layout-main-color);
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  z-index: 1;
  display: none;
}

.select.open .options {
  display: flex;
}

.option {
  font-size: calc(var(--spacing) * 3);
  padding-block: calc(var(--spacing) * 2);
  padding-inline: calc(var(--spacing) * 3);
}

.option:last-child {
  border-radius: inherit;
}

.option.active,
.option:hover {
  color: #ffffff;
  background-color: var(--accent-blue);
}

.chevron {
  position: absolute;
  top: 50%;
  right: 5px;
  transform: translateY(-50%);
  cursor: pointer;
}
</style>
