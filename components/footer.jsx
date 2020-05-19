import React from 'react';
import { Button, Col, Row } from 'antd';
import { GithubOutlined } from '@ant-design/icons';
import s from '../styles/footer.module.scss';

export default () => {
  return (
    <footer>
      <Row justify="space-around">
        <Col span={5}>
          <p className={s.text}>Excelante</p>
        </Col>
        <Col span={5}>
          <p className={s.text}>Made with love by Los Crackitos</p>
        </Col>
        <Col span={5}>
          <Button
            type="link"
            shape="circle"
            icon={<GithubOutlined />}
            size="large"
            href="https://github.com/Los-Crackitos/Excelante"
            className={s.text}
          />
        </Col>
      </Row>
    </footer>
  );
};
