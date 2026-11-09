export interface Order {
  id: number;
  name: string;
  source: string;
  product: string;
  status: string;
  date: string;
  contact: string;
  amount: number;
}

export interface Option {
  placeholder: string;
  option: string;
}
