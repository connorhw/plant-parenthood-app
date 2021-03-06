import React from 'react'
import { Link } from 'react-router-dom'


export default class Nav extends React.Component {
    render() {
        return (
                <nav className='nav-bar'>
                    {/*<Link to={`/`}>
                        Landing
                    </Link>*/}
                    <Link to={`/`}>
                        Home
                    </Link>
                    <Link to={`/Favorites`}>
                        Fav's
                    </Link>
                    <Link to={`/plants`}>
                        All
                    </Link>
                    <Link to={`/AddPlant`}>
                        New Plant
                    </Link>
                </nav>
        )
    }
}