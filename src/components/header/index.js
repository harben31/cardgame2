import React, { useContext } from 'react';
import './header.css';
import GameContext from '../../utils/gameContext'

export default function Header(){
    const gameContext = useContext(GameContext)
    return(
        <header>
            <button id="shuffle" onClick={()=>{
                gameContext.shuffle(gameContext.deck)
            }}>shuffle</button>
        </header>
    )
};