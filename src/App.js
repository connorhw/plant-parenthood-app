import React, { Component } from 'react';
import { Route } from 'react-router-dom';
//import inventory from './inventory';
import PLANTS from './inventory';
import Landing from './composition/Landing';

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
        </div>
      </main>
    );
  }
}

export default App;