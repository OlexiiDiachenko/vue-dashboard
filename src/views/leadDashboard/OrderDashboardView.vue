<script lang="ts" setup>
import OrderReportComponent from "./components/OrderReportComponent.vue";
import type { Report } from "@/types/ordersDashboard.type.ts";
import { useOrderStore } from "@/storage/orderStore.ts";

const orderStore = useOrderStore();

const getColor = (result: number): string => {
  if (result > 90) {
    return "var(--green-text-color)";
  } else if (result > 60) {
    return "var(--purple-text-color)";
  } else {
    return "var(--red-text-color)";
  }
};

const reports: Report[] = [
  {
    orderHeader: "TS (P)",
    meaning: "Total Sales (Paintings)",
    result: orderStore.currentWeekStats.count,
    description: `${orderStore.differenceStats.differenceOfSales}% of last week`,
    variable: orderStore.differenceStats.differenceOfSales,
  },
  {
    orderHeader: "TRPW",
    meaning: "Total Revenue Per Week",
    result: orderStore.currentWeekStats.totalSum,
    description: `${orderStore.differenceStats.differenceOfRevenue}% of last week`,
    variable: orderStore.differenceStats.differenceOfRevenue,
  },
  {
    orderHeader: "TS (C)",
    meaning: "Total Sales (Clients)",
    result: orderStore.currentWeekStats.uniqueCount,
    description: `${orderStore.differenceStats.differenceOfUniqueClients}% of last week`,
    variable: orderStore.differenceStats.differenceOfUniqueClients,
  },
  {
    orderHeader: "ARPC",
    meaning: "Averege Revenue Per Client",
    result: orderStore.currentWeekStats.arpc,
    description: `${orderStore.differenceStats.differenceARPC}% of last week`,
    variable: orderStore.differenceStats.differenceARPC,
  },
];
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
</template>

<style scoped>
.leads-report {
  column-gap: 10px;
}
</style>
