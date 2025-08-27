import React from 'react';
import { Layout, Typography, Button, Space, Avatar } from 'antd';
import { UserOutlined, BellOutlined, SettingOutlined } from '@ant-design/icons';
import { APP_NAME } from '../../constants';

const { Header: AntHeader } = Layout;
const { Title } = Typography;

interface HeaderProps {
  onSettingsClick?: () => void;
  onNotificationsClick?: () => void;
  onProfileClick?: () => void;
}

const Header: React.FC<HeaderProps> = ({
  onSettingsClick,
  onNotificationsClick,
  onProfileClick,
}) => {
  return (
    <AntHeader style={{ 
      background: '#fff', 
      padding: '0 24px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
      position: 'sticky',
      top: 0,
      zIndex: 1000,
    }}>
      <Title level={3} style={{ margin: 0, color: '#1890ff' }}>
        {APP_NAME}
      </Title>
      
      <Space size="middle">
        <Button 
          type="text" 
          icon={<BellOutlined />} 
          onClick={onNotificationsClick}
          size="large"
        />
        <Button 
          type="text" 
          icon={<SettingOutlined />} 
          onClick={onSettingsClick}
          size="large"
        />
        <Avatar 
          icon={<UserOutlined />} 
          onClick={onProfileClick}
          style={{ cursor: 'pointer' }}
        />
      </Space>
    </AntHeader>
  );
};

export default Header;
