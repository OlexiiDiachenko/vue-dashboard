export interface DateRange {
  start: Date;
  end: Date;
}

export interface DashboardRanges {
  currentWeek: DateRange;
  lastWeek: DateRange;
}

export interface Report {
  leadHeader: string;
  result: number;
  description: string;
  color?: string;
}
