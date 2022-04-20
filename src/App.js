import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import Header from './Components/Navbar/Header';
import Footer from './Components/Footer/Footer';
import {BrowserRouter as Router} from 'react-router-dom';
import { render } from '@testing-library/react';
import { Routes } from './routes';

function App() {
  render()
  return (
    <Router>
        <Header />
        <div className="App">
          <Routes/>
        <Footer/>
        </div>
    </Router>
  );
}

export default App