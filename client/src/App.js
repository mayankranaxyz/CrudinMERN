import './App.css';
import { BrowserRouter ,Route, Routes } from 'react-router-dom'
import Header from './Component/Header';
import Home from './Pages/Home'
import Alluser from './Pages/Alluser'
import Adduser from './Pages/Adduser'
import Update from './Pages/Update';

function App() {
  return (
    <>
    <BrowserRouter>
    <Header/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='adduser' element={<Adduser/>}/>
      <Route path='alluser' element={<Alluser/>}/>
      <Route path='update/:id' element={<Update/>}/>
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;