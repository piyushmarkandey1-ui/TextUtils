import React, { useState } from 'react';
import './App.css';
import Navbar from './component/navbar';
import TextForm from './component/TextForm';
import Alert from './component/Alert';
import About from './component/About';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  const [mode, setMode] = useState('dark');

  const changeTheme = (theme) => {
  setMode(theme);

  if(theme==="red"){
    document.body.style.backgroundColor="#5c0000";
  }
  else if(theme==="green"){
    document.body.style.backgroundColor="#003d1f";
  }
  else if(theme==="blue"){
    document.body.style.backgroundColor="#001f4d";
  }
  else if(theme==="dark"){
    document.body.style.backgroundColor="#042743";
  }
  else{
    document.body.style.backgroundColor="white";
  }
}

  const [alert,setAlert] = useState(null);

  const showalert=(message,type)=>{
   setAlert({
    msg:message,
    type:type

   })
   setTimeout(() => {
    setAlert(null)
  },2000)
}

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      showalert("Dark mode has been enabled","success")
      document.title = "Textutils - Dark Mode";
      setInterval(() => {
        document.title = "Textutils is amazing";
      }, 2000);
      setInterval(() => {
        document.title = "Install Textutils now";
      }, 1500);
    } else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showalert("Light mode has been enabled","success")
      document.title = "Textutils - Light Mode";
    }
  };

  return (
    <>
    <Router>
      <Navbar
  title="Textutils"
  mode={mode}
  changeTheme={changeTheme}
  toggleMode={toggleMode}
/>
      <Alert alert={alert} mode={mode} />
       <Switch>
          <Route path="/about">
            <About />
          </Route>
         
          <Route path="/">
            <TextForm showalert={showalert} heading="Enter the text to analyze" mode={mode} />
          </Route>
        </Switch>
      <div className="container">
       
      </div>
     </Router>
    </>
  );
}

export default App;
