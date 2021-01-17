import React, { Component } from 'react'
//import { Link } from 'react-router-dom'
import './AllPlants.css'
import PlantContext from '../../PlantContext'
//import PlantPage from '../PlantPage/PlantPage'
import Plant from '../Plant/Plant'

class AllPlants extends Component {
    static contextType = PlantContext;
    render() {
        console.log('context is', this.context)
        return (
            <section className='all-plants'>
            {/*<Link to={`/NewPlantPage`}>Plant0_name</Link>*/}
                <h3 className='all-header'>All the plants we've seen so far: </h3>
                    <ul>
                        {this.context.plants.map(plant => 
                            <li key={plant.id}>
                                <Plant
                                    id={plant.id}
                                    name={plant.plant_name}

                                />
                            </li>
                        )}
                    </ul>
            </section>
        )
    }
}

export default AllPlants;

AllPlants.defaultProps = {
    plants: [],
}
