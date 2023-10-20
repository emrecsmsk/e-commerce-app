import React from 'react'
import "./Colors.css"

const Colors = () => {
    return (
        <div>
            <h2 className="sidebar-title price-title">Color</h2>
            <label htmlFor="" className="sidebar-label-container">
                <input type="radio" name="test3" />
                <span className="checkmark"></span>All
            </label>
            <label htmlFor="" className="sidebar-label-container">
                <input type="radio" name="test3" />
                <span className="checkmark"></span>Black
            </label>
            <label htmlFor="" className="sidebar-label-container">
                <input type="radio" name="test3" />
                <span className="checkmark"></span>Blue
            </label>
            <label htmlFor="" className="sidebar-label-container">
                <input type="radio" name="test3" />
                <span className="checkmark"></span>Red
            </label>
            <label htmlFor="" className="sidebar-label-container">
                <input type="radio" name="test3" />
                <span className="checkmark"></span>Green
            </label>
            <label htmlFor="" className="sidebar-label-container">
                <input type="radio" name="test3" />
                <span className="checkmark"></span>White
            </label>
        </div>
    )
}

export default Colors