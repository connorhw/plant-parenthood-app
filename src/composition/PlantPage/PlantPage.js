import React from 'react';
import './PlantPage.css';

function PlantPage() {
    return (
        <div className='plant-page'>
            <h3>Selected Plant Page (test)</h3>
            <h2 className='name'>Green Stoebe</h2>
            <section className='picture'>
                <img src="https://cdn.shopify.com/s/files/1/1334/4597/products/STB112-Green-Preserved-Stoebe_ea3ef1bc-2247-435c-a542-78a3653e466f_x1200.progressive.jpg?v=1568844880" alt="plant that was selected" height="300" width="300"/>
            </section>
            <section>
                <button>Add to favorites</button>
            </section>
            <section className='description'>
                <h3>Description</h3>
                <div className='water-day'>Water per day: N/A</div><br />
                <div className='water-week'>Water per week: 3</div><br />
                <div className='env'>Environment: Indoors, 60 to 80 degress, moderate sunlight</div><br />
                <div className='soil-fert'>Soil or Fertilizer: Phosphorus Fertilizer</div><br />
                <div className='repot'>Repot: Every 3 months</div><br />
                <div className='level'>Maintenance Level: Medium</div><br />
                <div className='fun'>Fun Fact: My first plant</div><br />
            </section>
            <section className='buttons'>
                <button>Edit</button>
                <button>Delete</button>
            </section>
        </div>
    )
}

export default PlantPage;

