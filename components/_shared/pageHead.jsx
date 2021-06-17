import React from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';

const PageHead = ({ currentPageName }) => {
  return (
    <Head>
      <title>Excelante - {currentPageName}</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
  );
};
Head.propTypes = {
  currentPageName: PropTypes.string.isRequired,
};

export default PageHead;
