import React from 'react'
import { useNavigate } from 'react-router-dom';

const About = () => {

  let navigate = useNavigate();
  // const btnClick =()=>{
  //   navigate('/');
    
  // }

  return (
    <div>
      <button onClick={()=>{
        navigate('/')
      }} className='bg-blue-700 py-3 px-10 text-2xl m-5 rounded-2xl font-bold cursor-pointer active:scale-95 '>Return To Home</button>
      

      <button onClick={()=>{
        navigate(-1)
      }} className='bg-blue-700 py-3 px-10 text-2xl m-5 rounded-2xl font-bold cursor-pointer active:scale-95 '>Back</button>


      <button onClick={()=>{
        navigate(+1)
      }} className='bg-blue-700 py-3 px-10 text-2xl m-5 rounded-2xl font-bold cursor-pointer active:scale-95 '>Next</button>

      <h1>About</h1>
    </div>
  )
}

export default About