import React from 'react'
import { BrowserRouter,Route,Routes } from 'react-router-dom'
import MovieDetails from '../components/MovieDetails/MovieDetails'
import Home from '../components/Home/Home'
import Page404 from '../components/Page404/Page404'
import Footer from '../components/Footer/Footer'
import Header from '../components/Header/Header'

const Layout = () => {
  return (
   <div className="app">
        <BrowserRouter>
        <Header/>
            <Routes>         
                <Route path="/" element={<Home />} />
                <Route path="/movie/:id" element={<MovieDetails />} />
                <Route path='*' element={<Page404/>} /> 
            </Routes>
            <Footer/>
        </BrowserRouter>
   </div>
  )
}

export default Layout