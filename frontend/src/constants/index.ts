// Application constants

export const APP_NAME = 'Money Tracker 2.0';

export const CURRENCIES = {
  USD: { symbol: '$', name: 'US Dollar' },
  CAD: { symbol: 'C$', name: 'Canadian Dollar' },
  UKR: { symbol: 'g', name: 'Hryvnia' },
} as const;

export const TRANSACTION_TYPES = {
  INCOME: 'income',
  EXPENSE: 'expense',
  MONTHLY_EXPENSE: 'monthly_expense',
} as const;


export const DATE_FORMATS = {
  DISPLAY: 'MMM dd, yyyy',
  INPUT: 'yyyy-MM-dd',
  API: 'yyyy-MM-dd',
} as const;

export const API_ENDPOINTS = {
  TRANSACTIONS: '/api/transactions',
  USER: '/api/user',
} as const;
