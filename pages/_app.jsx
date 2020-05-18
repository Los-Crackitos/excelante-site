import React from 'react';
import { any, func, objectOf } from 'prop-types';
import '../styles/global.scss';

export default function Excelante({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

Excelante.propTypes = {
  Component: func.isRequired,
  pageProps: objectOf(any).isRequired,
};
