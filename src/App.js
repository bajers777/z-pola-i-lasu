import React from 'react';
//bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
//components
import Header from './Components/Header/Header';
import About from './Components/About/About';
import Store from './Components/Store/Store';
import Gallery from './Components/Gallery/Gallery';
function App() {
  return (
    <div className="App">
      <Header />
      <About />
      <Store />
      <Gallery />
    </div>
  );
}

export default App;
