// data/activity-chart.ts

export interface TransactionDataType {
  day: string;
  deposit: number;
  withdraw: number;
}

export const transactionData: TransactionDataType[] = [
  { day: '2019', deposit: 2379007, withdraw: 100000 },
  { day: '2020', deposit: 100000, withdraw: 100000 },
  { day: '2021', deposit: 100000, withdraw: 100000 },
  { day: '2022', deposit: 100000, withdraw: 100000 },
  { day: '2023', deposit: 100000, withdraw: 100000 },
  { day: '2024', deposit: 100000, withdraw: 100000 },
];
