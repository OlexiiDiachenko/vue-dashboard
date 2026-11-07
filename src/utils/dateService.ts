import type { DashboardRanges } from "@/types/leadDashboard.type";

export const getDashboardDateRange = (): DashboardRanges => {
  const today = new Date();
  let dayOfWeek = today.getDay();
  if (dayOfWeek === 0) dayOfWeek = 7;

  const currentWeekStart = new Date(today);
  currentWeekStart.setDate(today.getDate() - dayOfWeek + 1);
  currentWeekStart.setHours(0, 0, 0, 0);

  const currentWeekEnd = new Date(today);

  const lastWeekStart = new Date(currentWeekStart);
  lastWeekStart.setDate(currentWeekStart.getDate() - 7);

  const lastWeekEnd = new Date(currentWeekEnd);
  lastWeekEnd.setDate(currentWeekEnd.getDate() - 7);

  return {
    currentWeek: { start: currentWeekStart, end: currentWeekEnd },
    lastWeek: { start: lastWeekStart, end: lastWeekEnd },
  };
};
