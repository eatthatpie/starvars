import App from '@/components/App';
import createStore from '@/store';
import React from 'react';
import { Provider } from 'react-redux';
import { render } from 'react-dom';
import { createRouter, RouterProvider } from 'best-react-router';
import routes from './routes';

const store = createStore();

const router = createRouter({ routes });

render(
  <RouterProvider router={router}>
    <Provider store={store}>
      <App />
    </Provider>
  </RouterProvider>,
  document.getElementById('root')
);
