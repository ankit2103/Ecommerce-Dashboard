import {Navbar,Nav, NavDropdown} from 'react-bootstrap'
import{Link} from 'react-router-dom'
function Header(){
    let user =JSON.parse(localStorage.getItem('user-info'))
    console.warn(user)
    return(
        <div>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Navbar.Brand href="#home">Dashboard</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="ml-auto">
                        {
                            localStorage.getItem('user-info') ?
                            <>
                                <Nav.Link href="/add">Add Products</Nav.Link>
                                <Nav.Link href="/update">Update Products</Nav.Link>
                            </>
                            :
                            <>
                                <Nav.Link href="/login">Login</Nav.Link>
                                <Nav.Link href="/register">Register</Nav.Link>
                            </>
                        }
                        <NavDropdown title={user && user.name}>
                            <NavDropdown.Item>Loggout</NavDropdown.Item>
                        </NavDropdown>
                        
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>
    );
        
}
export default Header