import React, { useState } from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import SearchIcon from '@mui/icons-material/Search';
import Col from 'react-bootstrap/esm/Col';
import { Link, useNavigate } from 'react-router-dom';
import { LinkContainer } from 'react-router-bootstrap';

const NavBar = () => {
  const [data, setData] = useState('');
  const navigate = useNavigate();

  return (
    <>
      <Col sm={12}>
        <Navbar bg="black" expand="md" className="py-2 py-lg-0 px-lg-5">
          <Container fluid>
            <Navbar.Brand href="#" className="d-block d-md-none">
              <a href="index.html" className="navbar-brand d-block d-lg-none">
                <h1 className="m-0 display-4 text-uppercase text-primary">
                  The<span className="text-white font-weight-normal">News</span>
                </h1>
              </a>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" className=" text-white">
              <MenuIcon />
            </Navbar.Toggle>
            <Navbar.Collapse id="navbarScroll">
              <Nav className="me-auto my-2 my-lg-0" navbarScroll>
                <LinkContainer
                  to="/"
                  className=" nav-item text-decoration-none"
                >
                  <div className="nav-link ">Home</div>
                </LinkContainer>
              </Nav>

              <div
                className="input-group ml-auto d-none d-lg-flex"
                style={{ width: '100%', maxWidth: '300px' }}
              >
                <input
                  type="text"
                  className="form-control border-0"
                  placeholder="Keyword"
                  onChange={(e) => setData(e.target.value)}
                  value={data}
                />
                <div className="input-group-append border-start-0">
                  <button
                    className="input-group-text bg-primary text-dark px-3"
                    style={{ borderRadius: '0px' }}
                    onClick={() =>
                      data !== '' ? navigate(`/category/${data}`) : undefined
                    }
                  >
                    <SearchIcon />
                  </button>
                </div>
              </div>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </Col>
    </>
  );
};

export default NavBar;
