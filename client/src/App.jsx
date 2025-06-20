import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Profile from './pages/Profile'
import SignIn from './pages/SignIn'
import SignUp from './pages/SignUp'
import Headers from './components/Headers'
import PrivateRoute from './components/PrivateRoute'
import CreateListing from './pages/CreateListing';
import UpdateListing from './pages/UpdateListing';
import Listing from './pages/Listing';
import Search from './pages/Search'
function App() {
  return (
    <>
     <BrowserRouter>
     <Headers/>
        <Routes>
          <Route  path='/' element={<Home/>} />
          <Route  path='/about' element={<About/>} />
          <Route element={<PrivateRoute/>} >
          <Route  path='/profile' element={<Profile/>} />
          </Route>
          
          <Route  path='/sign-in' element={<SignIn/>} />
          <Route  path='/sign-up' element={<SignUp/>} />
          <Route path='/create-listing' element={<CreateListing />} />
         <Route path='/update-listing/:listingId' element={<UpdateListing/>} />
         <Route path='/search' element={<Search />} />
         <Route path='/listings/:listingId' element={<Listing />} />
        </Routes>
    </BrowserRouter>
    </>
   
  )
}

export default App