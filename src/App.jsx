import React from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from './pages/Home'
import Search from './pages/Search'
import Liked from './pages/Liked'
import Playlist from './pages/Playlist'
import Nav from './components/Nav'

const App = () => {
  return (
    <BrowserRouter>
    <Nav/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/search' element={<Search/>}/>
      <Route path='/liked' element={<Liked/>}/>
      <Route path='/playlist' element={<Playlist/>}/>
    </Routes>
    </BrowserRouter>
  )
}

export default App
