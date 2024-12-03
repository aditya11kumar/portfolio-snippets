import React from 'react';
import {useNavigate} from 'react-router-dom';

export default function NoPage() {
    const navigate = useNavigate()
    const handleNavigate = function(){
        navigate('/')
    }
    
  return (
    <div>
      <p onClick ={handleNavigate} style={{cursor:'pointer'}}>This is a invalid route. Please prpceed to HomePage</p>
    </div>
  )
}
