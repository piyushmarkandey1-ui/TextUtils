import React, { useState } from 'react';
import './App.css';
import Navbar from './component/navbar';
import TextForm from './component/TextForm';
import Alert from './component/Alert';
/**import About from './component/About';**/

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
    } else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showalert("Light mode has been enabled","success")
    }
  };

  return (
    <>
      <Navbar
  title="Textutils"
  mode={mode}
  changeTheme={changeTheme}
  toggleMode={toggleMode}
/>
      <Alert alert={alert} mode={mode} />
      <div className="container">
        <TextForm showalert={showalert} heading="Enter the text to analyze" mode={mode} />
      </div>
      {/* <About /> */}
    </>
  );
}

export default App;
