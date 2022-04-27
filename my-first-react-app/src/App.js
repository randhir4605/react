
import './App.css';
import {BrowserRouter,Router,Route, Routes} from "react-router-dom";
import Greetings from './Greetings';
import ListComponent from './ListComponent';
import EventTest from './EventTest';
import HomePage from './home';

function App() {
   return (
     <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/exercise1" element={<Greetings/>}/>
        <Route path="/exercise2" element={<ListComponent/>}/>
        <Route path="/exercise3" element={<EventTest/>}/>
      </Routes>
     </BrowserRouter>
   )
}

export default App;
