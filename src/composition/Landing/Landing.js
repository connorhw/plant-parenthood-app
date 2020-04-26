import React from 'react'
import {Link, BrowserRouter} from 'react-router-dom'
import './Landing.css'

function Landing() {
    return (
        <BrowserRouter>
            <div className='landing'>
                <label>Have an account?</label>
                <Link to={'/SignIn'} className='form-link'>Sign In</Link>
                <label>Want an account?</label>
                <Link to={'/SignUp'} className='form-link'>Sign Up</Link>
            </div>
        </BrowserRouter>
    )
}

export default Landing;
