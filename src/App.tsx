import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Menu from './components/Menu/Menu';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header/>
      <Menu></Menu>
      <Footer/>
    </div>
  );
}

export default App;
