import React, { Component } from 'react'
import PropTypes from 'prop-types'
//import PlantContext from '../../PlantContext.js'

class EditPlant extends Component {
    componentDidMount() {
        console.log(this.props)
        const plantId = this.props.match.params.plantId
        fetch(`http://localhost:8000/api/plants/${plantId}`, {
            method: 'GET'
        })
        .then(/* some content omitted */)
        .then(responseData => {
            this.setState({
                "plant_name": this.plant_name,
                "water_day": this.water_day,
                "water_week": this.water_week,
                "rec_env": this.rec_env,
                "fert_type": this.fert_type,
                "when_repot": this.when_repot,
                "maint_level": this.maint_level,
                "fun_fact": this.fun_fact,
                "fav": this.fav,
            })
        })
    }
    handleSubmit = e => {
        e.preventDefault()
        // validation not shown
        fetch(`http://localhost:8000/api/plants/${this.props.match.params.plantId}`, {
            method: 'PATCH',
            body: JSON.stringify(this.state.inputValues)
        })
            .then(/* some content omitted */)
            .then(responseData => {
                this.context.editPlantRequest(responseData)
            })
            .catch(error => {/* some content omitted */})
    }
    
    render() {
        console.log(this.state)
        const { plant_name/*, water_day, water_week, rec_env, fert_type, when_repot, maint_level, fun_fact, fav*/} = this.context
        console.log(plant_name)
        return (
            <section className='EditPlantForm'>
                <h2>Edit Plant</h2>
                <form onSubmit={this.handleSubmit}>
                    <div>
                        <label htmlFor='editName'>Plant Name: </label>
                        <input
                            id='plant_name'
                            type='text'
                            name='plant_name'
                            //placeholder='The Perfect Test Plant'
                            value={plant_name}
                            onChange={this.handleChangePlantName}
                            />
                    </div>
                </form>
                {/*
            <form className='edit-plant-form' onSubmit={e => this.handleSubmit(e)}>
                
                <h3>Edit Plant Form</h3>
                <label htmlFor='plant-name'>Plant Name: </label>
                <input id='plantName' name='plantName' type='text' required /><br /><br />
                <input>{}</input>

                
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
                <button type="submit" >save</button><br />
            </form>
        */}
            </section>
            
        );
    }

}

export default EditPlant;

EditPlant.propTypes = {
    handleEdit: PropTypes.func
}