<script lang="ts" setup>
const props = defineProps({
  orderHeader: { type: String, required: true },
  meaning: { type: String, required: true },
  result: { type: Number, required: true },
  description: { type: String, required: true },
  color: { type: String, required: true },
});
</script>

<template>
  <div class="lead-dashboard-report pd-6 br-10">
    <p class="lead-dashboard-report-header">
      {{ props.orderHeader }} <span class="meaning">{{ meaning }}</span>
    </p>
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
  position: relative;
}

.meaning {
  position: absolute;
  top: -5px;
  left: 0;
  font-size: 10px;
  color: var(--layout-main-color);
  background-color: var(--layout-main-background-color);
  padding: 2px 5px;
  border: 1px solid var(--layout-border-color);
  border-radius: 5px;
  transform: translateY(-100%);
  display: none;
}

.lead-dashboard-report-header:hover .meaning {
  display: block;
}

h2 {
  font-size: 30px;
}

.lead-dashboard-report-header {
  color: var(--secondary-text-color);
}
</style>
