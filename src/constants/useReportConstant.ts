import { computed } from "vue";
import type { Report } from "@/types/ordersDashboard.type.ts";
import { useOrderStore } from "@/storage/orderStore.ts";

export function useReports() {
  const orderStore = useOrderStore();

  const reports = computed<Report[]>(() => [
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
  ]);
  return {
    reports,
  };
}
