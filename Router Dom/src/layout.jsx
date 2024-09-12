import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from './components/navbar'
import Card from './components/card'

const Layout = () => {
  return (
    <>
    <Navbar />
    <Outlet />
    </>
  )
}

export default Layout