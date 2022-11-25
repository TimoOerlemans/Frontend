import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import Header from './Components/Header';
import Footer from './Components/Footer';
import {BrowserRouter as Router} from 'react-router-dom';
import { render } from '@testing-library/react';
import { FrontendRoutes } from './routes';
import {useState, useEffect } from 'react';

function App() {
  const [logged, setLogged] = useState(false);

  useEffect(() => {
    setLogged(localStorage.getItem('logged'))
  }, [])

  render()
  return (
    <Router>
        <Header logged={localStorage.getItem('logged')}/>
        <div className="App">
        <FrontendRoutes/>
        <Footer/>
        </div>
    </Router>
  );
}

export default App