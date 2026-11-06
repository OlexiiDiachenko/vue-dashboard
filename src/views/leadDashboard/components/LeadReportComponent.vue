<script lang="ts" setup>
// defineProps(["leadHeader", "result", "description"]);
const props = defineProps({
  leadHeader: { type: String, required: true },
  result: { type: Number, required: true },
  description: { type: String, required: true },
  color: { type: String, required: true },
});
</script>

<template>
  <div class="lead-dashboard-report pd-6 br-10">
    <p class="lead-dashboard-report-header">{{ props.leadHeader }}</p>
    <h2 class="lead-dashboard-report-result">{{ props.result }}</h2>
    <p class="lead-dashboard-report-description" :style="{ color: color }">
      {{ props.description }}
    </p>
  </div>
</template>

<style scoped>
.lead-dashboard-report {
  flex: 1;
  background-color: #fff;
  border: 1px solid #ebe6e7;
}

.lead-dashboard-report-header,
.lead-dashboard-report-result {
  margin-bottom: 4px;
}

p {
  font-size: 14px;
}

h2 {
  font-size: 30px;
}

.lead-dashboard-report-header {
  color: var(--secondary-text-color);
}
</style>
