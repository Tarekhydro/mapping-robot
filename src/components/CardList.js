import React from 'react';
import Card from './Card';

const CardList = ({ robots }) => { 
    const cardComponent = robots.map((user, i) => {
        return (
        <Card 
            key={robots[i].id} 
            id={robots[i].id} 
            name={robots[i].name} 
            email={robots[i].email}
            latitude={robots[i].address.geo.lat}
            longitude={robots[i].address.geo.lng}
            />
        );
    })
    return (
        <div>
            {cardComponent}
        </div>
    );
}

export default CardList;