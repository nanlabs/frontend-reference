import React from 'react';
import { createRoot } from 'react-dom/client';

import { AppErrorBoundary } from '@/components/ErrorBoundary';
import reportWebVitals from '@/report-web-vitals';
import { setupGlobalErrorHandlers } from '@/utils/report-error';
import App from '@/App';

setupGlobalErrorHandlers();

const root = createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
    <AppErrorBoundary>
      <App />
    </AppErrorBoundary>
  </React.StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals(console.log);
