
import './App.css';
import Login from './Login'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Signup from './Signup';
import Profile from './Profile';
import Update from './Update';
import View from './View';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
       <Routes>
        <Route path='/' element={<Login/>}/> 
        <Route path='/signup' element={<Signup/>}/> 
        <Route path='/profile' element={<Profile />}/>
        <Route path='/update' element={<Update/>}/> 
        <Route path='/view' element={<View/>}/>
       </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
