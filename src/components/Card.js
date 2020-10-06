import React from 'react';
import './Card.css';
import LeafletMap from './LeafletMaps';

const Card = ({ name, email, id, latitude, longitude }) => { 
    const position = [Number(latitude), Number(longitude)]
    return (
        <div className='tc bg-light-red br3 fl w-50 pa2 ba b--white bw2'>
            <img alt='robot' src={`https://robohash.org/${id}?size=150x150`}/>
            <div>
                <h2>{`Name: ${name}`}</h2>
                <h4>{`Email: ${email}`}</h4>
            </div>
            <div>
                <LeafletMap position={position} name={name}/>
            </div>
        </div>
    );
}

export default Card;