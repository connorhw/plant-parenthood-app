import React, { Component } from 'react'
//import { Link } from 'react-router-dom'
import './AllPlants.css'
import PlantContext from '../../PlantContext'
//import PlantPage from '../PlantPage/PlantPage'
import Plant from '../Plant/Plant'


class AllPlants extends Component {
    static contextType = PlantContext;
    constructor(props) {
        super(props);
        this.state = {
          plants: [],
          favorites: [],
        }
      }
    componentDidMount() {
        //replace whatever is in here with the future fetch.
        const allPlantsUrl = 'http://localhost:8000/api/plants'
        fetch(allPlantsUrl, {
          method: 'GET',
        })
          .then(response => {
            if(!response.ok) {
              throw new Error(response.status)
            }
            const res = response.json()
            return res;
          })
          .then(res => {
            this.setState({
              plants: res
            })
          })
    }
    render() {
        return (
            <section className='all-plants'>
            {/*<Link to={`/NewPlantPage`}>Plant0_name</Link>*/}
                <h3 className='all-header'>All the plants we've seen so far: </h3>
                    <ul>
                        {this.state.plants.map(plant => 
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
