import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NotFound from './pages/404';
import About from './pages/about';
import Home from './pages/home';
import Movie from './pages/movie';
import Schedule from './pages/schedule';
import Search from './pages/search';


export default function Router() {
  return (
    <BrowserRouter>
        <Routes>
            <Route exact path="/404" element={<NotFound />} />
            <Route exact path="/" element={<Home />} />
            <Route exact path="/movie" element={<Movie />} />
            <Route exact path="/schedule" element={<Schedule />} />
            <Route exact path="/search" element={<Search />} />
            {/* <Route exact path="/vehicles/details/:name" element={<DetailVehicles />} /> */}
            <Route exact path="/about" element={<About />} />
        </Routes>
    </BrowserRouter>
  )
}
