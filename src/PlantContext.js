import React from 'react'

const PlantContext = React.createContext({
  plants: [],
  favorites: [],

  deletePlantRequest: (plantId) => {
    const newPlants = this.state.plants.filter(p => 
      p.id !== plantId
    )
    this.setState({
      plants: newPlants
    })
  },
  
  editPlantRequest: (updatedPlant) => {
    const newPlants = this.state.plants.map(pla =>
      (pla.id == updatedPlant.id)
        ?updatedPlant
        :pla
    )
    this.setState({
      plants: newPlants
    })
  },
})

export default PlantContext;