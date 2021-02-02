import React, { Component } from 'react'
import PropTypes from 'prop-types'
import PlantContext from '../../PlantContext'

class EditPlant extends Component {
    static propTypes = {
        match: PropTypes.shape({
            params: PropTypes.object,
        }),
        history: PropTypes.shape({
            push: PropTypes.func,
        }).isRequired,
    };

    static contextType = PlantContext;

    state = {
        error: null,
        id: '',
        plant_name: '',
        water_week: 0,
        water_day: 0,
        fert_type: '',
        when_repot: '',
        maint_level: '',
        fav: false,
        rec_env: '',
        fun_fact: '',
    };
    
    componentDidMount() {
        const { plantId } = this.props.match.params
        //const url = `https://plant-parenthood-api.herokuapp.com/api/plants/${plantId}`
        const url = `http://localhost:8000/api/plants/${plantId}`
        fetch(url, {
            method: 'GET',
        })
        .then(res => {
            if(!res.ok)
                return res.json().then(error => Promise.reject(error))

            return res.json()
        })
        .then(responseData => {
            this.setState({
                id: responseData.id,
                plant_name: responseData.plant_name,
                water_week: responseData.water_week,
                water_day: responseData.water_day,
                fert_type: responseData.fert_type,
                when_repot: responseData.when_repot,
                maint_level: responseData.maint_level,
                fav: responseData.fav,
                rec_env: responseData.rec_env,
                fun_fact: responseData.fun_fact,
            })
        })
        .catch(error => {
            console.error(error)
            this.setState({ error })
        })
    }

    handleChangePlantName = event => {
        this.setState({ plant_name: event.target.value })
    };
    handleChangeWeek = event => {
        this.setState({ water_week: event.target.value })
    };
    handleChangeDay = event => {
        this.setState({ water_day: event.target.value })
    };
    handleChangeFert = event => {
        this.setState({ fert_type: event.target.value })
    };
    handleChangeRepot = event => {
        this.setState({ when_repot: event.target.value })
    };
    handleChangeMaint = event => {
        this.setState({ maint_level: event.target.value })
    };
    handleChangeFav = event => {
        this.setState({ fav: event.target.value })
    };
    handleChangeEnv = event => {
        this.setState({ rec_env: event.target.value })
    };
    handleChangeFun = event => {
        this.setState({ fun_fact: event.target.value })
    };

    handleSubmit = e => {
        console.log(this.state)
        e.preventDefault()
        //const { plantId } = this.props.match.params
        const { id, plant_name, water_day, water_week, rec_env, fert_type, when_repot, fun_fact, fav, maint_level } = this.state
        const newPlant = { id, plant_name, water_day, water_week, rec_env, fert_type, when_repot, fun_fact, fav, maint_level }
        

        fetch(`http://localhost:8000/api/plants/${this.props.match.params.plantId}`, {
            method: 'PATCH',
            body: JSON.stringify(newPlant),
            headers: {
                'content-type': 'application/json',
            },
        })
        .then(res => {
            if(!res.ok)
                return res.json().then(error => Promise.reject(error))
        })
        .then(() => {
            this.resetFields(newPlant)
            this.context.editPlantRequest(newPlant)
            this.props.history.push('/')
        })
        .catch(error => {
            console.error(error)
            this.setState({ error })
        })
    }

    resetFields = (newFields) => {
        this.setState({
            id: newFields.id || '',
            plant_name: newFields.plant_name || '',
            water_week: newFields.water_week || '',
            water_day: newFields.water_day || '',
            rec_env: newFields.rec_env || '',
            fert_type: newFields.fert_type || '',
            when_repot: newFields.when_repot || '',
            fun_fact: newFields.fun_fact || '',
            fav: newFields.fav || '',
            maint_level: newFields.maint_level || '',
        })
    }

    handleCancelClick = () => {
        this.props.history.push('/')
    };
    
    render() {
        const { error, plant_name, water_day, water_week, rec_env, fert_type, when_repot, fun_fact, fav, maint_level} = this.state
        return (
            <section className='EditPlantForm'>
                <h2>Edit Plant</h2>
                <form onSubmit={this.handleSubmit}>
                    <div className='EditBookmark__error' role='alert'>
                        { error && <p>{ error.message }</p>}
                    </div>
                    <input
                        type='hidden'
                        name='id'
                    />
                    <div>
                        <label htmlFor='editName'>Plant Name: </label>
                        <input
                            id='plant_name'
                            type='text'
                            name='plant_name'
                            value={plant_name}
                            onChange={this.handleChangePlantName}
                            required
                            /><br />
                        <label htmlFor='editMaint'>Maintenance Level: </label>
                        <select value={maint_level} onChange={this.handleChangeMaint} id='maintain' name='maintain' required>
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
                        <select value={fav} onChange={this.handleChangeFav} id='fav' name='fav' required>
                            <option value=''>select</option>
                            <option value='true'>yes</option>
                            <option value='false'>no</option>
                        </select><br /><br />
                        <label htmlFor='env'>Recommended environment: </label><br />
                        <textarea onChange={this.handleChangeEnv} value={rec_env} id='env' name='env' type='text' cols="40" rows="5" required /><br />

                        <label htmlFor='fun-fact'>Fun Fact (ie. Origin): </label><br />
                        <textarea onChange={this.handleChangeFun} value={fun_fact} id='funFact' name='funFact' type='text' cols="40" rows="5" required /><br /><br />
                        <button type='button' onClick={this.handleCancelClick}>
                            Cancel
                        </button>
                        {' '}
                        <button type="submit" >save</button><br />
                    </div>
                </form>
            </section>
            
        );
    }

}

export default EditPlant;
