import './App.css';
import About from './Component/About';
import Navbar from './Component/Navbar';
import Textform from './Component/Textform';
import Alert from './Component/Alert';
import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

// Writing Functional Logics

function App(props) {

  const [mode, setMode] = useState('light');
  const [modeType, setModeType] = useState('Enable Dark Mode')
  const [alert, setAlert] = useState(null)

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark')
      setModeType('Enable Light Mode')
      document.body.style.backgroundColor = 'rgb(64, 64, 64)'
      showAlert("Dark Mode is Enabled !!", "success")

    }
    else {
      setMode('light')
      setModeType('Enable Dark Mode')
      document.body.style.backgroundColor = 'white'
      showAlert("Light Mode is Enabled !!", "success")
    }
  }

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null)
    }, 1500);
  }

  return (
    <>
      <Router>
      <Navbar title="TextUtils" home="Home" about="About_Us" mode={mode} toggleMode={toggleMode} Type={modeType} />
      <Alert alert={alert} />
      <div className="container">
        <Routes>
        <Route exact path="/" element={<Textform heading="Enter your Text below to analyse" heading2="Analysation" heading3="Preview" mode={mode} showAlert={showAlert} />}></Route>
        {/* <Textform heading="Enter your Text below to analyse" heading2="Analysation" heading3="Preview" mode={mode} showAlert={showAlert} /> */}
        <Route exact path="/about" element={<About />}></Route>
        </Routes>
      </div>
      </Router>
    </>
  );
}

export default App;