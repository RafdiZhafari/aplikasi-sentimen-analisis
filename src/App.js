//import './coba'
//import Car from './coba';
//import react from 'react';
import './projekSib.css'
import React, { useState,useEffect } from 'react';

function App(){
  const [status,setStatus] = useState('positif');
  const [currentTime, setCurrentTime] = useState(0);
  function handleButton (event){
    event.preventDefault();
    if(status=='positif'){
      setStatus('negatif')
    }else{
      setStatus('positif')
    }
  } 
  useEffect(()=>{
    //document.title="Projek SIB";
    fetch('/time').then(res => res.json()).then(data =>{
      setCurrentTime(data.time);
    });
  },[]);
  return (
    <div>
        <div id="header-bg">
            <h1 className="header">Projek Sib</h1>
        </div>
        <div id="input-form">
            <h2 id="app-desc">Deteksi Sentimen Analisis</h2>
            <div id="form-box0">
                <form action=""  method="post" id="form-box" onSubmit={handleButton}>
                    <textarea name="input" id="input-text" cols="30" rows="10"></textarea>
                    <p id="output">{status}</p>
                    <button type="submit" id="input-submit" >Cek</button>
                    <p>{currentTime}</p>
                </form>
            </div>
        </div>
    </div>
  )
}
//<p>Mobil saya mereknya {mobil}</p>
export default App;