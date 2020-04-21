import React from 'react';
import './SignUp.css'

function SignUp() {
    return (
        <form className='sign-up-form'>
            <label htmlFor='first'>First Name: </label>
            <input id='first' name='first' type='text' placeholder='Jane' size='21' required /><br /><br />
            <label htmlFor='last'>Last Name: </label>
            <input id='last' name='last' type='text' placeholder='Doe' size='21' required /><br /><br />
            <label htmlFor='email'>E-Mail: </label>
            <input id='email' name='email' type='text' placeholder='Example123@domain.net' size='21' required /><br /><br />
            <label htmlFor='password'>Password: </label>
            <input id='password' name='password' type='text' placeholder='Enter Password'/><br /><br />
            <button>Create Account</button>
        </form>
    )
}

export default SignUp;