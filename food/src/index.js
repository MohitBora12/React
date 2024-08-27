import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import img from "../src/logo.jpg"

const Title = () => (
    
    <a href="/">

    <img className="logo" alt="logo" src={img} />
    </a>
);

const Header = () => {

    return (
        <div className='header'>
            <Title /> 
            <div className='nav-items'>

            <ul>
                <li>Home</li>
                <li>About</li>
                <li>Contact</li>
                <li>Cart</li>
            </ul>
            </div>
        </div>
        
    );
};
const Body = () => {
    
    return (
        <h4>BODY</h4>
    );
};
const Footer = () => {
    
    return (
        <h4>Footer</h4>
    );
};

const AppLayout = () => {
    return (
        <>
            <Header />
            <Body />
            <Footer />
        </>  
  );
};
const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(<AppLayout />)
