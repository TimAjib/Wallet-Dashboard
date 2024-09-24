export type ExpenseDataType = { value: number; name: string; selected: boolean }[];

export const expenseData: ExpenseDataType = [
  { value: 100, name: 'Investment', selected: true }, // 100% for Investment
  { value: 0, name: 'Entertainment', selected: false }, // 0% for others
  { value: 0, name: 'Bill Expense', selected: false },
  { value: 0, name: 'Others', selected: false },
];