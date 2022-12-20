import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { MyThemeProvider } from './contexts/ThemeContext';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
    <BrowserRouter>

      <MyThemeProvider>
        <App />
      </MyThemeProvider>

    </BrowserRouter >
  </React.StrictMode >
);