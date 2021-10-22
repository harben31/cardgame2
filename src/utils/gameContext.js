import React, {createContext} from 'react';

const GameContext = createContext({
    deck: [],
    shuffledDeck: [],
    shuffle: () => {},
    deal: () => {},
    hand: []
})

export default GameContext;