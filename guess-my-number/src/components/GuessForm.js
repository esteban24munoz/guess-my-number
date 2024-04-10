import React, {useState} from "react";
import '../css/components.css';
import ResultsTable from "./ResultsTable";
import WinResults from "./WinResults";

const GuessForm = ({setIsPlaying, maxNum, secretNum}) =>{

    let [hasWon, setHasWon] = useState(false);
    let [currentGuess, setCurrentGuess] = useState("");
    let [errorMsg, setErrorMsg] = useState("");
    let [guessList, setGuessList] = useState([]);

    function guessSetter(e){
      return setCurrentGuess(e.target.value);
    }

    function checkGuess(e){
      //prevent form default
      e.preventDefault();

      if(isNaN(currentGuess)){
        return setErrorMsg('Maximum must be an integer');
      }
      else{
        //push currentGuess into array
        setGuessList([...guessList, currentGuess]);
      }

      setErrorMsg('');
    }

    return(
      <div className="GuessForm">

        {hasWon ? <WinResults setIsPlaying={setIsPlaying} guessList={guessList}/> 
        
        :
        <>
          <h1>Guess a number between 1 and {maxNum}</h1>
            <form>
                <div className="input-ctn">
                    <div className="wrapper">
                        <label for="maximun">Guess: </label>
                        <input type="text" id="maximun" value={currentGuess} onChange={guessSetter} autoFocus></input>
                    </div>
                    <button onClick={checkGuess}>Guess</button>
                </div>
                <div className="errorMsg">
                  <p>
                    {errorMsg}
                  </p>
                </div>
                <div className="resultsTable">
                    <ol reversed>
                      <ResultsTable guessList={guessList} currentGuess={currentGuess} secretNum={secretNum} setHasWon={setHasWon}/>
                    </ol>
                </div>
            </form>
        </>
      }
        </div>

    );
  };

  export default GuessForm;