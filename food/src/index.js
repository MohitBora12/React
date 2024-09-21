import React from 'react';
import ReactDOM from 'react-dom/client';
import Body from './body'
import Footer from './footer';
import Header from './header';
import './index.css';

import img from "../src/logo.jpg"

export const Title = () => {
    return (

        <a href="/">

            <img className="logo" alt="logo" src={img} />
        </a>
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



