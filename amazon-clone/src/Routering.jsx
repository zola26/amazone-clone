import React from 'react'
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Landing from './Pages/Landing/Landing'
import Auth from "./Pages/Auth/Auth";
import Payment from './Pages/Payment/Payment'
import Orders from './Pages/Orders/Order'
import Results from './Pages/Results/Results'
import Cart from './Pages/Cart/Cart'
import ProductDetail from './Pages/ProductDetail/ProductDetail'
const Routering = () => {
  return (
    <Router>
        <Routes>
            <Route path="/" element={<Landing/>}/>
            <Route path="/auth" element={<Auth/>}/>
            <Route path="/payment" element={<Payment/>}/>
            <Route path="/orders" element={<Orders/>}/>
            <Route path="/category/:categoryName" element={<Results/>}/>
            <Route path="/products/:productId" element={<ProductDetail/>}/>

            <Route path="/cart" element={<Cart/>}/>
        </Routes>
    </Router>
  )
}

export default Routering 
