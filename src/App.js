import React from 'react'
import Nav from './navigation/Navigation'
import Products from './products/Products'
import Recommended from './recommended/Recommended'
import Sidebar from "./sidebar/Sidebar"

const App = () => {
  return (
    <>
      <Sidebar />
      <Nav />
      <Recommended />
      <Products />
    </>
  )
}

export default App