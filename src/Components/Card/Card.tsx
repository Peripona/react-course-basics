import React from 'react'

const Card = (props:any) => (
    <div>
        <h1>{props.user.name}</h1>
        <img src={`https://robohash.org/${props.user.id}?set=set1&size=180x180`} alt={props.user.name} />
    </div>
);

export default Card;