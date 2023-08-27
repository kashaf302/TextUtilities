import React, { cloneElement } from 'react'
import { useNavigate } from 'react-router-dom'
export default function Home() {

  const navigate=useNavigate()

  return (
    <div className='text-center'>
      <h1>This is Home Page</h1>
      <button  onClick={() => navigate('/about',{state:{string:'I came from homepage'}})}>Go to About</button>
    </div>
  )
}
