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
        const selected = this.context.plants.find(plant => {
             return (this.props.match.params.plantId == plant.id)
        })
        return (
            <div>
                <Link to={`/edit/${this.props.match.params.plantId}`}>edit plant</Link>
                <div>(Remember your values for 'Favorite?' and 'Maintenance Level' before you editing)</div>
                <section className='plant-page-info'>
                    <h2 className='plant-name'>{selected.plant_name}</h2>
                    <div>Maintenance Level: {selected.maint_level}</div><br />
                    <div>Recommended Environment: {selected.rec_env}</div>
                    <div>Fertilizer/Soil: {selected.fert_type}</div>
                    <div>Repot every: {selected.when_repot}</div><br />
                    <div>Water per day: {selected.water_day}</div>
                    <div>Water per week: {selected.water_week}</div><br />
                    <div>Fun Fact: {selected.fun_fact}</div><br />
                    <div>Favorite? {String(selected.fav)}</div>
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


