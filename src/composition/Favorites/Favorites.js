import React from 'react'
import './Favorites.css'
import store from '../../inventory'

function Favorites() {
    return (
        <div className='favorites'>
            <h3 className='fav-header'>All of your favorites: </h3>
            {   
                Object.keys(store).map((plant, index) => {
                    return (
                    <p key={index+1}>{store[plant][0].plant_name}</p>
                    )
                })
            }
        </div>
    )
}

export default Favorites;