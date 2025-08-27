import React from 'react';
import { Layout, Menu } from 'antd';
import {
  DashboardOutlined,
  TransactionOutlined,
  AccountBookOutlined,
  PieChartOutlined,
  SettingOutlined,
  BarChartOutlined,
} from '@ant-design/icons';
import { useNavigate, useLocation } from 'react-router-dom';

const { Sider } = Layout;

interface SidebarProps {
  collapsed?: boolean;
}

const Sidebar: React.FC<SidebarProps> = ({ collapsed = false }) => {
  const navigate = useNavigate();
  const location = useLocation();

  const menuItems = [
    {
      key: '/',
      icon: <DashboardOutlined />,
      label: 'Dashboard',
    },
    {
      key: '/transactions',
      icon: <TransactionOutlined />,
      label: 'Transactions',
    },
    {
      key: '/accounts',
      icon: <AccountBookOutlined />,
      label: 'Accounts',
    },
    {
      key: '/categories',
      icon: <PieChartOutlined />,
      label: 'Categories',
    },
    {
      key: '/reports',
      icon: <BarChartOutlined />,
      label: 'Reports',
    },
    {
      key: '/settings',
      icon: <SettingOutlined />,
      label: 'Settings',
    },
  ];

  const handleMenuClick = ({ key }: { key: string }) => {
    navigate(key);
  };

  return (
    <Sider 
      trigger={null} 
      collapsible 
      collapsed={collapsed}
      style={{
        background: '#fff',
        boxShadow: '2px 0 8px rgba(0,0,0,0.1)',
      }}
    >
      <Menu
        mode="inline"
        selectedKeys={[location.pathname]}
        items={menuItems}
        onClick={handleMenuClick}
        style={{
          height: '100%',
          borderRight: 0,
          background: '#fff',
        }}
      />
    </Sider>
  );
};

export default Sidebar;
