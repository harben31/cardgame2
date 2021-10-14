import React, {createContext} from 'react';

const GameContext = createContext({
    deck: [],
    shuffledDeck: [],
    shuffle: () => {},
})

export default GameContext