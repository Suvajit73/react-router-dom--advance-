import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='flex justify-between items-center px-10 py-5 bg-cyan-800'>
      <h2 className='text-3xl font-bold'>Suvajit</h2>
      <div className='flex justify-between items-center gap-10 text-xl font-bold'>
        <Link to='/'>Home</Link>
        <Link to='/about'>About</Link>
        <Link to='/contact'>Contact</Link>
        <Link to='/product'>Product</Link>
        <Link to='/course'>Course</Link>
      </div>
    </div>
  )
}

export default Navbar