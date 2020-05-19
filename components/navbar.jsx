import React from 'react';
import { Button, Select } from 'antd';

const { Option } = Select;

function handleChange(value) {
  console.log(`selected ${value}`);
}

export default () => {
  return (
    <header>
      <h1>Excelante</h1>
      <Button shape="round">Link1</Button>
      <Button shape="round">Link2</Button>
      <Button shape="round">Link3</Button>

      <Select defaultValue="en" style={{ width: 120 }} onChange={handleChange}>
        <Option value="en">English</Option>
        <Option value="fr">Français</Option>
      </Select>
    </header>
  );
};
