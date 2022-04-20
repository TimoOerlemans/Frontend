import { Route, Routes } from 'react-router-dom';
import './App.css';
import Content from './pages/Content';
import Pizzas from './pages/Pizzas';

export const FrontendRoutes  = () => {
  return (
    <div className="content">
      <Routes>
        <Route exact path='/' element={<Content/>} />
        <Route exact path='/Content' element={<Content/>} />    
        <Route exact path='/Pizzas' element={<Pizzas/>} />
      </Routes>
    </div>
  );
};