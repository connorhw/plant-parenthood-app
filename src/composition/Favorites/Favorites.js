import React from 'react'
import './Favorites.css'
//import store from '../../inventory'
//import { Link } from 'react-router-dom'
import { Component } from 'react'
import PlantContext from '../../PlantContext'
import Plant from '../Plant/Plant'

class Favorites extends Component {
    static contextType = PlantContext;
    render() {
        const filteredPlants = this.context.plants.filter((plant) => {
            return (this.props.match.isExact === plant.fav)
        })
        return (
            <section>
                <h3>Your favorites: </h3>
                <ul>
                    {filteredPlants.map( plant => 
                    <li key={plant.id}>
                        <Plant
                        id={plant.id}
                        name={plant.plant_name}
                        />
                    </li>
                    )}
                </ul>
            </section>
        );
    }
}
export default Favorites;
