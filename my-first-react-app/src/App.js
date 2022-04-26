
import './App.css';
import Greeting from './Greetings'
import FullName from './EmployeeService';
import EventTest  from './EventTest';
import ListComponent from './ListComponent';

function App() {
  let emp={firstName:"Randhir",lastName:"Raj"};
  
  let condition="";
  if(condition==="greeting"){
    return <Greeting toWhom="India" secondParam="What's going on !"/>;
  }
  else if(condition==="name"){
    return <FullName employee={emp}/>;
  } 
  else if(condition=="event"){
    return <EventTest/>;
  }
  else return <ListComponent/>;

  
}

export default App;
