<script lang="ts" setup>
import LeadReportComponent from "./components/LeadReportComponent.vue";

interface Report {
  leadHeader: string;
  result: number;
  description: string;
  color?: string;
}

const getColor = (result: number): string =>
  result > 0 ? "var(--green-text-color)" : "var(--red-text-color)";

const reports: Report[] = [
  {
    leadHeader: "Hello World",
    result: 5,
    description: "Foobar",
  },
  {
    leadHeader: "Hello World",
    result: 5,
    description: "Foobar",
    color: "var(--blue-text-color)",
  },
  {
    leadHeader: "Hello World",
    result: 5,
    description: "Foobar",
    color: "var(--purple-text-color)",
  },
  {
    leadHeader: "Hello World",
    result: 5,
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
