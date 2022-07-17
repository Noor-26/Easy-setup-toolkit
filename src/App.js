import { Route, Routes } from 'react-router-dom';
import './App.css';
import Chats from './Components/Home/chats/Chats';
import Home from './Components/Home/Home';
import Navber from './Components/Navber/Navber';

 
function App() {
  return (
    <div className="App">
      <Navber/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/chats' element={<Chats/>}/>
      </Routes>
    </div>
  );
}

export default App;
