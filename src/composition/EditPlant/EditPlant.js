import React, { Component } from 'react'
import PropTypes from 'prop-types'
//import PlantContext from '../../PlantContext.js'

class EditPlant extends Component {
    state = {

    }
    componentDidMount() {
        const plantId = this.props.match.params.plantId

        const url = `http://localhost:8000/api/plants/${plantId}`
        fetch(url, {
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
                plant_name: res.plant_name,
                water_day: res.water_day,
                water_week: res.water_week,
                rec_env: res.rec_env,
                fert_type: res.fert_type,
                when_repot: res.when_repot,
                maint_level: res.maint_level,
                fun_fact: res.fun_fact,
                fav: res.fav,
                id: res.id,
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

    handleChangePlantName = event => {
        this.setState({
            plant_name: event.target.value
        })
    }
    handleChangeWeek = event => {
        this.setState({
            water_week: event.target.value
        })
    }
    handleChangeDay = event => {
        this.setState({
            water_day: event.target.value
        })
    }
    handleChangeFert = event => {
        this.setState({
            fert_type: event.target.value
        })
    }
    handleChangeRepot = event => {
        this.setState({
            when_repot: event.target.value
        })
    }
    handleChangeMaint = event => {
        this.setState({
            maint_level: event.target.value
        })
    }
    handleChangeFav = event => {
        this.setState({
            fav: event.target.value
        })
    }

    handleChangeEnv = event => {
        this.setState({
            rec_env: event.target.value
        })
    }
    handleChangeFun = event => {
        this.setState({
            fun_fact: event.target.value
        })
    }
    
    render() {
        const { plant_name, water_day, water_week, rec_env, fert_type, when_repot, fun_fact} = this.state
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
                            value={plant_name || ''}
                            onChange={this.handleChangePlantName}
                            required
                            /><br />
                        <label htmlFor='editMaint'>Maintenance Level: </label>
                        <select onChange={this.handleChangeMaint} id='maintain' name='maintain' required>
                            <option value=''>select</option>
                            <option value='low'>Low</option>
                            <option value='medium'>Medium</option>
                            <option value='high'>High</option>
                        </select><br /><br />
                        <label htmlFor='editWeek'>Water per week: </label>
                        <input
                            id='water_week'
                            type='number'
                            name='water_week'
                            value={water_week}
                            onChange={this.handleChangeWeek}
                            /><br />
                        <label htmlFor='editDay'>Water per day: </label>
                        <input
                            id='water_day'
                            type='number'
                            name='water_day'
                            value={water_day}
                            onChange={this.handleChangeDay}
                            /><br />
                        <label htmlFor='editRepot'>When to repot: </label>
                        <input
                            id='when_repot'
                            type='text'
                            name='when_repot'
                            value={when_repot}
                            onChange={this.handleChangeRepot}
                            /><br />
                        <label htmlFor='editFert'>Type of fertilizer: </label>
                        <input
                            id='fert_type'
                            type='text'
                            name='fert_type'
                            value={fert_type}
                            onChange={this.handleChangeFert}
                            /><br />
                        <label htmlFor='editFav'>Add to favorites? </label>
                        <select onChange={this.handleChangeFav} id='fav' name='fav' required>
                            <option value=''>select</option>
                            <option value='true'>yes</option>
                            <option value='false'>no</option>
                        </select><br /><br />
                        <label htmlFor='env'>Recommended environment: </label><br />
                        <textarea onChange={this.handleChangeEnv} value={rec_env} id='env' name='env' type='text' cols="40" rows="5" required /><br />

                        <label htmlFor='fun-fact'>Fun Fact (ie. Origin): </label><br />
                        <textarea onChange={this.handleChangeFun} value={fun_fact} id='funFact' name='funFact' type='text' cols="40" rows="5" required /><br /><br />

                        <button type="submit" >save</button><br />
                    </div>
                </form>
            </section>
            
        );
    }

}

export default EditPlant;

EditPlant.propTypes = {
    handleEdit: PropTypes.func
}