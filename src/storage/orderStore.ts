import { defineStore } from "pinia";
import { ref, computed } from "vue";
import { type Order } from "@/types";
import { getDashboardDateRange } from "@/utils/dateService";
import { type DateRange } from "@/types/leadDashboard.type";

const weekStats = (
  orders: Order[],
  range: DateRange,
): { totalSum: number; count: number } => {
  const filterd = orders.filter((order) => {
    const orderDate = new Date(order.date);
    return orderDate >= range.start && orderDate <= range.end;
  });

  return {
    totalSum: filterd.reduce((sum, order) => sum + order.amount, 0),
    count: filterd.length,
  };
};

export const useOrderStore = defineStore("orders", () => {
  const orders = ref<Order[]>([
    {
      id: 1,
      name: "Emily Stone",
      source: "Facebook",
      product: "A2 Oil",
      status: "new",
      date: "2026-10-26",
      contact: "+49 170 87 64 123",
      amount: 350,
    },
    {
      id: 2,
      name: "Mark Schmidt",
      source: "Instagram",
      product: "A2 Charcoal",
      status: "in process",
      date: "2026-10-27",
      contact: "+49 170 87 64 123",
      amount: 350,
    },
    {
      id: 3,
      name: "Henry Thoreau",
      source: "Facebook",
      product: "A3 Oil",
      status: "new",
      date: "2026-10-27",
      contact: "+49 170 87 64 123",
      amount: 350,
    },
    {
      id: 4,
      name: "Jane Austen",
      source: "Facebook",
      product: "A1 Oil",
      status: "new",
      date: "2026-10-26",
      contact: "+49 170 87 64 123",
      amount: 350,
    },
    {
      id: 5,
      name: "Oskar Wilde",
      source: "Facebook",
      product: "A4 Oil",
      status: "new",
      date: "2026-10-28",
      contact: "+49 170 87 64 123",
      amount: 200,
    },
    {
      id: 6,
      name: "Dorian Gray",
      source: "Facebook",
      product: "A4 Oil",
      status: "new",
      date: "2026-10-30",
      contact: "+49 170 87 64 123",
      amount: 800,
    },
    {
      id: 7,
      name: "Jack London",
      source: "Facebook",
      product: "A0 charcoal",
      status: "new",
      date: "2026-10-31",
      contact: "+49 170 87 64 123",
      amount: 350,
    },
    {
      id: 8,
      name: "Mark Schmidt",
      source: "Instagram",
      product: "A2 Charcoal",
      status: "in process",
      date: "2026-05-30",
      contact: "+49 170 87 64 123",
      amount: 650,
    },
    {
      id: 9,
      name: "Henry Thoreau",
      source: "Facebook",
      product: "A3 Oil",
      status: "new",
      date: "2026-10-31",
      contact: "+49 170 87 64 123",
      amount: 350,
    },
    {
      id: 10,
      name: "Jane Austen",
      source: "Facebook",
      product: "A1 Oil",
      status: "new",
      date: "2026-11-01",
      contact: "+49 170 87 64 123",
      amount: 350,
    },
    {
      id: 11,
      name: "Oskar Wilde",
      source: "Facebook",
      product: "A4 Oil",
      status: "new",
      date: "2026-11-02",
      contact: "+49 170 87 64 123",
      amount: 700,
    },
    {
      id: 12,
      name: "Dorian Gray",
      source: "Facebook",
      product: "A2 Oil",
      status: "new",
      date: "2026-11-03",
      contact: "+49 170 87 64 123",
      amount: 300,
    },
    {
      id: 13,
      name: "Emily Stone",
      source: "Facebook",
      product: "A2 Oil",
      status: "new",
      date: "2026-11-04",
      contact: "+49 170 87 64 123",
      amount: 350,
    },
    {
      id: 14,
      name: "Mark Schmidt",
      source: "Instagram",
      product: "A2 Charcoal",
      status: "in process",
      date: "2026-11-06",
      contact: "+49 170 87 64 123",
      amount: 950,
    },
    {
      id: 15,
      name: "Henry Thoreau",
      source: "Facebook",
      product: "A3 Oil",
      status: "new",
      date: "2026-11-07",
      contact: "+49 170 87 64 123",
      amount: 350,
    },
    {
      id: 16,
      name: "Jane Austen",
      source: "Facebook",
      product: "A1 Oil",
      status: "new",
      date: "2026-10-27",
      contact: "+49 170 87 64 123",
      amount: 550,
    },
    {
      id: 17,
      name: "Oskar Wilde",
      source: "Facebook",
      product: "A4 Oil",
      status: "new",
      date: "2026-11-02",
      contact: "+49 170 87 64 123",
      amount: 1200,
    },
    {
      id: 18,
      name: "Dorian Gray",
      source: "Facebook",
      product: "A4 Oil",
      status: "new",
      date: "2026-11-04",
      contact: "+49 170 87 64 123",
      amount: 400,
    },
  ]);

  const ranges = getDashboardDateRange();
  const currentWeekStats = computed(() =>
    weekStats(orders.value, ranges.currentWeek),
  );
  const lastWeekStats = computed(() =>
    weekStats(orders.value, ranges.lastWeek),
  );
});
