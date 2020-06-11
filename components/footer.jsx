import React from 'react';
import Link from 'next/link';
import { Button, Col, Layout, Row } from 'antd';
import { GithubOutlined, HeartOutlined } from '@ant-design/icons';
import Logo from './_shared/logo.jsx';
import '../styles/footer.module.scss';

const { Footer } = Layout;

export default () => {
  const currentYear = new Date().getFullYear();

  return (
    <Footer>
      <Row justify="space-around">
        <Col span={8} className="text">
          <Logo />
        </Col>
        <Col span={8} className="text">
          <p>
            Made with
            <HeartOutlined />
            by Los Crackitos
          </p>
        </Col>
        <Col span={8} className="text">
          <Button
            type="link"
            shape="circle"
            icon={<GithubOutlined />}
            size="large"
            title="Fork me on GitHub"
            href="https://github.com/Los-Crackitos/Excelante"
            className="links"
          >
            Fork me
          </Button>
        </Col>
      </Row>
      <Row justify="center">
        <Col span={6} offset={3}>
          <p>© {currentYear} Los Crackitos</p>
        </Col>
        <Col span={6}>
          <p>
            See{' '}
            <Link href="/privacy">
              <a>privacy</a>
            </Link>{' '}
            and{' '}
            <Link href="/terms">
              <a>terms</a>
            </Link>
          </p>
        </Col>
      </Row>
    </Footer>
  );
};
