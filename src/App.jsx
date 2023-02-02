import Pagrindinis from './components/Pagrindinis';
import Header from './components/Menu/Header';
import Register from './components/Menu/Register';
import Login from './components/Menu/Login'
import { Routes, Route } from 'react-router-dom';
import './App.css';

const App = () => {
  return (
    <>
    <Routes>
      <Route element={<Header />}>
        <Route path='/' element={<Pagrindinis />} />
      </Route>
      
      <Route path='/register' element={<Register />}/>
      <Route path='/login' element={<Login />}/>
    </Routes>
    </>
  );
}

export default App;
