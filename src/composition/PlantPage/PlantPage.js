import React, { Component } from 'react';
import './PlantPage.css';
import PlantContext from '../../PlantContext'
import { Link } from 'react-router-dom';

class PlantPage extends Component {
    static contextType = PlantContext
    
    deletePlant = (plantId) => {
        const allPlantsUrl = `http://localhost:8000/api/plants/${plantId}`
        fetch(allPlantsUrl, {
            method: 'DELETE',
        })
        .then(() => {
            this.props.history.push('/')
            //console.log(this.context)
            this.context.deletePlantRequest(plantId)
        })
    }
    
    

    editPlant = (plantId) => {
        const allPlantsUrl = `http://localhost:8000/api/plants/${plantId}`
        fetch(allPlantsUrl, {
            method: 'PATCH',
        })
        .then(() => {
            this.props.history.push('/EditPlant')
            this.context.editPlantRequest(plantId)
        })
    }
    

    render() {
        //console.log(this.context)
        //console.log(this.props)
        const selected = this.context.plants.find(plant => {
             return (this.props.match.params.plantId == plant.id)
        })
        return (
            <div>
                {console.log(selected)}
                <Link to={`/edit/${this.props.match.params.plantId}`}>edit plant</Link>
                <section className='plant-page-info'>
                    <h2 className='plant-name'>{selected.plant_name}</h2>
                    <div>Maintenance Level: {selected.maint_level}</div><br />
                    <div>Recommended Environment: {selected.rec_env}</div>
                    <div>Fertilizer/Soil: {selected.fert_type}</div>
                    <div>Repot every: {selected.when_repot}</div><br />
                    <div>Water per day: {selected.water_day}</div>
                    <div>Water per week: {selected.water_week}</div><br />
                    <div>Fun Fact: {selected.fun_fact}</div>
                </section>
                <button onClick={() => this.deletePlant(selected.id)}>delete</button>
            </div>
        );
    }
}

export default PlantPage;

PlantPage.defaultProps = {
    plant: {
        content: '',
    }
}

/*
function PlantPage() {
    return (
        <div className='plant-page'>
            <h3>Selected Plant Page (test)</h3>
            <h2 className='name'>Green Stoebe</h2>
            <section>
                <button>Add to favorites</button>
            </section>
            <section className='description'>
                <h3>Description</h3>
                <div className='water-day'>Water per day: N/A</div><br />
                <div className='water-week'>Water per week: 3</div><br />
                <div className='env'>Environment: Indoors, 60 to 80 degress, moderate sunlight</div><br />
                <div className='soil-fert'>Soil or Fertilizer: Phosphorus Fertilizer</div><br />
                <div className='repot'>Repot: Every 3 months</div><br />
                <div className='level'>Maintenance Level: Medium</div><br />
                <div className='fun'>Fun Fact: My first plant</div><br />
            </section>
            <section className='buttons'>
                <button>Edit</button>
                <button>Delete</button>
            </section>
        </div>
    )
}

export default PlantPage;
*/

