import React from 'react'
import Nav from './navigation/Navigation'
import Products from './products/Products'
import Recommended from './recommended/Recommended'

const App = () => {
  return (
    <>
      <Nav />
      <Recommended />
      <Products />
    </>
  )
}

export default App