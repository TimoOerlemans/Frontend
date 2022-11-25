import 'bootstrap/dist/css/bootstrap.min.css'
import { Nav, Navbar, NavDropdown } from 'react-bootstrap'
import '../Components/Header.css';
import {useState, useEffect } from 'react';

function Header(props) {
  const [navbarState, setNavbarState] = useState(false);
  const [logged, setLogged] = useState(false)

  useEffect(() => {
    console.log(props.logged)
    console.log("logged =>" + logged)
    setLogged(props.logged)
  }, [props.logged])

  return(
    
    <div data-testid="header" className="header">
      {
      logged === "true" ? (
  <Navbar bg="dark" variant="dark" 
    sticky="top" expand="sm" collapseOnSelect>
    <Navbar.Brand>
      <img alt='' src="./assets/Pizza-logo.png" width="50px" height="50px" />
        Pizza
    </Navbar.Brand>
    <Navbar.Toggle className="coloring" />
      <Navbar.Collapse>
        <Nav>
          <NavDropdown title="Menu">
            <NavDropdown.Item href="/Pizzas">Pizzas</NavDropdown.Item>
            <NavDropdown.Item href="/OwnPizzas">Own Pizzas</NavDropdown.Item>
            <NavDropdown.Item href="/AddProduct">Add Pizza</NavDropdown.Item>
          </NavDropdown>
          <Nav.Link href="/Login" onClick={() => {localStorage.clear()}}>Log out</Nav.Link>
          <Nav.Link href="/Chatroom">Chatroom</Nav.Link>              
        </Nav>
      </Navbar.Collapse>
    </Navbar>
        ) : (
          <div>
            <Navbar bg="dark" variant="dark" sticky="top" expand="sm" collapseOnSelect>
              <Navbar.Brand>
              <img alt='' src="./assets/Pizza-logo.png" width="50px" height="50px" />
              Pizza
              </Navbar.Brand>
              <Navbar.Toggle className="coloring" />
              <Nav.Link href="/Register">Register</Nav.Link>
              <Nav.Link href="/Login">Login</Nav.Link>
            </Navbar>
          </div>
        )
        }
    </div>  
  )

}

export default Header