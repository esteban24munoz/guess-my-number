import './css/App.css';
import NewGame from './components/NewGame';
import GuessForm from './components/GuessForm';

function App() {

  // const showGuessForm = () => {
  //   return <GuessForm />
  // };
  // let [validInput, setValidInput] = useState(false); 

  return (
    <div className="App">
      {/* <NewGame /> */}
      {/* {validInput ? <GuessForm /> : <p>try again</p>} */}
      <GuessForm/>

    </div>
  );
}

export default App;
