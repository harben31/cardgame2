import React, { useContext } from "react";
import Home from '../src/pages/Home';
import GameContext from './utils/gameContext';

export default function App() {
	const deck = ['A S', 'K S' , 'Q S', 'J S', '10 S', '9 S', '8 S', '7 S', '6 S', '5 S', '4 S', '3 S', '2 S', 'A H', 'K H' , 'Q H', 'J H', '10 H', '9 H', '8 H', '7 H', '6 H', '5 H', '4 H', '3 H', '2 H','A C', 'K C' , 'Q C', 'J C', '10 C', '9 C', '8 C', '7 C', '6 C', '5 C', '4 C', '3 C', '2 C', 'A D', 'K D' , 'Q D', 'J D', '10 D', '9 D', '8 D', '7 D', '6 D', '5 D', '4 D', '3 D', '2 D'];
    const shuffledDeck = [];
    const hand = [];

    const shuffle = (arr) => {
    
        arr.forEach(() => {
            let card = Math.floor(Math.random() * arr.length);
            shuffledDeck.push(arr[card])
        })
        console.log(shuffledDeck)
        return shuffledDeck
    }

    const deal = (arr) => {
        
        console.log('suffled deck', arr)
        let cards = arr.shift()
        hand.push(cards)
        console.log(hand)
        return hand
    }
  

	return (
		<GameContext.Provider value={{deck, shuffle, deal, shuffledDeck, hand}}>
			<div className="App">
				<Home>
					
				</Home>
			</div>
		</GameContext.Provider>
			
  );
}


