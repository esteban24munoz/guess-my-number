import React from 'react'
import App from "../App";


const WinResults = ({setIsPlaying, guessList}) => {
    return(
        <div>
            <h2>You won in {guessList.length} guesses!</h2>
            <button onClick={() => {setIsPlaying(false);}}>Play Again!</button>
        </div>
    );
}

export default WinResults;