import Pagrindinis from './components/Pagrindinis';
import Header from './components/Menu/Header';
import Register from './components/Menu/Register';
import Login from './components/Menu/Login'
import { Routes, Route } from 'react-router-dom';
import './App.css';
import NewPostForm from './components/Postai/NewPostForm';

const App = () => {
  return (
    <>
    <Routes>
      <Route element={<Header />}>
        <Route path='/' element={<Pagrindinis />} />
        <Route path='/register' element={<Register />}/>
        <Route path='/login' element={<Login />}/>
        <Route path='/newPost' element={<NewPostForm />}/>
      </Route>
    </Routes>
    </>
  );
}

export default App;
