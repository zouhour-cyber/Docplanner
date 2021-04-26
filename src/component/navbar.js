// import logo-default-group-en.svg ./src;
import {Nav, Navbar, NavDropdown} from 'react-bootstrap'
// import src from '*.avif';
function Menu() {
  return (
    <div>
<Navbar   collapseOnSelect expand="lg" bg="white" variant="light" fixed="top">
<Navbar>
    <Navbar.Brand href="#home">
      <img
        src="/logo-docplanner.svg"
        width="200"
        height="40"
        className="d-inline-block align-top"
        alt="React Bootstrap logo"
      />
    </Navbar.Brand>
  </Navbar>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="ml-auto">
      <Nav.Link href="#features">About us</Nav.Link>
      <Nav.Link href="#pricing">Career</Nav.Link>
      <NavDropdown title="Departements" id="collasible-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.4">Departements</NavDropdown.Item>
      </NavDropdown>
    </Nav>

  </Navbar.Collapse>
</Navbar>
      
       
    
 
    </div>
  );
}

export default Menu;