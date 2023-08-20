import React, { useState } from 'react';
import './App.css';
// import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';

const heading ="Enter Text to Analyze"

function App() {
const [mode , setMode]=useState('light')
const toggleMode=()=>{

  if(mode==='light'){
    setMode('dark')
    document.body.style.backgroundColor='#042743'
}
else{
  setMode('light')
  document.body.style.backgroundColor='white  '

}
}
  return (
    <>
<Navbar title={"TextUtils"} mode={mode} toggleMode={toggleMode} />
<main className="container" my-5>

   <TextForm heading={heading} mode={mode} />
{/* <About /> */}
</main>

</>
  );
}

export default App;
