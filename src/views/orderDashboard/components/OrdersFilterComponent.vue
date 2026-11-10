<script setup lang="ts">
import { ref } from "vue";
import { Search } from "lucide-vue-next";
import SelectComponent from "@/components/ui/SelectComponent.vue";
import { type Option } from "@/types";

const props = defineProps<{
  nameFilter: String;
  selectedSource: Option;
  selectedStatus: Option;
}>();

const arr1 = ref<Option[]>([
  { placeholder: "--", option: "" },
  { placeholder: "Facebook", option: "Facebook" },
  { placeholder: "Instagram", option: "Instagram" },
  { placeholder: "Website", option: "Website" },
]);

const arr2 = ref<Option[]>([
  { placeholder: "--", option: "" },
  { placeholder: "New", option: "New" },
  { placeholder: "In progress", option: "In progress" },
  { placeholder: "Done", option: "Done" },
]);

const nameFilter = defineModel<string>();

const onChooseOption = (option: Option, selectedOption: Option): void => {
  selectedOption = option;
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
        v-model="nameFilter"
      />
    </div>

    <SelectComponent
      :options="arr1"
      default-placeholder="Filter by source"
      @choose-option="onChooseOption"
      :selected-option="selectedSource"
    />
    <SelectComponent
      :options="arr2"
      default-placeholder="Filter by name"
      @choose-option="onChooseOption"
      :selected-option="selectedStatus"
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
  height: 100%;
  padding-block: calc(var(--spacing) * 2);
  padding-right: calc(var(--spacing) * 4);
  padding-left: calc(var(--spacing) * 10);
  border: 1px solid var(--layout-sidebar-main-color);
  font-size: 1rem;
}
</style>
