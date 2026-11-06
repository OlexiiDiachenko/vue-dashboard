<script lang="ts" setup>
import LeadReportComponent from "./components/LeadReportComponent.vue";

interface Report {
  leadHeader: string;
  result: number;
  description: string;
}

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
  },
  {
    leadHeader: "Hello World",
    result: 5,
    description: "Foobar",
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
      />
    </template>
  </section>
</template>

<style scoped>
.leads-report {
  column-gap: 10px;
}
</style>
