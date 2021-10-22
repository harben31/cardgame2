import React, { useContext } from 'react';
import './card.css';
import GameContext from '../../utils/gameContext';

export default function Card () {
    const gc = useContext(GameContext)
    return(
        <div id="starterCard" className='card'>{ gc.hand[0] }</div>
    )
};