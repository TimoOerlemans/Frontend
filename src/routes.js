import { Route, Routes } from 'react-router-dom';
import './App.css';
import Profile from './Components/Profile';
import Content from './pages/Content';
import Overview from './pages/Overview';
import Entryrestrictions from './pages/Entryrestrictions';

export const NetmatchRoutes  = () => {
  return (
    <div className="content">
      <Routes>
        <Route exact path='/' element={<Content/>} />
        <Route exact path='/Content' element={<Content/>} />    
        <Route exact path='/Overview' element={<Overview/>} />      
        <Route exact path='/Profile' element={<Profile/>}/>
        <Route exact path='/Entryrestrictions' element={<Entryrestrictions/>}/>
      </Routes>
    </div>
  );
};