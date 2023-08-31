/* eslint-disable no-restricted-globals */
import React from "react";

const SideMenu = ( {setShowFavourites} ) => {
    const onFavouriteClick = (event) =>{
        event.preventDefault();
        setShowFavourites(true);
    }
    const onImagesClick = (event) => {
        event.preventDefault();
        setShowFavourites(false);
    }
    return(
        <div className="sideBar">
            <button onClick={onFavouriteClick}>Favourites</button>
            &emsp;&emsp;&emsp;&emsp;&emsp;
            <button onClick={onImagesClick}>All Images</button>
        </div>
    )
}
export default SideMenu;