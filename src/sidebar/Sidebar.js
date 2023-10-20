import React from 'react'
import "./Sidebar.css"
import Category from "./category/Category"
import Price from "./price/Price"
import Color from "./colors/Colors"

const Sidebar = () => {
    return (
        <section className="sidebar">
            <div className="logo-container">
                <h1>🛒</h1>
            </div>
            <Category />
            <Price />
            <Color />
        </section>
    )
}

export default Sidebar