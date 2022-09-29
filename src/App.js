// import logo from './logo.svg';
import './App.css';
import About from './Component/About';
import Navbar from './Component/Navbar';
import Textform from './Component/Textform';

function App() {
  return (
    <>
      <Navbar title="TextUtils" home="Home" about="About_Us" />
      <div className="container">
        <Textform heading="Enter your Text below to analyse" heading2="Analysation" heading3="Preview"/>
      </div>
      <hr />
      <div className="container">
        <About />
      </div>
    </>
  );
}

export default App;
