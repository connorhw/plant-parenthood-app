import React from 'react'
import './AddNewPlant.css'

function AddNewPlant() {
    return (
        <form className='add-plant-form'>
            <h3>New Plant Form</h3>
            <label htmlFor='plant-name'>Plant Name: </label>
            <input id='plant-name' name='plant-name' type='text' required /><br /><br />
            <label htmlFor='week-water'>Water per week: </label>
            <input id='week-water' name='week-water' type='number' min="1"/><br />
            <label htmlFor='day-water'>Water per day: </label>
            <input id='day-water' name='day-water' type='number' min="0"/><br />
            <label htmlFor='repot'>When to repot: </label>
            <input id='repot' name='repot' type='text'/><br />
            <label htmlFor='fert'>Type of fertilizer: </label>
            <input id='fert' name='fert' type='text' /><br /><br />

            <label htmlFor='maintain'>Maintenance Level: </label>
            <select id='maintain' required>
                <option value=''>select</option>
                <option value='low'>Low</option>
                <option value='medium'>Medium</option>
                <option value='high'>High</option>
            </select><br /><br />
            <labe>Add to Favorites? </labe>
            <select id='fav' required>
                <option value=''>select</option>
                <option value="true">Yes</option>
                <option value="false">No</option>
            </select><br /><br />

            <label htmlFor='env'>Recommended environment: </label><br />
            <textarea id='env' name='env' type='text' cols="40" rows="5" required /><br />
            <label htmlFor='fun-fact'>Fun Fact (ie. Origin): </label><br />
            <textarea id='fun-fact' name='fun-fact' type='text' cols="40" rows="5" required /><br /><br />
            <button type="submit" >Submit Plant</button><br />
        </form>
    )
}

export default AddNewPlant;