/*  eslint-disable no-unused-vars */

import ReactDOM from 'react-dom';
import React from 'react';

const title = 'My Minimal React Webpack Babel Setup';

ReactDOM.render(
  <div>{title}</div>,
  document.getElementById('app'),
);
module.hot.accept();
