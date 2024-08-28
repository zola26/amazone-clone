import React from 'react'
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Landing from './Pages/Landing/Landing'
import SignIn from './Pages/Auth/Signup'
import Payment from './Pages/Payment/Payment'
import Orders from './Pages/Orders/Order'
import Cart from './Pages/Cart/Cart'
const Routering = () => {
  return (
    <Router>
        <Routes>
            <Route path="/" element={<Landing/>}/>
            <Route path="/auth" element={<SignIn/>}/>
            <Route path="/payment" element={<Payment/>}/>
            <Route path="/orders" element={<Orders/>}/>
            <Route path="/cart" element={<Cart/>}/>
        </Routes>
    </Router>
  )
}

export default Routering 
