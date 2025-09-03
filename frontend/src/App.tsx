import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ConfigProvider, theme } from 'antd';
import MainLayout from './components/layout/MainLayout';
import { formatCurrency } from './utils';
import './App.css';


// Dashboard Component
const Dashboard: React.FC = () => {

  return (
    <div>
      <h1>Dashboard</h1>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '16px', marginBottom: '24px' }}>
        <div style={{ padding: '20px', background: '#f0f2f5', borderRadius: '8px' }}>
          <h3>Total Balance</h3>
          <p style={{ fontSize: '24px', fontWeight: 'bold', color: '#1890ff' }}>
            {formatCurrency(1287, 'USD')}
          </p>
        </div>
        <div style={{ padding: '20px', background: '#f0f2f5', borderRadius: '8px' }}>
          <h3>Transactions</h3>
          <p style={{ fontSize: '24px', fontWeight: 'bold' }}>
            {7}
          </p>
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px' }}>
        <div>
          <h3>Recent Transactions</h3>
          <p>Recent transactions coming soon...</p>
        </div>
      </div>
    </div >
  );
};

// Transactions Page
const TransactionsPage: React.FC = () => {
  const [newTransaction, setNewTransaction] = useState({
    description: '',
    amount: '',
    type: 'expense' as 'income' | 'expense',
    category: '',
    account: '',
    date: new Date().toISOString().split('T')[0],
  });

  return (
    <div>
      <h1>Transactions</h1>

      <form onSubmit={() => { }} style={{
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
        <p>All transactions coming soon...</p>
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
