import { Route, Routes } from 'react-router-dom';
import './App.css';
import AddProduct from './pages/AddProduct';
import Content from './pages/Content';
import Pizzas from './pages/Pizzas';
import UpdateProduct from './pages/UpdateProduct';
import Chatroom from './Components/Chatroom';
import CreateAccount, { Register } from './Components/Accounts/Register';
import Login from './Components/Accounts/Login'
import {useState, useEffect } from 'react';
import OwnPizzas from './pages/OwnPizzas';

export const FrontendRoutes  = () => {
  
  const [logged, setLogged] = useState(false);
  const [userId, setUserId] = useState(-1);

  const loginData = (loginValue) => {
    if (loginValue !== '') {
      localStorage.setItem('logged', true)
      localStorage.setItem('userId', loginValue.Id)
      setLogged(true)
      setUserId(loginValue.Id)
    }
  }
  
  return (
    <div className="content">
      <Routes>
        <Route exact path='/' element={<Content/>} />
        <Route exact path='/Content' element={<Content/>} />    
        <Route exact path='/Pizzas' element={<Pizzas/>} />
        <Route exact path='/AddProduct' element={<AddProduct/>}/>
        <Route exact path='/UpdateProduct/:productId' element={<UpdateProduct/>}/>
        <Route exact path='/Register' element={<CreateAccount/>}/>
        <Route exact path='/Login' element={<Login loginData={loginData}/>}/>
        <Route exact path='/Chatroom' element={<Chatroom/>}/>
        <Route exact path='/OwnPizzas' element={<OwnPizzas/>}/>
      </Routes>
    </div>
  );
};