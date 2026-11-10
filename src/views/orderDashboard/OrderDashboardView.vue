<script lang="ts" setup>
import { ref } from "vue";
import OrderReportComponent from "./components/OrderReportComponent.vue";
import { useReports } from "@/constants/useReportConstant.ts";
import OrdersFilterComponent from "./components/OrdersFilterComponent.vue";
import { type Option } from "@/types";
import { useOrderStore } from "@/storage/orderStore";

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

const filteredOrders = orderStore.thisWeekOrders(
  nameFilter.value,
  selectedSource.value.option,
  selectedStatus.value.option,
);
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
    :nameFilter="nameFilter"
    :selectedSource="selectedSource"
    :selectedStatus="selectedStatus"
  />

  <div class="table br-10">
    <table>
      <thead>
        <tr>
          <th>id</th>
          <th>name</th>
          <th>source</th>
          <th>product</th>
          <th>status</th>
          <th>date</th>
          <th>contact</th>
          <th>amount</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(option, index) in filteredOrders" :key="index">
          <th>{{ option.id }}</th>
          <th>{{ option.name }}</th>
          <th>{{ option.source }}</th>
          <th>{{ option.product }}</th>
          <th>{{ option.status }}</th>
          <th>{{ option.date }}</th>
          <th>{{ option.contact }}</th>
          <th>{{ option.amount }}</th>
        </tr>
      </tbody>
    </table>
  </div>
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
