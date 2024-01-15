import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import apiclient from '../spotify'
import { useState } from 'react'
import Audioplayer from './audioplayer'


export default function Player() {

 const location=useLocation();

 const [tracks, setTracks] = useState([]);
  const [currentTrack, setCurrentTrack] = useState({});
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (location.state) {
      apiclient
        .get("playlists/" + location.state?.id + "/tracks")
        .then((res) => {
          setTracks(res.data.items)
          setCurrentTrack(res.data?.items[0]?.track)
          console.log(tracks)
        });
    }
  }, [location.state]);

  return (
    <div className="screen-container flex">
    <div className="left-player-body">
        <Audioplayer
       trackUri={currentTrack.uri}
      
        currentTrack={currentTrack}
        total={tracks}
        currentIndex={currentIndex}
        setCurrentIndex={setCurrentIndex}
      />  
         </div>
  </div>
  )
}
