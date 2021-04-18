import React from 'react';

const Userlist = (props) => {
    return (
        <div className="userlistdiv ma4 bg-light-green dib pa4">
        <img src = {`https://joeschmoe.io/api/v1/${props.name}`} alt ="not found"/>
        <h1 className="tc">{props.name}</h1>
        <p className="tc">{ props.work}</p>
    </div>
    )
}

export default Userlist;