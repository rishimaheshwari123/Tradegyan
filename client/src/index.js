import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Provider } from 'react-redux'
import { BrowserRouter } from "react-router-dom"
import store from './redux/store';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ScrollToTop from './components/core/home/ScrollToTop';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
  <BrowserRouter>
    <Provider store={store}>
      <ToastContainer />
      <ScrollToTop />
      <App />
    </Provider>
  </BrowserRouter>
  // </React.StrictMode>
);


