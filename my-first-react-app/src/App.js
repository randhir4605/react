import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <Greeting toWhom="India" secondParam="What's going on !"/>
  );
}

function Greeting(props){
  return (
    <div className="App">
      <h2>Hello {props.toWhom} ! {props.secondParam}</h2>
    </div>
  )
}

export default App;
