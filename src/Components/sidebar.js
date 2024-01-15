import React from 'react'
import Barbuttons from './barbuttons'
import { MdSpaceDashboard } from "react-icons/md";
import { IoLibrary } from "react-icons/io5";
import { useEffect } from 'react';
import apiclient from '../spotify';

export default function Sidebar() {


  // useEffect(()=>{

  //   apiclient.get("me").then(response=>{
      
  //   })
  // },[])

  return (
    <div className='fixed top-0 left-0 h-screen w-16 m-0 flex flex-col text-white shadow-lg bg-purple-900'>
    
    <Barbuttons title="Feed" to="/feed" icon={<MdSpaceDashboard/>}/>
    <Barbuttons title="library" to="/" icon={<IoLibrary/>}/>
   
    

    </div>
  )
}
