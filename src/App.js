import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Home from './composition/Home/Home.js'
import Favorites from './composition/Favorites/Favorites.js'
import AllPlants from './composition/AllPlants/AllPlants.js';
import AddPlant from './composition/AddPlant/AddPlant'
import Nav from './composition/Nav/Nav.js';
import './composition/Nav/Nav.css'
import './App.css'
import { BrowserRouter } from 'react-router-dom';
import PlantPage from './composition/PlantPage/PlantPage.js';
import PlantContext from './PlantContext'
import EditPlant from '../src/composition/EditPlant/EditPlant.js'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      plants: [],
      favorites: [],
    }
  }

  componentDidMount() {
    //replace whatever is in here with the future fetch.
    const allPlantsUrl = 'http://localhost:8000/api/plants'
    fetch(allPlantsUrl, {
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
  }
  
  deletePlantRequest = (plantId) => {
    const newPlants = this.state.plants.filter(p =>
      p.id !== plantId
    )
    this.setState({
      plants: newPlants
    })
  }

  editPlantRequest = (updatedPlant) => {
    const newPlants = this.state.plants.map(pla =>
      (pla.id === updatedPlant.id)
        ?updatedPlant
        :pla
      )
      this.setState({
        plants: newPlants
      })
  }

  
  addPlantRequest = (plantName) => {
    this.setState({
      plants: [...this.state.plants, plantName]
    })
  }

  //addPlantRequest = (pla)

  render() {
    const contextValue = {
      plants: this.state.plants,
      favorites: this.state.favorites,
      addPlantRequest: this.state.addPlantRequest,
      deletePlantRequest: this.deletePlantRequest,
      editPlantRequest: this.editPlantRequest,
    }
    return (
      <PlantContext.Provider value={contextValue}>
      <BrowserRouter>
      <main className='App'>
        <header>
          <img src="https://netrinoimages.s3.eu-west-2.amazonaws.com/2016/07/07/416778/123869/alocasia_montana_large_exotic_tropical_plant_3d_model_c4d_max_obj_fbx_ma_lwo_3ds_3dm_stl_1487210_o.jpg" alt="cool plants" height="350" width="484"/>
        </header>
        <div className='content'>
          <h2 className='home-title'>Plant Parenthood</h2>
          <Nav plants={this.state.plants}/>
          {/*<Route 
            exact
            path='/'
            component={Landing}
          />*/}
          <Route 
            exact
            path='/'
            component={Home}
          />
          <Route 
            exact
            path='/Favorites'
            component={Favorites}
          />
          <Route 
            exact
            path='/plants'
            component={AllPlants}
          />
          <Route 
            exact
            path='/plants/:plantId'
            component={PlantPage}
          />
          <Route
            path='/AddPlant'
            render={() => {
              return <AddPlant plants={this.state.plants} handleAdd={this.addPlantRequest}/>
            }}
          />
          <Route
            path='/edit/:plantId'
            component={EditPlant}
          />
          {/*<Route
            exact
            path='/SignUp'
            component={SignUp}
          />
          <Route 
            exact
            path='/PlantPage/:id'
            component={PlantPage}
          />*/}

        </div>
      </main>
      </BrowserRouter>
      </PlantContext.Provider>
    );
  }
}

export default App;