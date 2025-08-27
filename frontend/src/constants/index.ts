// Application constants

export const APP_NAME = 'Money Tracker 2.0';

export const CURRENCIES = {
  USD: { symbol: '$', name: 'US Dollar' },
  EUR: { symbol: '€', name: 'Euro' },
  GBP: { symbol: '£', name: 'British Pound' },
  JPY: { symbol: '¥', name: 'Japanese Yen' },
  CAD: { symbol: 'C$', name: 'Canadian Dollar' },
  AUD: { symbol: 'A$', name: 'Australian Dollar' },
} as const;

export const ACCOUNT_TYPES = {
  CHECKING: 'checking',
  SAVINGS: 'savings',
  CREDIT: 'credit',
  CASH: 'cash',
  INVESTMENT: 'investment',
} as const;

export const TRANSACTION_TYPES = {
  INCOME: 'income',
  EXPENSE: 'expense',
} as const;

export const BUDGET_PERIODS = {
  MONTHLY: 'monthly',
  YEARLY: 'yearly',
} as const;

export const DEFAULT_CATEGORIES = {
  INCOME: [
    { name: 'Salary', color: '#52c41a' },
    { name: 'Freelance', color: '#1890ff' },
    { name: 'Investment', color: '#722ed1' },
    { name: 'Gift', color: '#eb2f96' },
  ],
  EXPENSE: [
    { name: 'Food & Dining', color: '#fa8c16' },
    { name: 'Transportation', color: '#13c2c2' },
    { name: 'Shopping', color: '#f5222d' },
    { name: 'Bills & Utilities', color: '#faad14' },
    { name: 'Entertainment', color: '#eb2f96' },
    { name: 'Healthcare', color: '#52c41a' },
    { name: 'Education', color: '#1890ff' },
    { name: 'Travel', color: '#722ed1' },
  ],
};

export const DATE_FORMATS = {
  DISPLAY: 'MMM dd, yyyy',
  INPUT: 'yyyy-MM-dd',
  API: 'yyyy-MM-dd',
} as const;

export const API_ENDPOINTS = {
  TRANSACTIONS: '/api/transactions',
  ACCOUNTS: '/api/accounts',
  CATEGORIES: '/api/categories',
  BUDGETS: '/api/budgets',
  REPORTS: '/api/reports',
  USER: '/api/user',
} as const;

export const LOCAL_STORAGE_KEYS = {
  USER_PREFERENCES: 'money_tracker_user_preferences',
  AUTH_TOKEN: 'money_tracker_auth_token',
  THEME: 'money_tracker_theme',
} as const;
