import React from 'react';
//bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
//components
import Header from './Components/Header/Header';
import About from './Components/About/About';
import Store from './Components/Store/Store';
function App() {
  return (
    <div className="App">
      <Header />
      <About />
      <Store />
    </div>
  );
}

export default App;
