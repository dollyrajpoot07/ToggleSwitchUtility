import './App.css';
import React from 'react';
import ToggleSwitch from './toggleSwitch'

function App() {
  return (
    <div className="App">
      <h2>Toggle Switch</h2>
      <ToggleSwitch label="Dark mode"/>
      <ToggleSwitch label="Wifi"/>
    </div>
  );
}

export default App;
