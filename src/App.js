import React, { useState } from 'react';
import './App.css';
// import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
const heading ="Enter Text to Analyze"

function App() {
const [mode , setMode]=useState('light')
const [alert , setAlert] = useState(null)
const showAlert = (message, type)=>{
   setAlert({
    msg : message ,
    type : type,
   })
  
   setTimeout(()=>{
    setAlert(null);

   }, 2000)
  }
const toggleMode=()=>{

  if(mode==='light'){
    setMode('dark')
    document.body.style.backgroundColor='#042743'
    showAlert("Dark Mode has been enabled" , "success")
}
else{
  setMode('light')
  document.body.style.backgroundColor='white  '
  showAlert("Light Mode has been enabled" , "success")

}
}

const purpleMode=()=>{

  if(mode==='light'){
    setMode('dark')
    document.body.style.backgroundColor='#042743'
    showAlert("Dark Mode has been enabled" , "success")
}
else{
  setMode('light')
  document.body.style.backgroundColor='white  '
  showAlert("Light Mode has been enabled" , "success")

}
}



  return (
  <>
<Navbar title={"TextUtils"} mode={mode} toggleMode={toggleMode} purpleMode={purpleMode}  />
<Alert alert = {alert} />
<main className="container" my-5>

   <TextForm heading={heading} mode={mode} showAlert={showAlert}  />
{/* <About /> */}
</main>

</>
  );
}

export default App;
