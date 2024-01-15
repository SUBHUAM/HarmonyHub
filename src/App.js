import './App.css';
import Login from './login';
import { useState,useEffect } from 'react';
import apiclient, { setclientToken } from './spotify';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import Library from './pages/library';
import Feed from './pages/feed';
import Sidebar from './Components/sidebar';
import Player from './Components/player';
import logo from './musix-logo.png'

function App() {

  const [token,setToken]=useState("")
  


  useEffect(()=>{
  
  
  const hash=window.location.hash
  
  if(!token && hash){
  const tok=hash.split('&')[0].split('=')[1]
  window.localStorage.setItem("token",tok)
  setToken(tok);
  setclientToken(tok);

  }
  else{
    setToken(token);
    setclientToken(token);
  }
  


  },[])
  

  return (
    
   !token?(<Login/>):
   
   

    <div className="App">
    <Sidebar/>
    <img className="logo" src={logo}></img>
 
      <Routes>
        <Route path="/" element={<Library/>}></Route>
        <Route path="/feed" element={<Feed/>}></Route>
        <Route path="/player" element={<Player/>}> </Route>
      </Routes>
    
    </div>
  );
}

export default App;
