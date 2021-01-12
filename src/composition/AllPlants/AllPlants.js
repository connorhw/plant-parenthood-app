import React from 'react'
import { Link } from 'react-router-dom'
import './AllPlants.css'
import PlantContext from '../../PlantContext/PlantContext'

class AllPlants extends React.Component {
    static contextType = PlantContext

    render() {
        console.log('context is', this.context)
        return (
        
            <div className='all-plants'>
            <h3 className='all-header'>All the plants we've seen so far: </h3>
            <Link to={`/PlantPage`}>Plant0_name</Link>
                {   
                    Object.keys(this.context.plants).map((plant, index) => {
                        return (
                            <p key={index}>{this.context.plants[plant][0].plant_name}</p>
                        )
                    })
                }
            </div>
        
    )
    }
}

export default AllPlants;
