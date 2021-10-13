import React from 'react';
import  {data}  from "../UsersData/RandomUsers.js"
//import {RandomUsers} from "../UsersData/RandomUsers"
//import {data} from "../UsersData/RandomUsers";
import { User } from './User/User';
import './Users.css'

const Users = () => {
    return (
        <ul className='Users__list'>
            {data.results.map(person => <User
                key={person.login.uuid}
                img={person.picture.thumbnail}
                name={person.name.first}
                email={person.email}
                dob={person.dob.date} />)}
        </ul>
    )
}

export { Users }