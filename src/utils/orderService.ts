import { type Order } from "@/types";
import { type DateRange } from "@/types/ordersDashboard.type";

interface WeekStats {
  totalSum: number;
  count: number;
  uniqueCount: number;
  arpc: number;
}

interface DifferenceStats {
  differenceOfSales: number;
  differenceOfRevenue: number;
  differenceOfUniqueClients: number;
  differenceARPC: number;
}

export const orderService = {
  weekStats(orders: Order[], range: DateRange): WeekStats {
    const filterd = orders.filter((order) => {
      const orderDate = new Date(order.date);
      return orderDate >= range.start && orderDate <= range.end;
    });

    const uniqeOrders = filterd.filter(
      (order, index, arr) =>
        index === arr.findIndex((o) => o.name === order.name),
    );

    const totalSum = filterd.reduce((sum, order) => sum + order.amount, 0);

    return {
      totalSum,
      count: filterd.length,
      uniqueCount: uniqeOrders.length,
      arpc: Number((totalSum / uniqeOrders.length).toFixed(2)),
    };
  },

  difference(currentWeek: WeekStats, lastWeek: WeekStats): DifferenceStats {
    const differenceOfSales = Number(
      ((currentWeek.count / lastWeek.count) * 100).toFixed(2),
    );
    const differenceOfRevenue = Number(
      ((currentWeek.totalSum / lastWeek.totalSum) * 100).toFixed(2),
    );
    const differenceOfUniqueClients = Number(
      ((currentWeek.uniqueCount / lastWeek.uniqueCount) * 100).toFixed(2),
    );
    const differenceARPC = Number(
      ((currentWeek.arpc / lastWeek.arpc) * 100).toFixed(2),
    );

    return {
      differenceOfSales,
      differenceOfRevenue,
      differenceOfUniqueClients,
      differenceARPC,
    };
  },
};
