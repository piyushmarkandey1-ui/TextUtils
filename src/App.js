import React, { useState } from 'react';
import './App.css';
import Navbar from './component/navbar';
import TextForm from './component/TextForm';
/**import About from './component/About';**/

function App() {
  const [mode, setMode] = useState('light');

  const toggleMode = () => {
    setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
  };

  return (
    <>
      <Navbar title="Textutils" mode={mode} toggleMode={toggleMode} />
      <div className="container">
        <TextForm heading="Enter the text to analyze" />
      </div>
      {/* <About /> */}
    </>
  );
}

export default App;
