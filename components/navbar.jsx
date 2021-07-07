import React from 'react';
import Link from 'next/link';
import { Layout, Menu, Row, Select, Switch } from 'antd';
import { InfoCircleOutlined, ToolOutlined } from '@ant-design/icons';
import Logo from './_shared/logo.jsx';

const { Header } = Layout;
const { Option } = Select;

const handleChange = (value) => {
  console.log(`selected ${value}`);
};

const Navbar = () => {
  return (
    <Header style={{ background: '#00cba9' }}>
      <Logo />
      <Row justify="end">
        <Menu mode="horizontal" style={{ background: '#00cba9', color: '#fff' }}>
          <Menu.Item key="tools" title="Tools" icon={<ToolOutlined />}>
            <Link href="#tools">
              <a>Tools</a>
            </Link>
          </Menu.Item>
          <Menu.Item key="about" title="About" icon={<InfoCircleOutlined />}>
            <Link href="/about">
              <a>About</a>
            </Link>
          </Menu.Item>
          <Menu.Item>
            <Select defaultValue="en" style={{ width: 120 }} onChange={handleChange}>
              <Option value="en">English</Option>
              <Option value="fr">Français</Option>
            </Select>
          </Menu.Item>
          <Menu.Item key="toggle-theme" title="Change Theme">
            <Switch checkedChildren="🌞" unCheckedChildren="🌜" defaultChecked />
          </Menu.Item>
        </Menu>
      </Row>
    </Header>
  );
};

export default Navbar;
