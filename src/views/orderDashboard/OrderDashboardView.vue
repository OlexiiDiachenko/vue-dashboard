<script lang="ts" setup>
import { ref, computed } from "vue";

import OrderReportComponent from "./components/OrderReportComponent.vue";
import OrdersFilterComponent from "./components/OrdersFilterComponent.vue";
import OrderTableComponent from "./components/OrderTableComponent.vue";

import { useReports } from "@/constants/useReportConstant.ts";
import { orderDashboardService } from "@/utils/orderDashboardService.ts";
import { type Option } from "@/types";

const getColor = (result: number) =>
  orderDashboardService.getColor(
    result,
    "var(--green-text-color)",
    "var(--purple-text-color)",
    "var(--red-text-color)",
  );

const { reports } = useReports();

const nameFilter = ref("");

const selectedSource = ref<Option>({
  placeholder: "",
  option: "",
});
const selectedStatus = ref<Option>({
  placeholder: "",
  option: "",
});

const filteredOrders = computed(() => {
  return orderDashboardService.filteredOrders(
    nameFilter.value,
    selectedSource.value.option,
    selectedStatus.value.option,
  );
});
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
  <OrdersFilterComponent
    v-model="nameFilter"
    :nameFilter="nameFilter"
    :selectedSource="selectedSource"
    :selectedStatus="selectedStatus"
  />

  <OrderTableComponent :filteredOrders="filteredOrders" />
  <!-- :tableHeader="orderDashboardService.getKeys" -->
</template>

<style scoped>
.leads-report {
  column-gap: 10px;
}

.table {
  flex: 1;
  background-color: #fff;
  overflow: scroll;
}
</style>
