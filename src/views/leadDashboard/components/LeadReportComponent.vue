<script lang="ts" setup>
// defineProps(["leadHeader", "result", "description"]);
const props = defineProps({
  leadHeader: { type: String, required: true },
  result: { type: Number, required: true },
  description: { type: String, required: true },
});
</script>

<template>
  <div class="lead-dashboard-report pd-6">
    <p class="lead-dashboard-report-header">{{ props.leadHeader }}</p>
    <h2 class="lead-dashboard-report-result">{{ props.result }}</h2>
    <p class="lead-dashboard-report-description">{{ props.description }}</p>
  </div>
</template>

<style scoped>
.lead-dashboard-report {
  background-color: #fff;
  flex: 1;
}
</style>
