import React from 'react'
import {Link, BrowserRouter} from 'react-router-dom'

export default class Nav extends React.Component {
    render() {
        return (
            <BrowserRouter>
                <div className='nav-bar'>
                    <Link to={'/'}>
                        Landing
                    </Link>
                    <Link to={'/Home'}>
                        Home
                    </Link>
                    <Link to={'/Favorites'}>
                        Fav's
                    </Link>
                    <Link to={'/AllPlants'}>
                        All
                    </Link>
                    <Link to={'/AddNewPlant'}>
                        New Plant
                    </Link>
                </div>
            </BrowserRouter>
        )
    }
}