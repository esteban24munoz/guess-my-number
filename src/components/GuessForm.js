import React, {useState} from "react";
import '../css/components.css';
import ResultsTable from "./ResultsTable";

const GuessForm = (props) =>{

    let [currentGuess, setCurrentGuess] = useState("");
    let [errorMsg, setErrorMsg] = useState("");
    let [resultMsg, setResultMsg] = useState("");
    let [guessList, setGuessList] = useState([]);
    
    let maxNum = props.maxNum;
    let secretNum = props.secretNum;

    function handleResult() {
      setResultMsg();
    }

    function guessSetter(e){
      return setCurrentGuess(e.target.value);
    }

    function checkGuess(e){
      //prevent form default
      e.preventDefault();

      if(isNaN(currentGuess)){
        setErrorMsg('Maximum must be an integer');
      }
      else{
        //push currentGuess into array
        setGuessList([...guessList, currentGuess]);
      }
    }

    return(
      <div className="NewGame">
        <h1>Guess a number between 1 and {maxNum}</h1>
          <form>
              <div className="form-ctn">
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
              <div className="errorMsg">
                <ResultsTable guessList />
              </div>
          </form>
      </div>
    );
  };

  export default GuessForm;