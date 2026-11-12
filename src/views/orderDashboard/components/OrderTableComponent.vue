<script setup lang="ts">
import { type Order } from "@/types";
const props = defineProps<{
  //   tableHeader: string[];
  filteredOrders: Order[];
}>();
</script>

<template>
  <div class="table br-10">
    <table>
      <!-- <thead>
        <tr>
          <th v-for="(header, index) in tableHeader" :key="index">
            {{ header }}
          </th>
        </tr>
      </thead> -->
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

<style scoped></style>
