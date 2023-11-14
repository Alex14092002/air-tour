import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import { Routes , Route } from 'react-router-dom'
import Home from './pages/Home'
import LoginPage from './pages/LoginPage'
import RegisterPage from './pages/RegisterPage'
import DetailTour from './pages/DetailTour'
import MainTour from './pages/MainTour'
import ProfilePage from './pages/ProfilePage'

function App() {

  return (
    <>
   
     <Header/>
      <Routes>
        <Route path='/'  element={<Home/>} />
        <Route path='/login' element={<LoginPage/>}/>
        <Route path='/register' element={<RegisterPage/>}/>
        <Route path='/detail/:id' element={<DetailTour/>}/>
        <Route path='/maintour/:id' element={<MainTour/>}/>
        <Route path='/managerUser/:id' element={<ProfilePage/>}/>
      </Routes>
     
     <Footer/>
    </>
  )
}

export default App
