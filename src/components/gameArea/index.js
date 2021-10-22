import React from 'react';
import './gameArea.css';
import Card from '../card';

export default function GameArea () {
    return (
        <div id="cardContainer">
            <div id="deckStandIn" className='card'>im a standiun</div>
            <Card/>
        </div>
    )
}