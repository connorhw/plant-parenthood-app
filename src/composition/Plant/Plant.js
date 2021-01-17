import React from 'react'
import {Link} from 'react-router-dom'


export default function Plant(props) {
    return (
        <div className='Plant'>
            <Link key={props.id} to={`/plants/${props.id}`}>
              <p>{props.name}</p>
            </Link>
        </div>
    );
}