import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import App from './App';
import ProductInfo from './Components/Store/ProductInfo/ProductInfo';
import CartProvider from './Context/CartProvider';
import './index.css';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <CartProvider>
        <Routes>
          <Route path='/' element={<App />} />
          <Route path='products' element={<ProductInfo />} >
            <Route path=':productId' element={<ProductInfo />} />
          </Route>
        </Routes>

      </CartProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

