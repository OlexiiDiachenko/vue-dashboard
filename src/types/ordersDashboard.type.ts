export interface DateRange {
  start: Date;
  end: Date;
}

export interface DashboardRanges {
  currentWeek: DateRange;
  lastWeek: DateRange;
}

export interface Report {
  orderHeader: string;
  meaning: string;
  result: number;
  description: string;
  variable: number;
}
