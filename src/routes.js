import { Route, Routes } from 'react-router-dom';
import './App.css';
import Content from '../src/pages/Content'

export const routes  = () => {
  return (
    <div className="content">
      <Routes>
        <Route exact path='/' element={<Content/>} />
      </Routes>
    </div>
  );
};