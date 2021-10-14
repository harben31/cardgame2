import React, { useContext, useEffect } from 'react';
import GameContext from '../utils/gameContext';
import Header from '../components/header';
import GameArea from '../components/gameArea'


export default function Home() {
    const  gameContext  = useContext(GameContext);
    

    return(
        <div id='main'>
            <Header/>
            <GameArea/>
        </div>
    )
}