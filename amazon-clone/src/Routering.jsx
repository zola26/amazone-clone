import React from 'react'
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Landing from './Pages/Landing/Landing'
import Auth from "./Pages/Auth/Auth";
import Payment from './Pages/Payment/Payment'
import Orders from './Pages/Orders/Order'
import Results from './Pages/Results/Results'
import Cart from './Pages/Cart/Cart'
import ProductDetail from './Pages/ProductDetail/ProductDetail'
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import ProtectedRoute from './Components/ProtectedRoute/ProtectedRoute';

const stripePromise = loadStripe('pk_test_51PuEj0JhYJFkLUiASkg3NfI9E3VmK4RsPtZqi4Z4Nj4EIGP2HSAoufJj1pVsVr4Ekp42I8ZcHHglGgYd9nuafCzA00NSKSJblz');
const Routering = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/auth" element={<Auth />} />
        <Route
          path="/payments"
          element={
            <ProtectedRoute msg={"You must login to Pay"} redirect={"/payments"}>
              <Elements stripe={stripePromise}>
                <Payment />
              </Elements>
            </ProtectedRoute>
          }
        />
        <Route path="/orders" element={
           <ProtectedRoute msg={"You must login to See your Orders"} redirect={"/orders"}>
              <Elements stripe={stripePromise}>
                 <Orders />
              </Elements>
            </ProtectedRoute>
         } />
        <Route path="/category/:categoryName" element={<Results />} />
        <Route path="/products/:productId" element={<ProductDetail />} />

        <Route path="/cart" element={<Cart />} />
      </Routes>
    </Router>
  );
}

export default Routering 
