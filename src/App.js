import React from 'react';
//bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
//components
import Header from './Components/Header/Header';
import About from './Components/About/About';
import Store from './Components/Store/Store';
import Gallery from './Components/Gallery/Gallery';
import Footer from './Components/Footer/Footer';
import CartProvider from './Context/CartProvider';
//React Router
//style
import './App.scss';
import ProductInfo from './Components/Store/ProductInfo/ProductInfo';

function App() {
  return (
    <div className="App">
      <Header />
      <About />
      <Store />
      <Gallery />
      <Footer />
    </div>
  );
}

export default App;
