import './App.css';
import Alert from './components/Alert';
import Navbar from './components/Navbar'
//import About from './components/Aboutus';
import Textform from './components/Textform'
import React, {useState} from 'react'
// import {
//   BrowserRouter as Router,
//   Route,
//   //Link,
//   Routes
// } from "react-router-dom";

function App() {

  const[alert,setalert]=useState(null);
  const showalert=(msg,type)=>{
      setalert({
        message:msg,
        type:type
      })
      setTimeout(() => {
        setalert(null);
      }, 1500);
  }
  
  const[mode,setMode]=useState('light');
  const tooglemode=()=>{
    if(mode === 'dark'){
      setMode('light');
      document.body.style.backgroundColor='white';
      showalert("Light mode activated","success");
      document.title="Textutils Light Mode";
    }
    else{
      setMode('dark');
      document.body.style.backgroundColor='#042743';
      showalert("Dark mode activated","success");
      document.title="Textutils Dark Mode";
    }
  }
  return (
    <>
      {/* <Router> */}
        <Navbar title="TextUtils" mode={mode} tooglemode={tooglemode}/> 
        <Alert alert={alert}/>

        <div className="container">
          {/* <Routes>
            <Route path="/about" element={<About />} /> }
            <Route path="/" element={<Textform showalert={showalert} heading="Enter your text to analyze:" mode={mode} />} />
          </Routes> */}
          <Textform showalert={showalert} heading="Enter your text to analyze:" mode={mode} />
        </div>
      {/* </Router> */}

    </>
  );
}

export default App;
