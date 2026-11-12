import { computed } from "vue";
import { useOrderStore } from "@/storage/orderStore";

const orderStore = computed(() => useOrderStore());

export const orderDashboardService = {
  getColor(result: number, color1: string, color2: string, color3: string) {
    if (result > 90) {
      return color1;
    } else if (result > 60) {
      return color2;
    } else {
      return color3;
    }
  },

  filteredOrders(
    nameFilter: string,
    selectedSource: string,
    selectedStatus: string,
  ) {
    return orderStore.value.orders.filter(
      (o) =>
        o.name.includes(nameFilter) &&
        o.source.includes(selectedSource) &&
        o.status.includes(selectedStatus),
    );
  },

  getKeys(): string[] {
    if (orderStore.value.orders[0]) {
      return Object.keys(orderStore.value.orders[0]);
    } else {
      return ["123", "123"];
    }
  },
};
