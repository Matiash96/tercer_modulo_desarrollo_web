import React from 'react'
import './App.css'
import { NavBar } from './components/NavBar/NavBar';
import { ProductListCanias } from './components/ProductListCanias/ProductListCanias'
import { ProductListReeles } from './components/ProductListReeles/ProductListReeles'
import { Dolar } from './components/Dolar/Dolar'
import { Contacto } from './components/Contacto/Contacto'

import {
  BrowserRouter as Router,
  Route,
  Routes
} from 'react-router-dom';


function App() {
  return (
    <Router>
      <NavBar/>
      <Dolar/>
      <Routes>
        <Route exact path="/" element={<ProductListCanias/> }/>
        <Route exact path="/canias" element={<ProductListCanias/> }/>
        <Route exact path="/reeles" element={<ProductListReeles/> }/>
      </Routes>
      <Contacto/>
    </Router>
  )
}

export default App
