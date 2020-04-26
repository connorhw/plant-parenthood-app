import React from 'react'
import './AllPlants.css'
import store from '../../inventory'

function AllPlants() {
    return (
        <div className='all-plants'>
            <h3 className='all-header'>All the plants we've seen so far: </h3>
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

export default AllPlants;