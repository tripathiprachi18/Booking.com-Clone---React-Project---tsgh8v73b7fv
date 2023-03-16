import { BrowserRouter, Route, Routes } from 'react-router-dom';
// import './App.css';
import Home from './pages/home/Home';
import Hotel from './pages/hotel/Hotel';
import List from './pages/list/List';
import Login from './components/login/Login'
import Register from './components/register/Register'
function App() {
  return (
    <div id='main'>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/login'element={<Login/>} />
      <Route path='/register' element={<Register />} />
      <Route path='/hotels' element={<List/>} />
      <Route path='/hotels/:id' element={<Hotel/>} />
    </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;