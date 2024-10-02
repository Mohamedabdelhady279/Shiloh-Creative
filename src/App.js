import React, { useState, useEffect,createContext } from 'react'
import ScaleLoader from "react-spinners/ScaleLoader"
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Home'
import About from './About'
import Contact from './Contact'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Nav1 from './Nav1';
import Imagesss from './Imagesss';
import Process from './Process';
import Webflow from './Webflow';
import Footer from './Footer';

const App = () => {


  const [loading, setloading] = useState(false);
  useEffect(() => {
    setloading(true);
    setTimeout(() => {
      setloading(false);
    }, 2000)
  }, [])

  
  return (


    <BrowserRouter className='mohamed' >
      
      {
        loading ?

          <div className='ScaleLoader'><ScaleLoader color='#e1b562' width={8} height={140} /></div> :
          <>

            <Routes>
              <Route path="/" element={<Nav1 />} />
            </Routes>
          <Home/>
          <Imagesss/>
          <Process/>
          <Webflow/>
          <Contact/>
          <Footer/>


          </>
      }

      
    </BrowserRouter>



  )
}

export default App