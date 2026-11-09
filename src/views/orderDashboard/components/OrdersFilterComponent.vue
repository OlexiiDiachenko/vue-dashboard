<script setup lang="ts">
import { ref } from "vue";
import { Search } from "lucide-vue-next";
import SelectComponent from "@/components/ui/SelectComponent.vue";
import { type Option } from "@/types";

const arr1 = ref<Option[]>([
  { placeholder: "string1", option: "string1" },
  { placeholder: "string2", option: "string2" },
  { placeholder: "string3", option: "string3" },
]);

const selectedOption = ref("Filter by source");

const onChooseOption = (option: string): void => {
  selectedOption.value = option;
};
</script>

<template>
  <section class="filter flex pd-6">
    <div class="filter-input-wrapper">
      <Search class="filter-input-search" />
      <input
        class="br-10 filter-input"
        type="text"
        placeholder="Search order by name"
      />
    </div>

    <SelectComponent
      :list="arr1"
      :placeholder="selectedOption"
      :selected-option="selectedOption"
      @choose-option="onChooseOption"
    />
  </section>
</template>

<style scoped>
.filter {
  column-gap: calc(var(--spacing) * 3);
  background-color: #fff;
  border-radius: 10px;
}

.filter-input-wrapper {
  position: relative;
}

.filter-input-search {
  position: absolute;
  top: 50%;
  left: calc(var(--spacing) * 3);
  transform: translateY(-50%);
  color: var(--layout-secondary-color);
}

.filter-input {
  padding-block: calc(var(--spacing) * 2);
  padding-right: calc(var(--spacing) * 4);
  padding-left: calc(var(--spacing) * 10);
  border: 1px solid var(--layout-sidebar-main-color);
  font-size: 1rem;
}
</style>
