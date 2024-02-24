import React from 'react';
import ReactDOM from 'react-dom/client';

import { ToastContainer } from './4-notificaciones-toast/toasts/components/toast-container.tsx';
import { MainRouter } from './5-tmdb/routers/main-router/main-router.tsx';

import './index.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ToastContainer />
    <MainRouter />
  </React.StrictMode>
);
