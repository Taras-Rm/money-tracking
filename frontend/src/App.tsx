import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ConfigProvider, theme } from 'antd';
import MainLayout from './components/layout/MainLayout';
import { useTransactions } from './hooks/useTransactions';
import { useLocalStorage } from './hooks/useLocalStorage';
import { formatCurrency, calculateTotalBalance } from './utils';
import type { Account } from './types';
import './App.css';

// Mock data for demonstration
const mockAccounts: Account[] = [
  {
    id: '1',
    name: 'Main Checking',
    type: 'checking',
    balance: 2500.50,
    currency: 'USD',
    color: '#1890ff',
    isActive: true,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
  {
    id: '2',
    name: 'Savings',
    type: 'savings',
    balance: 15000.00,
    currency: 'USD',
    color: '#52c41a',
    isActive: true,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
];

// Dashboard Component
const Dashboard: React.FC = () => {
  const { transactions } = useTransactions();
  const [accounts] = useLocalStorage<Account[]>('accounts', mockAccounts);
  const totalBalance = calculateTotalBalance(accounts);

  return (
    <div>
      <h1>Dashboard</h1>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '16px', marginBottom: '24px' }}>
        <div style={{ padding: '20px', background: '#f0f2f5', borderRadius: '8px' }}>
          <h3>Total Balance</h3>
          <p style={{ fontSize: '24px', fontWeight: 'bold', color: '#1890ff' }}>
            {formatCurrency(totalBalance, 'USD')}
          </p>
        </div>
        <div style={{ padding: '20px', background: '#f0f2f5', borderRadius: '8px' }}>
          <h3>Accounts</h3>
          <p style={{ fontSize: '24px', fontWeight: 'bold' }}>
            {accounts.length}
          </p>
        </div>
        <div style={{ padding: '20px', background: '#f0f2f5', borderRadius: '8px' }}>
          <h3>Transactions</h3>
          <p style={{ fontSize: '24px', fontWeight: 'bold' }}>
            {transactions.length}
          </p>
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px' }}>
        <div>
          <h3>Recent Transactions</h3>
          {transactions.slice(0, 5).map(transaction => (
            <div key={transaction.id} style={{ 
              padding: '12px', 
              border: '1px solid #d9d9d9', 
              borderRadius: '6px', 
              marginBottom: '8px',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center'
            }}>
              <div>
                <div style={{ fontWeight: 'bold' }}>{transaction.description}</div>
                <div style={{ fontSize: '12px', color: '#666' }}>{transaction.date}</div>
              </div>
              <div style={{ 
                color: transaction.type === 'income' ? '#52c41a' : '#f5222d',
                fontWeight: 'bold'
              }}>
                {transaction.type === 'income' ? '+' : '-'}{formatCurrency(transaction.amount, 'USD')}
              </div>
            </div>
          ))}
        </div>

        <div>
          <h3>Accounts Overview</h3>
          {accounts.map(account => (
            <div key={account.id} style={{ 
              padding: '12px', 
              border: '1px solid #d9d9d9', 
              borderRadius: '6px', 
              marginBottom: '8px',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center'
            }}>
              <div>
                <div style={{ fontWeight: 'bold' }}>{account.name}</div>
                <div style={{ fontSize: '12px', color: '#666' }}>{account.type}</div>
              </div>
              <div style={{ fontWeight: 'bold' }}>
                {formatCurrency(account.balance, account.currency)}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// Transactions Page
const TransactionsPage: React.FC = () => {
  const { transactions, addTransaction } = useTransactions();
  const [newTransaction, setNewTransaction] = useState({
    description: '',
    amount: '',
    type: 'expense' as 'income' | 'expense',
    category: '',
    account: '',
    date: new Date().toISOString().split('T')[0],
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (newTransaction.description && newTransaction.amount) {
      addTransaction({
        description: newTransaction.description,
        amount: parseFloat(newTransaction.amount),
        type: newTransaction.type,
        category: newTransaction.category || 'uncategorized',
        account: newTransaction.account || 'default',
        date: newTransaction.date,
      });
      setNewTransaction({
        description: '',
        amount: '',
        type: 'expense',
        category: '',
        account: '',
        date: new Date().toISOString().split('T')[0],
      });
    }
  };

  return (
    <div>
      <h1>Transactions</h1>
      
      <form onSubmit={handleSubmit} style={{ 
        padding: '20px', 
        background: '#f0f2f5', 
        borderRadius: '8px', 
        marginBottom: '24px' 
      }}>
        <h3>Add New Transaction</h3>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '12px' }}>
          <input
            type="text"
            placeholder="Description"
            value={newTransaction.description}
            onChange={(e) => setNewTransaction(prev => ({ ...prev, description: e.target.value }))}
            style={{ padding: '8px', borderRadius: '4px', border: '1px solid #d9d9d9' }}
          />
          <input
            type="number"
            placeholder="Amount"
            value={newTransaction.amount}
            onChange={(e) => setNewTransaction(prev => ({ ...prev, amount: e.target.value }))}
            style={{ padding: '8px', borderRadius: '4px', border: '1px solid #d9d9d9' }}
          />
          <select
            value={newTransaction.type}
            onChange={(e) => setNewTransaction(prev => ({ ...prev, type: e.target.value as 'income' | 'expense' }))}
            style={{ padding: '8px', borderRadius: '4px', border: '1px solid #d9d9d9' }}
          >
            <option value="expense">Expense</option>
            <option value="income">Income</option>
          </select>
          <input
            type="date"
            value={newTransaction.date}
            onChange={(e) => setNewTransaction(prev => ({ ...prev, date: e.target.value }))}
            style={{ padding: '8px', borderRadius: '4px', border: '1px solid #d9d9d9' }}
          />
          <button 
            type="submit"
            style={{ 
              padding: '8px 16px', 
              background: '#1890ff', 
              color: 'white', 
              border: 'none', 
              borderRadius: '4px',
              cursor: 'pointer'
            }}
          >
            Add Transaction
          </button>
        </div>
      </form>

      <div>
        <h3>All Transactions</h3>
        {transactions.map(transaction => (
          <div key={transaction.id} style={{ 
            padding: '16px', 
            border: '1px solid #d9d9d9', 
            borderRadius: '6px', 
            marginBottom: '12px',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center'
          }}>
            <div>
              <div style={{ fontWeight: 'bold', fontSize: '16px' }}>{transaction.description}</div>
              <div style={{ fontSize: '14px', color: '#666' }}>
                {transaction.date} • {transaction.category}
              </div>
            </div>
            <div style={{ 
              fontSize: '18px',
              fontWeight: 'bold',
              color: transaction.type === 'income' ? '#52c41a' : '#f5222d'
            }}>
              {transaction.type === 'income' ? '+' : '-'}{formatCurrency(transaction.amount, 'USD')}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

// Placeholder components for other pages
const AccountsPage: React.FC = () => <div><h1>Accounts</h1><p>Accounts management coming soon...</p></div>;
const CategoriesPage: React.FC = () => <div><h1>Categories</h1><p>Categories management coming soon...</p></div>;
const ReportsPage: React.FC = () => <div><h1>Reports</h1><p>Reports and analytics coming soon...</p></div>;
const SettingsPage: React.FC = () => <div><h1>Settings</h1><p>Settings page coming soon...</p></div>;

function App() {
  return (
    <ConfigProvider
      theme={{
        algorithm: theme.defaultAlgorithm,
        token: {
          colorPrimary: '#1890ff',
        },
      }}
    >
      <Router>
        <MainLayout>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/transactions" element={<TransactionsPage />} />
            <Route path="/accounts" element={<AccountsPage />} />
            <Route path="/categories" element={<CategoriesPage />} />
            <Route path="/reports" element={<ReportsPage />} />
            <Route path="/settings" element={<SettingsPage />} />
          </Routes>
        </MainLayout>
      </Router>
    </ConfigProvider>
  );
}

export default App;
