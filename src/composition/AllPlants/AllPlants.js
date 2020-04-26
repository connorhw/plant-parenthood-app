import React from 'react'
import './AllPlants.css'
import store from '../../inventory'

function AllPlants() {
    //console.log(store)
    return (
        <div className='all-plants'>
            {
                Object.keys(store).map((plant, index) => {
                    return (
                    <p key={index}>{store[plant][0].environment}</p>
                )
                })
            }
        </div>
    )
}

export default AllPlants;