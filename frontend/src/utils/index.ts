// Utility functions for the money tracker application

import type { Transaction, Account, Category } from '../types';

/**
 * Format currency amount
 */
export const formatCurrency = (
  amount: number,
  currency: string = 'USD',
  locale: string = 'en-US'
): string => {
  return new Intl.NumberFormat(locale, {
    style: 'currency',
    currency,
  }).format(amount);
};

/**
 * Format date for display
 */
export const formatDate = (date: string | Date): string => {
  const dateObj = typeof date === 'string' ? new Date(date) : date;
  return dateObj.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  });
};

/**
 * Calculate total balance from accounts
 */
export const calculateTotalBalance = (accounts: Account[]): number => {
  return accounts.reduce((total, account) => total + account.balance, 0);
};

/**
 * Calculate total income for a period
 */
export const calculateTotalIncome = (
  transactions: Transaction[],
  startDate?: Date,
  endDate?: Date
): number => {
  let filteredTransactions = transactions.filter(t => t.type === 'income');
  
  if (startDate && endDate) {
    filteredTransactions = filteredTransactions.filter(t => {
      const transactionDate = new Date(t.date);
      return transactionDate >= startDate && transactionDate <= endDate;
    });
  }
  
  return filteredTransactions.reduce((total, t) => total + t.amount, 0);
};

/**
 * Calculate total expenses for a period
 */
export const calculateTotalExpenses = (
  transactions: Transaction[],
  startDate?: Date,
  endDate?: Date
): number => {
  let filteredTransactions = transactions.filter(t => t.type === 'expense');
  
  if (startDate && endDate) {
    filteredTransactions = filteredTransactions.filter(t => {
      const transactionDate = new Date(t.date);
      return transactionDate >= startDate && transactionDate <= endDate;
    });
  }
  
  return filteredTransactions.reduce((total, t) => total + t.amount, 0);
};

/**
 * Group transactions by category
 */
export const groupTransactionsByCategory = (
  transactions: Transaction[],
  categories: Category[]
): Record<string, { transactions: Transaction[]; total: number }> => {
  const grouped: Record<string, { transactions: Transaction[]; total: number }> = {};
  
  transactions.forEach(transaction => {
    const category = categories.find(c => c.id === transaction.category);
    const categoryName = category?.name || 'Uncategorized';
    
    if (!grouped[categoryName]) {
      grouped[categoryName] = { transactions: [], total: 0 };
    }
    
    grouped[categoryName].transactions.push(transaction);
    grouped[categoryName].total += transaction.amount;
  });
  
  return grouped;
};

/**
 * Generate unique ID
 */
export const generateId = (): string => {
  return Date.now().toString(36) + Math.random().toString(36).substr(2);
};

/**
 * Validate email format
 */
export const isValidEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

/**
 * Debounce function
 */
export const debounce = <T extends (...args: any[]) => any>(
  func: T,
  wait: number
): ((...args: Parameters<T>) => void) => {
  let timeout: ReturnType<typeof setTimeout>;
  return (...args: Parameters<T>) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => func(...args), wait);
  };
};

/**
 * Get month name
 */
export const getMonthName = (date: Date): string => {
  return date.toLocaleDateString('en-US', { month: 'long' });
};

/**
 * Get current month start and end dates
 */
export const getCurrentMonthRange = (): { start: Date; end: Date } => {
  const now = new Date();
  const start = new Date(now.getFullYear(), now.getMonth(), 1);
  const end = new Date(now.getFullYear(), now.getMonth() + 1, 0);
  return { start, end };
};
