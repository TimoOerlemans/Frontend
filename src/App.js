import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import Header from './Components/Header';
import Footer from './Components/Footer';
import {BrowserRouter as Router} from 'react-router-dom';
import { render } from '@testing-library/react';
import { FrontendRoutes } from './routes';
import { useAuth0 } from '@auth0/auth0-react';

function App() {
  render()
  return (
    <Router>
        <Header />
        <div className="App">
        <FrontendRoutes/>
        <Footer/>
        </div>
    </Router>
  );
}

export default App