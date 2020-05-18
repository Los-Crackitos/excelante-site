import React from 'react';
import Head from 'next/head';
import { Steps } from 'antd';

export default function Home() {
  const { Step } = Steps;

  return (
    <div className="container">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Steps>
        <Step title="first step" />
        <Step title="second step" />
        <Step title="third step" />
      </Steps>
    </div>
  );
}
