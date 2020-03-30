import React from 'react';
import './App.css';

// imports my Components 
import Section from './components/Section';

//\

function App() {
  return (
    <div className="App">
      <Section fullscreen={true}></Section>
    </div>
  );
}

export default App;
