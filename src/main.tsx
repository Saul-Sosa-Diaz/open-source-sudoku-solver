import React from 'react';
import ReactDOM from 'react-dom/client';
import { HomeScreen } from './HomeScreen';
import { globalStyles } from './stitches.config';

globalStyles();

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <HomeScreen />
  </React.StrictMode>
);

