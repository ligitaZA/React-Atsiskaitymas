import Pagrindinis from './components/Pagrindinis';
import VartotojoPuslapis from './components/VartotojoPuslapis';
import Antraste from './components/Antraste';
import { Routes, Route } from 'react-router-dom';
import './App.css';

const App = () => {
  return (
    <>
    <Routes>
      <Route element={<Antraste />}>
        <Route path='/' element={<Pagrindinis />} />
        <Route path='/user' element={<VartotojoPuslapis />} />
      </Route>
    </Routes>
    </>
  );
}

export default App;
