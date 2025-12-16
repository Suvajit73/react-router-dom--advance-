import React from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import {Route, Routes} from 'react-router-dom'
import About from './pages/About'
import Contact from './pages/Contact'
import Notfound from './pages/Notfound'
import Product from './pages/Product'
import Men from './pages/Men'
import Women from './pages/Women'
import Kids from './pages/Kids'
import Course from './pages/Course'
import CourseDetails from './pages/CourseDetails'

const App = () => {
  return ( 
    <div className='h-screen bg-black text-white'>
      <Navbar/>

      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/contact' element={<Contact/>}/>

        {/* Dynamic Routing.............................................. */}
        <Route path='/course' element={<Course/>}/>
        <Route path='/course/:id' element={<CourseDetails/>}/>
       
        {/* Nested Routing.............................................. */}
        <Route path='/product' element={<Product/>}>
          <Route path='men' element={<Men/>}/>
          <Route path='women' element={<Women/>}/>
          <Route path='kids' element={<Kids/>}/>
        </Route>

        <Route path='*' element={<Notfound/>}/>
      </Routes>
      
      <Footer/>
    </div> 
  )
}

export default App