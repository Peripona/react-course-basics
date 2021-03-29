import React from 'react'
import Card from '../Card/Card';
import './CardList.css';

const CardList = (props: any) => (<div className="card-list">
    {props.users.map((user:any) => <Card key={user.id} user={user} />)}
    </div>
)

export default CardList;