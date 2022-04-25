import logo from './logo.svg';
import './App.css';
import Greeting from './Greetings'
import FullName from './EmployeeService';

function App() {
  let emp={firstName:"Randhir",lastName:"Raj"};
  return (
    <>
      <Greeting toWhom="India" secondParam="What's going on !"/>
      <FullName employee={emp}/>
    </>
  );
}

export default App;
