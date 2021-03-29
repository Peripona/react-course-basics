import React from 'react'
import Card from '../Card/Card';

const CardList = (props: any) => (
    props.users.map((user:any) => <Card key={user.id} user={user} />)
)

export default CardList;