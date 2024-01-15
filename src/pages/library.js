import React from 'react'
import apikit from '../spotify'
import { useEffect,useState } from 'react';
import "./style.css"
import { useNavigate } from 'react-router-dom';

export default function Library() {
 
  const [playlists, setPlaylists] = useState(null);


  useEffect(() => {
    apikit.get("me/playlists").then(function (response) {
      setPlaylists(response.data.items);
    });
  }, []);

  const navigate=useNavigate();

 const playPlaylist=(id)=>{
     navigate('./player',{state:{id:id}})
 }


  return (
   
  
    <div className="screen-container">
    <div className='library-body'>
    {playlists?.map((playlist)=>(
         <div className='playlist-card' id={playlist.id} onClick={()=>playPlaylist(playlist.id)}>
         <img className="playlist-image" src={playlist.images[0].url} alt=""></img>
         <p className="playlist-title">{playlist.name}</p>
         
         </div>
    ))}
    </div>
    </div>
  )
}
