import React, {useState} from "react";
import '../css/components.css';
import './GuessForm';
import Guesses from "./Guesses";


const ResultsTable = (props, {guessList}) =>{
 
    return(
        <ol>
            <Guesses guessList/>
            {/* <li className={resultColors}>{guessList}</li> */}
        </ol>
    );
};

export default ResultsTable;