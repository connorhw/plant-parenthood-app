import React from 'react'
import './Home.css'
//import { Link } from 'react-router-dom'
import { Component } from 'react'
import PlantContext from '../../PlantContext'

class Home extends Component {
    static contextType = PlantContext;
    render() {
        return (
            
            <div className='home'>
            <h3 className='home'>Home</h3>
            <section>
                <h2>This is a personal repository for your plant maintenance.</h2>
                <ul className='overview'> What you can do here:
                    <li>Add plants to your repository (located in 'All')</li>
                    <li>Edit any plants that you have previously entered</li>
                    <li>Delete any plants that you don't want in here anymore</li>
                    <li>Add plants to a separate 'Fav's' list</li>
                </ul>
            </section>
            <section className='random'>
                <h2>Something you might be interested in: </h2>
                <img src="https://netrinoimages.s3.eu-west-2.amazonaws.com/2016/10/10/423614/142594/potted_tropical_snake_plant_3d_model_c4d_max_obj_fbx_ma_lwo_3ds_3dm_stl_1660607_o.jpg" alt="random plant from inventory" height="300" width="300"/>
                {/*<Link to={`/PlantPage`}>Learn more</Link>*/}

            </section>
        </div>
        );
    }
}

export default Home;
