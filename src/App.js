import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Text from './components/Text';
import About from './components/About';
import "./index.css"
import Alert from './components/Alert';
import { Routes, Route } from 'react-router-dom';
function App() {
  const [mode, setmode] = useState("light");
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      message: message,
      type: type,
    });
    setInterval(() => {
      setAlert(null);
    }, 3000);
  }
  const toggle = () => {
    if (mode === "light") {
      setmode("dark");
      document.body.style.backgroundColor = "black";
      showAlert("Dark mode is enable", "success");
    }
    else {
      setmode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode is enable", "success");
    }
  };

  const changedark = () => {
    if (mode === "light") {
      setmode("dark");
      document.body.style.backgroundColor = "#6c757d";
      showAlert("Dark mode is enable", "success");
    }
  };
  const changeWhite = () => {
    if (mode === "dark") {
      setmode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Dark mode is enable", "success");
    }
  };
  const changeBlack = () => {
    if (mode === "light") {
      setmode("dark");
      document.body.style.backgroundColor = "black";
      showAlert("Dark mode is enable", "success");
    }
  };
  return (

    <>
      <Navbar title="Text utility" About="About Us" mode={mode} toggle={toggle} changeBlack={changeBlack} changedark={changedark} changeWhite={changeWhite} />
      <Alert alert={alert} />
    <Routes>
      <Route path="/" element={<Text mode={mode} showAlert={showAlert} />} /> 
        <Route path="/about" element={<About mode={mode} />} />
      </Routes>
    </>

  );
}

export default App;
