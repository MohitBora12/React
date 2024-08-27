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

const burgerking = {

    name: "Burger King",
    img: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2024/6/11/55d0daa1-ad2e-4893-be06-4709c5c68d49_41350.JPG",
    cusines: ["Burger", "American"],
    rating: "4.2",

}

const RestrauntCard = () => {
    
    return (

        <div className='card'>
            <img src={burgerking.img}></img>
            <h2>{burgerking.name}</h2>
            <h3>{burgerking.cusines.join(', ')}</h3>
            <h4>{burgerking.rating} stars</h4>
        </div>
    );
};
const Body = () => {
    
    return (
        <div className='Restraunt-list'>
            <RestrauntCard/>
            <RestrauntCard/>
            <RestrauntCard/>
            <RestrauntCard/>
            <RestrauntCard/>
            <RestrauntCard/>
            <RestrauntCard/>
            <RestrauntCard/>
            <RestrauntCard/>
            <RestrauntCard/>
            <RestrauntCard/>
            <RestrauntCard/>
            <RestrauntCard/>
            <RestrauntCard/>
            <RestrauntCard/>
            <RestrauntCard/>
        </div>
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
