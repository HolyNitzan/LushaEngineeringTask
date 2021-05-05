import { FunctionComponent } from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faUser } from '@fortawesome/free-solid-svg-icons';
import { Link as RouterLink } from 'react-router-dom';
const Navigation: FunctionComponent = () => {
  return (
    <Navbar bg="dark" variant="dark" className="mb-3">
      <Nav>
        <Nav.Item>
          <Nav.Link as={RouterLink} to="/">
              <span className="m-2"> 
                <FontAwesomeIcon icon={faHome} />
              </span>
              <span>Users</span>
            </Nav.Link>
        </Nav.Item>
        <Nav.Item>
            <Nav.Link as={RouterLink} to="/create">
              <span className="m-2">
                <FontAwesomeIcon icon={faUser} />
              </span>
              <span>Create User</span>
            </Nav.Link>
        </Nav.Item>
      </Nav>
    </Navbar>
  );
};

export default Navigation;
