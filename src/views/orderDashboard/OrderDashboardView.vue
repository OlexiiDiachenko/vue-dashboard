<script lang="ts" setup>
import OrderReportComponent from "./components/OrderReportComponent.vue";
import { useReports } from "@/constants/useReportConstant.ts";
import OrdersFilterComponent from "./components/OrdersFilterComponent.vue";

const getColor = (result: number): string => {
  if (result > 90) {
    return "var(--green-text-color)";
  } else if (result > 60) {
    return "var(--purple-text-color)";
  } else {
    return "var(--red-text-color)";
  }
};

const { reports } = useReports();
</script>

<template>
  <section class="leads-report flex">
    <template v-for="(report, index) in reports" :key="index">
      <OrderReportComponent
        :orderHeader="report.orderHeader"
        :meaning="report.meaning"
        :result="report.result"
        :description="report.description"
        :color="getColor(report.variable)"
      />
    </template>
  </section>
  <OrdersFilterComponent />
</template>

<style scoped>
.leads-report {
  column-gap: 10px;
}
</style>
