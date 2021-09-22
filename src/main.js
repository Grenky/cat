import React from "react";
import './mainstyle.css';
import Cat from './images/depositphotos_31562029-stock-photo-black-cat-cartoon-illustration.jpg';
const Main = (props) => {
    return (
        <div className="main wrapper">
            <div className="main__content">
                <h1 className="title">cats facts</h1>
                <img src={Cat} className="Cat" alt="Cat"></img> 
                <p className="facts">{props.fact}</p>
                <a href="javascript-required" className="btn" onClick={"history.go(-1);return false;"}>Refresh</a>
            </div>
        </div>
    )
}

export default Main;

