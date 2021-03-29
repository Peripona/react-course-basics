import React from 'react'
import './Card.css';

const Card = (props:any) => (
    <div className="card">
        <h1 className="elipsis">{props.user.name}</h1>
        <img src={`https://robohash.org/${props.user.id}?set=set1&size=180x180`} alt={props.user.name} />
    </div>
);

export default Card;