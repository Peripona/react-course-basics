import React from 'react'
import './Card.css';

const Card = (props:any) => (
    <div className="card">
        <img src={`https://robohash.org/${props.user.id}?set=set1&size=180x180`} alt={props.user.name} />
        <h2 className="elipsis">{props.user.name}</h2>
        <p className="elipsis">{props.user.email}</p>
    </div>
);

export default Card;