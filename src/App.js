import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import PLANTS from './inventory';
import Landing from './composition/Landing/Landing.js';
import Home from './composition/Home/Home.js'
import Favorites from './composition/Favorites/Favorites.js'
import AllPlants from './composition/AllPlants/AllPlants.js';
import AddNewPlant from './composition/AddNewPlant/AppNewPlant.js';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  componentDidMount() {
    //replace whatever is in here with the future fetch.
    const allPlants = PLANTS;
    console.log(allPlants);
  }

  render() {
    const contextValue = {

    }
    return (
      <main className='App'>
        <div className='content'>
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
        </div>
      </main>
    );
  }
}

export default App;