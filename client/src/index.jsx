import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import store from './redux/store';
import App from './App';
import './index.scss'

const root = document.getElementById('root');

const renderApp = () => {
  createRoot(root).render(
    <Provider store={store}>
      <App />
    </Provider>
  );
};

renderApp();