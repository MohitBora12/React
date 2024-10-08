import { IMG_CON_URL } from "./config"; 

const RestaurantCard = (

    {
        name,
        cuisines,
        cloudinaryImageId,
        lastMileTravelString,
    }) => {
    
    return (

        <div className='card'>
            <img src={IMG_CON_URL + cloudinaryImageId}></img>
            <h2>{name}</h2>
            <h3>{cuisines.join(', ')}</h3>
            <h4>{lastMileTravelString} stars</h4>
        </div>
    );
};

export default RestaurantCard;