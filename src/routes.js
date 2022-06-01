import { Route, Routes } from 'react-router-dom';
import './App.css';
import AddProduct from './pages/AddProduct';
import Content from './pages/Content';
import Pizzas from './pages/Pizzas';
import UpdateProduct from './pages/UpdateProduct';

export const FrontendRoutes  = () => {
  return (
    <div className="content">
      <Routes>
        <Route exact path='/' element={<Content/>} />
        <Route exact path='/Content' element={<Content/>} />    
        <Route exact path='/Pizzas' element={<Pizzas/>} />
        <Route exact path='/AddProduct' element={<AddProduct/>}/>
        <Route exact path='/UpdateProduct/:productId' element={<UpdateProduct/>}/>
        <Route exact path='/Chatroom' element={<Chatroom/>}/>
      </Routes>
    </div>
  );
};