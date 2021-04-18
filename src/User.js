import React from 'react';
//import ReactDOM from 'react-dom';
import './User.css';
import 'tachyons';
import './Userlist';
import Userlist from './Userlist';

const userlistarray = [
    {
        id: 1,
        name: "Hasmukh",
        work: "Fullstack Developer"
    },   
    {
        id: 2,
        name: "Krishna",
        work: "Java Developer"
    },
    {
        id: 3,
        name: "Avinash",
        work: "Backend Developer"
    },
    {
        id: 4,
        name: "Yugant",
        work: "PHP Developer"
    },
]

const userdata = userlistarray.map((data, i) => {
    return (
        <Userlist id={userlistarray[i].name}
            name={userlistarray[i].name}
            work={userlistarray[i].work}
        />
    )
})

const User = (props) => {
    
    return (<div className="main">
        <h1 className="tc"> Welcome to Avatar List</h1>
        {userdata}
        <button className="btn">Subscribe</button>
        </div>
    )   
}

export default User;