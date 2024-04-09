

export default function Guesses(props, {guessList}){

    function resultColors([]){
        let currentGuess = props.currentGuess;
        let secretNumber = props.secretNum;

        if(currentGuess < props.secretNumber){
            return(
                <li style={{color: "blue"}}>{currentGuess} "Too Low"</li>
            );
        }
        else if(currentGuess > secretNumber){
            return(
                <li style={{color: "orange"}}>{currentGuess} "Too High"</li>
            );
        }
        else{
            return(
                <li style={{color: "green"}}>{currentGuess} "Correct"</li>
            );
        }
    }
    
    let resultList = [];
    for(let i = guessList.length-1; i>=0; i--){
        resultList.push(resultColors(guessList[i]));
    }

    return resultList;
}