import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <Greeting toWhom="India"/>
  );
}

function Greeting(props){
  return (
    <div className="App">
      <h2>Hello {props.toWhom} !</h2>
    </div>
  )
}

export default App;
