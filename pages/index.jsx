import React from 'react';
import { Col, Layout, PageHeader, Row, Typography } from 'antd';
import Navbar from '../components/navbar.jsx';
import Converter from '../components/converter.jsx';
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
          <div className="description">
            <Row gutter={[40, 0]}>
              <Col span={10} className="desc-col1">
                <Title>Excelante</Title>
                <p>
                  Excelante is the
                  <Text strong>easiest</Text>
                  way to play with data of xlsx files.
                </p>
              </Col>
              <Col span={14} className="desc-col2">
                <div className="image_illus" />
              </Col>
            </Row>
          </div>
          <Wave />
          <PageHeader title="Convert file" />
          <Converter />
        </Content>
        <Footer />
      </Layout>
    </div>
  );
}
