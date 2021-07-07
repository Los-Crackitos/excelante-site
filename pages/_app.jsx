import React from 'react';
import { any, func, objectOf } from 'prop-types';

const Excelante = ({ Component, pageProps }) => {
  return <Component {...pageProps} />;
};

Excelante.propTypes = {
  Component: func.isRequired,
  pageProps: objectOf(any).isRequired,
};

export default Excelante;
