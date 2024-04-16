import { useState } from 'react';
import './css/App.css';
import NewGame from './components/NewGame';
import GuessForm from './components/GuessForm';

function App() {

  let [isPlaying, setIsPlaying] = useState(false);
  let [maxNum, setMaxNum] = useState(100);


  const getMaxNum = () =>{
    return maxNum;
  }

  const secretNum = () =>{
    //w3school https://www.w3schools.com/js/js_random.asp
    return Math.floor(Math.random() * getMaxNum()) + 1;
  }

  return (
    <div className="App">
      {isPlaying ? <GuessForm setIsPlaying = {setIsPlaying} maxNum={getMaxNum()} secretNum={secretNum()} /> :
             <NewGame validInput={setIsPlaying} maxNum={getMaxNum()} setMaxNum={setMaxNum}/>}
    </div>
  );
}

export default App;
