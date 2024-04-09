import React, {useState} from "react";
import '../css/components.css';
import GuessForm from "./GuessForm";


const NewGame = () =>{

  let [maxNum, setMaxNum] = useState("100");
  let [errorMsg, setErrorMsg] = useState("");


  function maxSetter(e){

    return setMaxNum(e.target.value);
  }

  function maxNumHandler(e) {
    let validInput = false;
    e.preventDefault(); // Prevent default form submission behavior

    // validate user input
    if(isNaN(maxNum)){
      setErrorMsg('Maximum must be an integer');

    }
    else{
      if(maxNum > 10 && maxNum < 1000000){
        setMaxNum(e.target.value);
        return validInput = true;
        
      }
      else{
        setErrorMsg('Maximum must be between 10 and 1,000,000');
      }
    }
  };
  

  return(

    <div className="newGame">
      <h1>Guess Number Game</h1>
        <form>
            <div className="form-ctn">
                <div className="wrapper">
                    <label for="maximun">Maximun: </label>
                    <input type="text" id="maximun" value={maxNum} onChange={maxSetter} autoFocus></input>
                </div>
                <button onClick={maxNumHandler}>Enter</button>
            </div>
            <div className="errorMsg">
              <p>
              {errorMsg}
              </p>
            </div>
        </form>
    </div>

  );
};

export default NewGame;