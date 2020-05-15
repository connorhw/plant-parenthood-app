import React from 'react'
import './Home.css'
import { Link } from 'react-router-dom'

function Home() {
    return (
        <div className='home'>
            <h3 className='home'>Home</h3>
            <label htmlFor='search-for'>Enter a plant: </label>
            <input id='search-for' name='search-for' type='text' required />
            <button>Search</button><br /><br />
            <section className='random'>
                <h3>Something you might be interested in: </h3>
                <img src="https://netrinoimages.s3.eu-west-2.amazonaws.com/2016/10/10/423614/142594/potted_tropical_snake_plant_3d_model_c4d_max_obj_fbx_ma_lwo_3ds_3dm_stl_1660607_o.jpg" alt="random plant from inventory" height="300" width="300"/>
                <Link to={`/PlantPage`}>Learn more</Link>

            </section>
        </div>
    )
}

export default Home;