<script lang="ts" setup>
import LeadReportComponent from "./components/LeadReportComponent.vue";
import type { Report } from "@/types/leadDashboard.type.ts";

const getColor = (result: number): string =>
  result > 0 ? "var(--green-text-color)" : "var(--red-text-color)";

const reports: Report[] = [
  {
    leadHeader: "Total Leads",
    result: 6,
    description: "Foobar",
  },
  {
    leadHeader: "New Leads",
    result: 2,
    description: "Foobar",
    color: "var(--blue-text-color)",
  },
  {
    leadHeader: "Qualified",
    result: 1,
    description: "Foobar",
    color: "var(--purple-text-color)",
  },
  {
    leadHeader: "Converted",
    result: 1,
    description: "Foobar",
  },
];
</script>

<template>
  <section class="leads-report flex">
    <template v-for="(report, index) in reports" :key="index">
      <LeadReportComponent
        :leadHeader="report.leadHeader"
        :result="report.result"
        :description="report.description"
        :color="report.color ? report.color : getColor(report.result)"
      />
    </template>
  </section>
</template>

<style scoped>
.leads-report {
  column-gap: 10px;
}
</style>
