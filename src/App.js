import React, { useState } from 'react';
import './App.css';
import Navbar from './component/navbar';
import TextForm from './component/TextForm';
import Alert from './component/Alert';
import About from './component/About';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

// Centralized theme definitions — single source of truth for all components
export const themes = {
  dark: {
    bg: '#0d1117',
    surface: '#161b22',
    text: '#e6edf3',
    subtext: '#8b949e',
    accent: '#58a6ff',
    border: '#30363d',
    navBg: 'linear-gradient(135deg, #0d1117 0%, #161b22 100%)',
    btnClass: 'btn-outline-light',
    label: '🌙 Dark',
  },
  light: {
    bg: '#f6f8fa',
    surface: '#ffffff',
    text: '#1f2328',
    subtext: '#636c76',
    accent: '#0969da',
    border: '#d0d7de',
    navBg: 'linear-gradient(135deg, #ffffff 0%, #f6f8fa 100%)',
    btnClass: 'btn-outline-dark',
    label: '☀️ Light',
  },
  purple: {
    bg: '#0e0018',
    surface: '#1a0030',
    text: '#e9d8fd',
    subtext: '#b794f4',
    accent: '#d6bcfa',
    border: '#553c9a',
    navBg: 'linear-gradient(135deg, #0e0018 0%, #2d1b69 100%)',
    btnClass: 'btn-outline-light',
    label: '💜 Purple',
  },
  ocean: {
    bg: '#001f3f',
    surface: '#002f5f',
    text: '#e0f4ff',
    subtext: '#7ecff5',
    accent: '#00c8ff',
    border: '#0a4f7a',
    navBg: 'linear-gradient(135deg, #001f3f 0%, #0a4f7a 100%)',
    btnClass: 'btn-outline-light',
    label: '🌊 Ocean',
  },
  sunset: {
    bg: '#1a0a00',
    surface: '#2d1000',
    text: '#ffe8cc',
    subtext: '#ffb347',
    accent: '#ff7518',
    border: '#7a3200',
    navBg: 'linear-gradient(135deg, #1a0a00 0%, #7a2800 100%)',
    btnClass: 'btn-outline-light',
    label: '🌅 Sunset',
  },
  forest: {
    bg: '#071a0e',
    surface: '#0d2b18',
    text: '#d4edda',
    subtext: '#81c784',
    accent: '#4caf50',
    border: '#1b5e20',
    navBg: 'linear-gradient(135deg, #071a0e 0%, #1b5e20 100%)',
    btnClass: 'btn-outline-light',
    label: '🌲 Forest',
  },
};

function App() {
  const [mode, setMode] = useState('dark');

  const changeTheme = (theme) => {
    setMode(theme);
    const t = themes[theme];
    document.body.style.backgroundColor = t.bg;
    document.body.style.transition = 'background-color 0.4s ease';
  };

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
      changeTheme('dark');
      showalert("Dark mode has been enabled","success")
    } else {
      changeTheme('light');
      showalert("Light mode has been enabled","success")
    }
  };

  return (
    <>
    <Router>
      <Navbar
        title="Textutils"
        aboutText="About"
        mode={mode}
        themes={themes}
        changeTheme={changeTheme}
        toggleMode={toggleMode}
      />
      <Alert alert={alert} mode={mode} />
       <div className="con">
       <Routes>
  <Route exact path="/about" element={<About mode={mode} themes={themes} />} />

  <Route
    exact path="/"
    element={
      <TextForm
        showalert={showalert}
        heading="Enter the text to analyze"
        mode={mode}
        themes={themes}
      />
    }
  />
</Routes>
       </div>
     
     </Router>
    </>
  );
}

export default App;
