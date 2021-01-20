//import { render } from '@testing-library/react';
import React from 'react'
import { Component } from 'react';
import './AddPlant.css'
import PlantContext from '../../PlantContext'
import PropTypes from 'prop-types'
import { Redirect } from 'react-router-dom'

class AddPlant extends Component {
    static contextType = PlantContext;

    state = {
        redirect: null,
        error: ''
    }
    handleSubmit(event) {
        event.preventDefault();
        const plantName = event.target.plantName.value;
        const weekWater = event.target.weekWater.value;
        const dayWater = event.target.dayWater.value;
        const repot = event.target.repot.value;
        const fert = event.target.repot.value;
        const maintain = event.target.maintain.value;
        const fav = event.target.fav.value;
        const funFact = event.target.funFact.value;
        const env = event.target.env.value;
        

        const url = 'http://localhost:8000/api/plants';
        const options = {
            method: 'POST',
            body: JSON.stringify({
                "plant_name": plantName,
                "maint_level": maintain,
                "water_day": dayWater,
                "water_week": weekWater,
                "when_repot": repot,
                "fert_type": fert,
                "fav": fav,
                "fun_fact": funFact,
                "rec_env": env,
                
            }),
            headers: {
                'content-type': 'application/json',
            },
        }
        fetch(url, options)
            .then(res => {
                if(!res.ok) {
                    throw new Error('Something went wrong with your note POST fetch')
                }
                return res.json()
            })
            .then((res) => {
                this.setState({ 
                    redirect: "/plants" });
                
            })
            .then(res => {
                if(!res.ok) {
                    throw new Error('Something went wrong with your note POST fetch')
                }
                return res.json()
            })
            .catch(error => {
                this.setState({
                    error: error.message
                })
            })

    }

    render() {
        {
            if (this.state.redirect) { 
                return <Redirect to={this.state.redirect} /> 
                } 
                return( 
                    <form className='add-plant-form' onSubmit={e => this.handleSubmit(e)}>
                        <h3>New Plant Form</h3>
                        <label htmlFor='plant-name'>Plant Name: </label>
                        <input id='plantName' name='plantName' type='text' required /><br /><br />
                        <label htmlFor='week-water'>Water per week: </label>
                        <input id='weekWater' name='weekWater' type='number' min="1"/><br />
                        <label htmlFor='day-water'>Water per day: </label>
                        <input id='dayWater' name='dayWater' type='number' min="0"/><br />
                        <label htmlFor='repot'>When to repot: </label>
                        <input id='repot' name='repot' type='text'/><br />
                        <label htmlFor='fert'>Type of fertilizer: </label>
                        <input id='fert' name='fert' type='text' /><br /><br />

                        <label htmlFor='maintain'>Maintenance Level: </label>
                        <select id='maintain' name='maintain' required>
                            <option value=''>select</option>
                            <option value='low'>Low</option>
                            <option value='medium'>Medium</option>
                            <option value='high'>High</option>
                        </select><br /><br />
                        <label>Add to Favorites? </label>
                        <select id='fav' name='fav' required>
                            <option value=''>select</option>
                            <option value="true">Yes</option>
                            <option value="false">No</option>
                        </select><br /><br />

                        <label htmlFor='env'>Recommended environment: </label><br />
                        <textarea id='env' name='env' type='text' cols="40" rows="5" required /><br />
                        <label htmlFor='fun-fact'>Fun Fact (ie. Origin): </label><br />
                        <textarea id='funFact' name='funFact' type='text' cols="40" rows="5" required /><br /><br />
                        <button type="submit" >Submit Plant</button><br />
                    </form>
                ) 
        }
    }
} 


export default AddPlant;

AddPlant.propTypes = {
    handleAdd: PropTypes.func
}