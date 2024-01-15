
import React from 'react'
import { Link } from 'react-router-dom'

export default function Barbuttons(props) {
    
  return (

   
    
    <Link to={props.to}>
     
        <div className='relative flex items-centre justify-center h-4 w-4 mt-2 mb-2 mx-auto hover' >
        {props.icon}
            
        </div>
        <div className='relative flex items-centre justify-center h-12 w-12 mt-2 mb-2 mx-auto' >
      
            <p>{props.title}</p>
        </div>
    </Link>
    
    
  )
}
