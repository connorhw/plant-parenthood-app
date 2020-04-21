import React from 'react';
import './SignIn.css';

function SignIn() {
    return (
        <form className='sign-in-form'>
            <label htmlFor='email'>E-Mail: </label><br />
            <input id='email' name='email' type='text' placeholder='Example123@domain.net' size='21' required /><br /><br />
            <label htmlFor='password'>Password: </label><br />
            <input id='password' name='password' type='text' placeholder='Enter Password'/><br /><br />
            <button>Sign In</button>
        </form>
    )
}

export default SignIn;