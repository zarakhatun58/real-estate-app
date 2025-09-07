import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Home from './pages/Home';
import Listings from './pages/Listings';
import Login from './pages/Login';
import Signup from './pages/Signup';
import { useAuth } from './context/AuthContext';
import Buy from './components/Buy';
import Navbar from './components/ui/Navbar';
import Footer from './components/ui/Footer';

export default function App(){
  const { user } = useAuth();
  return (
    <div className="app">
      <Navbar />
      <main style={{minHeight: '100vh'}}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/listings" element={<Listings />} />
          <Route path="/buy" element={<Buy />} />
          <Route path="/login" element={user ? <Navigate to="/" /> : <Login />} />
          <Route path="/signup" element={user ? <Navigate to="/" /> : <Signup />} />
          <Route path="*" element={<Navigate to='/' />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}
