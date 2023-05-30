import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'

import { HeaderNav } from '../components/layout/HeaderNav'
import { Principal } from '../components/Principal'
import React from 'react'

export const Router = () => {
  return (
    <BrowserRouter >
    {/*Header y Navegacion*/}
    <HeaderNav/>
    {/*Contenido Central */}
    <section className='content'>
        <Routes>
            <Route path='/' element={<Navigate to={'/inicio'} />} />
            <Route path='/inicio' element={<Principal/>} />
            
            <Route path='/error' element={<div className='page'><h1 className='heading'>Error 404</h1></div>} />
        </Routes>
    </section>
    {/*Footer */}
   
</BrowserRouter>
  )
}
