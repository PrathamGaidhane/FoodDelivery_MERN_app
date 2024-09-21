import React, { useState } from 'react'
import Navbar from './components/navbar/navbar'
import { Route, Routes } from 'react-router-dom'
import PlaceOrder from './views/PlaceOrder/placeorder'
import Home from './views/Home/home.jsx'
import Cart from './views/cart/cart'
import Footer from './components/footer/footer.jsx'
import Loginpopup from './components/loginpopup/loginpopup.jsx'
import Verify from './views/verify/verify.jsx'
import Myorders from './views/myorders/myorders.jsx'

const App = () => {

  const [showlogin,setShowlogin]=useState(false)

  return (
    <>
     {showlogin?<Loginpopup setShowlogin={setShowlogin}/>:<></>}
      <div className='app'>
        <Navbar setShowlogin={setShowlogin}/>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/order' element={<PlaceOrder />} />
          <Route path='/verify' element={<Verify/>}/>
          <Route path='/myorders' element={<Myorders/>}/>
        </Routes>
      </div>
      <Footer />
    </>
  )
}

export default App