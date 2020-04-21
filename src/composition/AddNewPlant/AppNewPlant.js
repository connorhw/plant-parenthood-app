import React from 'react'
import './AddNewPlant.css'

function AddNewPlant() {
    return (
        <form className='add-plant-form'>
            <label htmlFor='plant-name'>Plant Name: </label>
            <input id='plant-name' name='plant-name' type='text' required /><br /><br />
            <label htmlFor='plant-detail'>Details: </label>
            <textarea id='plant-detail' name='plant-detail' type='text' cols="40" rows="5" required />
        </form>
    )
}

export default AddNewPlant;