import { Route, Routes } from 'react-router-dom';
import './App.css';
import Chats from './Components/Home/chats/Chats';
import Home from './Components/Home/Home';
import Login from './Components/Login/Login/Login';
import Navber from './Components/Navber/Navber';

 
function App() {
  return (
    <div className="App">
      <Navber/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/chats' element={<Chats/>}/>
        <Route path='/login' element={<Login/>}/>
      </Routes> 
    </div>
  );
}

export default App;
