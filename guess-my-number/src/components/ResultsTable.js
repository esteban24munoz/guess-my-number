import React, {useState} from "react";
import '../css/components.css';
import './GuessForm';


const ResultsTable = ({currentGuess, guessList, secretNum, setHasWon}) =>{
 
    function resultColors(){

        let arrayResult = guessList.map((guess) => {
            
            if(guess < secretNum){
                return <li style={{color: "cyan"}}>{guess} "Too Low"</li>;
            }
            else if(guess > secretNum){
                return <li style={{color: "orange"}}>{guess} "Too High"</li>;
         
            }
            else if(guess == secretNum){

                setHasWon(true);
                return <li style={{color: "green"}}>{currentGuess} "Correct"</li>;
            }
            else{
                return null;
            }
        });
        
        return arrayResult.reverse();
    }

    let listResult = resultColors();

    return(
        <>
            <ol>
                {listResult}
            </ol>
        </>
        
    )
}

export default ResultsTable;