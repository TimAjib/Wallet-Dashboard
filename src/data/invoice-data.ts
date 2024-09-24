import { GridRowsProp } from '@mui/x-data-grid';

// Define the row data type
export interface RowData {
  id: number;
  description: { title: string; revenue: string };
  transactionId: string;
  type: string;
  card: string;
  date: string;
  amount: number;
}

// Update invoiceRowData to only include one deposit transaction from Juan Lopez
export const invoiceRowData: GridRowsProp<RowData> = [
  {
    id: 1,
    description: { title: 'Deposit - Juan Lopez', revenue: 'up' }, // This is the deposit transaction
    transactionId: 'TX123456789',
    type: 'Deposit',
    card: 'Visa **** 3987',
    date: '2019-01-25T10:34:00Z',
    amount: 1790000, // Amount for the deposit
  },
];