import 'bootstrap/dist/css/bootstrap.min.css'
import { Navbar, Nav, NavDropdown, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode } from '@fortawesome/free-solid-svg-icons';
import './style.scss'


 
const NavBar = () => {


   

  return (
   
        
    <Navbar expand="lg" className="bg-body-tertiary">
        <Container  >
        <Navbar.Brand className='space-btwn' >
            Kelvin Fosu
        <FontAwesomeIcon icon={faCode} className="bounce" />
        </Navbar.Brand>
       <Navbar.Toggle aria-controls="basic-navbar-nav" />
       <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
            
        
        
        <Nav.Link as ={Link} to="/"> Home</Nav.Link>
        <Nav.Link as ={Link} to="/about">About </Nav.Link>
        <Nav.Link as ={Link} to="/skills">Skills</Nav.Link>
        <Nav.Link as ={Link} to="/resume">Resume</Nav.Link>
        <Nav.Link as ={Link} to="/portfolio"> Portfolio</Nav.Link>
        
        <Nav.Link as ={Link} to="/contact">Contact</Nav.Link>
        <NavDropdown title="Social media" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Facebook</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Instagram
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">LinkIN</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Tiktok</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">X</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Github
              </NavDropdown.Item>
            </NavDropdown>
        
        </Nav>
    
       </Navbar.Collapse>
         
       
        </Container>
    </Navbar>
    
  )
}
 





export default NavBar