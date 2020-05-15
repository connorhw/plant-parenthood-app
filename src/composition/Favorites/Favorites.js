import React from 'react'
import './Favorites.css'
import store from '../../inventory'
import { Link } from 'react-router-dom'

function Favorites() {
    return (
        <div className='favorites'>
            <h3 className='fav-header'>All of your favorites: </h3>
            <Link to={`/PlantPage`} className='plant-page-link'>Plant0_name</Link>
            {   
                Object.keys(store).map((plant, index) => {
                    return (
                    <p key={index}>{store[plant][0].plant_name}</p>
                    )
                })
            }
        </div>
    )
}

export default Favorites;