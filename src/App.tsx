import React from 'react';
import './App.css';

import Header from './component/layout/Header';
import Content from './component/layout/Content';
import Footer from './component/layout/Footer';


function App() {

  return (
    <div className="App ">
      <Header></Header>
      <Content></Content>
      <Footer></Footer>
    </div>
  );
}

export default App;
