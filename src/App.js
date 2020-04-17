import React, { Component } from 'react';
import { Route } from 'react-router-dom';
//import inventory from './inventory';
import PLANTS from './inventory';

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
        {console.log('App component rendered successfully!')/* content goes here */}
        {/*console.log(inventory)*/}
        Plant Parenthood :)
      </main>
    );
  }
}

export default App;