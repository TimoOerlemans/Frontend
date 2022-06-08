import 'bootstrap/dist/css/bootstrap.min.css'
import { Nav, Navbar, NavDropdown } from 'react-bootstrap'
import '../Components/Header.css';

function Header() {
  
  return(
    <div data-testid="header" className="header">
  <Navbar bg="dark" variant="dark" 
    sticky="top" expand="sm" collapseOnSelect>
    <Navbar.Brand>
      <img src="./assets/Pizza-logo.png" width="50px" height="50px" />
        Pizza
    </Navbar.Brand>
    <Navbar.Toggle className="coloring" />
      <Navbar.Collapse>
        <Nav>
          <NavDropdown title="Menu">
            <NavDropdown.Item href="/Pizzas">Pizzas</NavDropdown.Item>
            <NavDropdown.Item href="/AddProduct">Add Pizza</NavDropdown.Item>
          </NavDropdown>
          <Nav.Link href="#about-us">About Us</Nav.Link>
          <Nav.Link href="#contact-us">Contact Us</Nav.Link>
          <Nav.Link href="/Chatroom">Chatroom</Nav.Link>              
        </Nav>
      </Navbar.Collapse>
    </Navbar>
    </div>
  )
}

export default Header