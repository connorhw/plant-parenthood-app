import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import PLANTS from './inventory';
import Landing from './composition/Landing/Landing.js';
import Home from './composition/Home/Home.js'
import Favorites from './composition/Favorites/Favorites.js'
import AllPlants from './composition/AllPlants/AllPlants.js';
import AddNewPlant from './composition/AddNewPlant/AppNewPlant.js';
import Nav from './composition/Nav/Nav.js';
import './composition/Nav/Nav.css'
import './App.css'
import SignIn from './composition/SignIn/SignIn';
import SignUp from './composition/SignUp/SignUp';
import { BrowserRouter } from 'react-router-dom';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      plants:[]
    }
  }

  componentDidMount() {
    //replace whatever is in here with the future fetch.
    const allPlants = PLANTS;
    //console.log(allPlants);

   // allPlants.map(plant => {

   // })
    /*
    fetch(allPlants, {
      method: 'GET',
    })
      .then(response => {
        if(!response.ok) {
          throw new Error(response.status)
        }
        const res = response.json()
        console.log(res)
        return res;
      })
        .then(res => {
          this.setState({
            plants: res
          })
        })
    */
  }

  render() {
    const contextValue = {

    }
    return (
      <BrowserRouter>
      <main className='App'>
        <header>
          <img src="https://netrinoimages.s3.eu-west-2.amazonaws.com/2016/07/07/416778/123869/alocasia_montana_large_exotic_tropical_plant_3d_model_c4d_max_obj_fbx_ma_lwo_3ds_3dm_stl_1487210_o.jpg" alt="cool plants" height="350" width="484"/>
        </header>
        <div className='content'>
          <h2>Plant Parenthood</h2>
          <Nav />
          <Route 
            exact
            path='/'
            component={Landing}
          />
          <Route 
            exact
            path='/Home'
            component={Home}
          />
          <Route 
            exact
            path='/Favorites'
            component={Favorites}
          />
          <Route 
            exact
            path='/AllPlants'
            component={AllPlants}
          />
          <Route 
            exact
            path='/AddNewPlant'
            component={AddNewPlant}
          />
          <Route
            exact
            path='/SignIn'
            component={SignIn}
          />
          <Route
            exact
            path='/SignUp'
            component={SignUp}
          />
        </div>
      </main>
      </BrowserRouter>
    );
  }
}

export default App;