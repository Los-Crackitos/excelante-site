import React from 'react';
import { Button, Col, Layout, Row, Typography } from 'antd';
import { ArrowDownOutlined } from '@ant-design/icons';
import Navbar from '../components/navbar.jsx';
import Converter from '../components/converter.jsx';
import Writer from '../components/writer.jsx';
import Footer from '../components/footer.jsx';
import PageHead from '../components/_shared/pageHead.jsx';
import '../styles/index.scss';
import Wave from '../public/wave.svg';

const { Content } = Layout;
const { Text, Title } = Typography;

export default function Home() {
  return (
    <div className="container">
      <PageHead currentPageName="Home" />
      <Layout className="layout">
        <Navbar />
        <Content className="main-content">
          <Row gutter={[40, 0]} align="middle" className="description">
            <Col span={10} className="desc-col1">
              <Title>Excelante</Title>
              <p>
                Excelante is the <Text strong>easiest</Text> way to play with data of xlsx files.
              </p>
            </Col>
            <Col span={14} className="desc-col2">
              <div className="image_illus" />
            </Col>
          </Row>
          <Layout style={{ background: '#00cba9' }}>
            <Button type="link" shape="round" icon={<ArrowDownOutlined />} size="large" style={{ color: '#fff' }} />
          </Layout>
          <Wave />
          <h2 id="tools">Tools</h2>
          <Writer />
          <Converter />
        </Content>
        <Footer />
      </Layout>
    </div>
  );
}
