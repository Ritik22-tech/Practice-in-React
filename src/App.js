// import logo from './logo.svg';
import './App.css';
import About from './Component/About';
import Navbar from './Component/Navbar';
import Textform from './Component/Textform';
import React, { useState } from 'react';

function App(props) {

  const [mode, setMode] = useState('light');
  const [modeType, setModeType] = useState('Enable Dark Mode')

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark')
      setModeType('Enable Light Mode')
      document.body.style.backgroundColor = 'rgb(64, 64, 64)'
    }
    else {
      setMode('light')
      setModeType('Enable Dark Mode')
      document.body.style.backgroundColor = 'white'
    }
  }

  return (
    <>
      <Navbar title="TextUtils" home="Home" about="About_Us" mode={mode} toggleMode={toggleMode} Type={modeType} />
      <div className="container">
        <Textform heading="Enter your Text below to analyse" heading2="Analysation" heading3="Preview" mode={mode} />
      </div>
      <hr />
      <div className="container">
        <About />
      </div>

    </>
  );
}

export default App;
