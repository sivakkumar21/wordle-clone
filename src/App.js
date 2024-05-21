import { Route, Routes } from 'react-router-dom';
import './App.css';
import Game from './Game';
import Home from './Home';
import PageNotFound from './PageNotFound';

function App() {
 
  return (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="game" element={<Game />} />
    <Route path='*' element={<PageNotFound />} />
    </Routes>
 
  );
}

export default App;
