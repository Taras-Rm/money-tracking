// Core types for the money tracker application

export interface Transaction {
  id: string;
  amount: number;
  description: string;
  category: string;
  account: string;
  type: 'income' | 'expense';
  date: string;
  createdAt: string;
  updatedAt: string;
}

export interface Account {
  id: string;
  name: string;
  type: 'checking' | 'savings' | 'credit' | 'cash' | 'investment';
  balance: number;
  currency: string;
  color?: string;
  isActive: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface Category {
  id: string;
  name: string;
  type: 'income' | 'expense';
  color: string;
  icon?: string;
  parentId?: string;
  isActive: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface Budget {
  id: string;
  categoryId: string;
  amount: number;
  period: 'monthly' | 'yearly';
  startDate: string;
  endDate?: string;
  isActive: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface User {
  id: string;
  email: string;
  name: string;
  currency: string;
  timezone: string;
  createdAt: string;
  updatedAt: string;
}

export interface ApiResponse<T> {
  data: T;
  message: string;
  success: boolean;
}

export interface PaginatedResponse<T> {
  data: T[];
  total: number;
  page: number;
  limit: number;
  totalPages: number;
}
