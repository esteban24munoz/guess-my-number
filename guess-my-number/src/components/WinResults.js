import React from 'react'
import App from "../App";


const WinResults = ({setIsPlaying, guessList}) => {
    setIsPlaying(false); //causes the overwrite of the return statement below
    return(
        <div>
            <h2>You won in {guessList.length} guesses!</h2>
            <button onClick={() => {}}>Play Again!</button>
        </div>
    );
}

export default WinResults;