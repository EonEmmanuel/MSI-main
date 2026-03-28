import React from 'react'
import './App.css'
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom"
import { AuthProvider } from './context/AuthContext';
import { LanguageProvider } from './context/LanguageContext';
import Home from "./Pages/Home"
import Replay from "./Pages/Replay"
import Programs from "./Pages/Programs"
import About from "./Pages/About"
import Gallery from "./Pages/Gallery"
import Articles from "./Pages/Articles"
import FooterComponent from './Components/FooterComponent'
import Header from './Components/Header'

function App() {
  return (
    <>
      <LanguageProvider>
        <AuthProvider>
          <BrowserRouter>
            <Header />
              <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/programs' element={<Programs />} />
                <Route path='/replay' element={<Replay />} />
                <Route path='/about' element={<About />} />
                <Route path='/gallery' element={<Gallery />} />
                <Route path='/articles' element={<Articles />} />
              </Routes>
            <FooterComponent />
          </BrowserRouter>
        </AuthProvider>
      </LanguageProvider>
    </>
  )
}

export default App
