import logo from './logo.svg';
import './App.css';

import { Navbar } from './Navbar';
import { Home } from './Home';
import { Contact } from './Contact';
import { Route, Routes } from 'react-router-dom';


function App() {
  return (
    <div className="bg-red-300 h-[100vh] w-[100vw]">


        <Navbar/>

        <Routes>
          <Route path='/' element={<Home></Home>}></Route>
          <Route path='/contact' element={<Contact></Contact>}></Route>

        </Routes>










    </div>
  );
}

export default App;
