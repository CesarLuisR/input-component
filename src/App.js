import React from 'react';
import "./App.css";
import Inputs from './components/layout/Inputs/Inputs';
import Menu from './components/layout/Menu/Menu';

const App = () => {
  return (
    <div className="App">
      <Menu />
      <Inputs />
    </div>
  )
}

export default App
