import logo from '../logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css'
import { Nav, Navbar, NavDropdown } from 'react-bootstrap'
import '../Navbar/HeaderStyle';

function Header() {
  
  return(
  <Navbar bg="dark" variant="dark" 
    sticky="top" expand="sm" collapseOnSelect>
    <Navbar.Brand>
      <img src={logo} width="40px" height="40px" />{' '}
        Netmatch
    </Navbar.Brand>
    <Navbar.Toggle className="coloring" />
      <Navbar.Collapse>
        <Nav>
          <NavDropdown title="Flight information">
            <NavDropdown.Item href="/Overview">Overview</NavDropdown.Item>
            <NavDropdown.Item href="#products/coffee">Accomodation</NavDropdown.Item>
            <NavDropdown.Item href="#products/chocolate">Flight</NavDropdown.Item>
            <NavDropdown.Item href="/Entryrestrictions">Entryrestrictions</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#products/promo">Insurrance & Extras</NavDropdown.Item>
            <NavDropdown.Item href="#products/promo">Payment</NavDropdown.Item>
          </NavDropdown>
          <Nav.Link href="#about-us">About Us</Nav.Link>
          <Nav.Link href="#contact-us">Contact Us</Nav.Link>       
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}

export default Header