  
import React from 'react';
import './User.css';
import PropTypes from 'prop-types';

const User = (props) => {
    return (
        <div className='User__wrapper'>
            <img className='User__img' src={props.img} alt='Users'></img>
            <div className='User__info'>
                <p>Name:{props.name}</p>
                <p>Email:{props.email}</p>
                <p>DOB:{props.dob}</p>
            </div>
        </div>
    )
}

User.propTypes = {
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    dob: PropTypes.string.isRequired
}

export { User };