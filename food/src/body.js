import { useState } from "react";
import restaurantList from "./config";
import RestaurantCard from "./RestaurantCard";
const Body = () => {
    
    const [searchInput,setSearchInput] = useState("KFC")
    return (

        <>
            <div className="search-container">
                <input type="text" className="search-input" placeholder="Search"
                    value={searchInput}
                    onChange={(e) => {
                        setSearchInput(e.target.value)
                    }} 
                />
                <button>Search</button>

            </div>
            
        <div className="restaurant-list">
            {
                restaurantList.map((restaurant)=>{
                    return <RestaurantCard{...restaurant.data} key={
                        restaurant.data.id
                    }/>
                })
            }
        </div>
            </>
    );
};

export default Body;