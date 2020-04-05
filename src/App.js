import React from 'react';
import './App.css';
import Header from './components/header/Header';
import 'typeface-roboto';



function App({children}) {
  return (
    <div className="App">
      <Header headerInitialHeight={80}></Header>
      {children}
      {/* <Section fullscreen={true}></Section> */}
    </div>
  );
}

export default App;
