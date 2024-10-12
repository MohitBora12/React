import { useState } from "react";
import restaurantList from "./config";
import RestaurantCard from "./RestaurantCard";
function filterData(searchInput, restaurants) {
    
    const filteredData = restaurants.filter((restaurant) => 
        restaurant.data.name.includes(searchInput)
    );

    return filteredData;
}
const Body = () => {
    
    const [searchInput, setSearchInput] = useState("");
    const [restaurants, SetRestaurant] = useState(restaurantList);

    return (

        <>
            <div className="search-container">
                <input type="text" className="search-input" placeholder="Search"
                    value={searchInput}
                    onChange={(e) => {
                        setSearchInput(e.target.value)
                    }} 
                />
                <button 
                
                    onClick={() => {
                        
                        const data = filterData(searchInput, restaurants);

                        SetRestaurant(data);

                    }}
                >Search</button>

            </div>
            
        <div className="restaurant-list">
            {
                restaurants.map((restaurant)=>{
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