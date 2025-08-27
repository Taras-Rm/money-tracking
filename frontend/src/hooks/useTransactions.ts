import { useState, useEffect } from 'react';
import type { Transaction } from '../types';
import { generateId } from '../utils';

export function useTransactions() {
  const [transactions, setTransactions] = useState<Transaction[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Load transactions from localStorage on mount
  useEffect(() => {
    const stored = localStorage.getItem('transactions');
    if (stored) {
      try {
        setTransactions(JSON.parse(stored));
      } catch (err) {
        console.error('Error loading transactions:', err);
      }
    }
  }, []);

  // Save transactions to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem('transactions', JSON.stringify(transactions));
  }, [transactions]);

  const addTransaction = (transaction: Omit<Transaction, 'id' | 'createdAt' | 'updatedAt'>) => {
    const newTransaction: Transaction = {
      ...transaction,
      id: generateId(),
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };
    
    setTransactions(prev => [newTransaction, ...prev]);
    return newTransaction;
  };

  const updateTransaction = (id: string, updates: Partial<Transaction>) => {
    setTransactions(prev => 
      prev.map(transaction => 
        transaction.id === id 
          ? { ...transaction, ...updates, updatedAt: new Date().toISOString() }
          : transaction
      )
    );
  };

  const deleteTransaction = (id: string) => {
    setTransactions(prev => prev.filter(transaction => transaction.id !== id));
  };

  const getTransaction = (id: string) => {
    return transactions.find(transaction => transaction.id === id);
  };

  const getTransactionsByDateRange = (startDate: Date, endDate: Date) => {
    return transactions.filter(transaction => {
      const transactionDate = new Date(transaction.date);
      return transactionDate >= startDate && transactionDate <= endDate;
    });
  };

  const getTransactionsByCategory = (categoryId: string) => {
    return transactions.filter(transaction => transaction.category === categoryId);
  };

  const getTransactionsByAccount = (accountId: string) => {
    return transactions.filter(transaction => transaction.account === accountId);
  };

  return {
    transactions,
    loading,
    error,
    addTransaction,
    updateTransaction,
    deleteTransaction,
    getTransaction,
    getTransactionsByDateRange,
    getTransactionsByCategory,
    getTransactionsByAccount,
  };
}
