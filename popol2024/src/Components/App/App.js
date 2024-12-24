import { Route, Routes } from 'react-router-dom';
import logo from '../../logo.svg';
import './App.css';
import Main from '../Main/Main';
import Popol from '../Popol/Popol';

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Main/>}></Route>
        <Route path='/popol' element={<Popol/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
