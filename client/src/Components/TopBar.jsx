import React from 'react';
import date from 'date-and-time';
import Nav from 'react-bootstrap/Nav';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import YouTubeIcon from '@mui/icons-material/YouTube';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';

const TopBar = () => {
  const now = new Date();
  const pattern = date.compile('dddd, MMMM DD YYYY');
  // const format = date.transform('2022-11-30', 'YYYY-MM-DD', 'MMM DD,YYYY');
  // console.log(format);
  return (
    <>
      <Row className="bg-dark d-none d-md-flex">
        <Col sm={8}>
          <Nav defaultActiveKey="/home" as="ul" className="ps-5">
            <Nav.Item as="li">
              <Nav.Link
                href="/home"
                className="text-body small p-2 text-body text-white-50"
              >
                {date.format(now, pattern)}
              </Nav.Link>
            </Nav.Item>
            <Nav.Item as="li">
              <Nav.Link
                eventKey="link-1"
                className="small p-2 text-body text-white-50"
              >
                Content
              </Nav.Link>
            </Nav.Item>
            <Nav.Item as="li">
              <Nav.Link
                eventKey="link-2"
                className="text-white-50 small p-2 text-body"
              >
                Login
              </Nav.Link>
            </Nav.Item>
          </Nav>
        </Col>
        <Col sm={4}>
          <Nav
            defaultActiveKey="/home"
            as="ul"
            className=" justify-content-end pe-3"
          >
            <Nav.Item as="li">
              <Nav.Link
                href="/home"
                className="small p-2 text-body text-white-50"
              >
                <YouTubeIcon />
              </Nav.Link>
            </Nav.Item>
            <Nav.Item as="li">
              <Nav.Link
                eventKey="link-1"
                className="small p-2 text-body text-white-50"
              >
                <TwitterIcon />
              </Nav.Link>
            </Nav.Item>
            <Nav.Item as="li">
              <Nav.Link
                eventKey="link-2"
                className="text-white-50 small p-2 text-body"
              >
                <FacebookIcon />
              </Nav.Link>
            </Nav.Item>
            <Nav.Item as="li">
              <Nav.Link
                eventKey="link-2"
                className="text-white-50 small p-2 text-body"
              >
                <InstagramIcon />
              </Nav.Link>
            </Nav.Item>
            <Nav.Item as="li">
              <Nav.Link
                eventKey="link-2"
                className="text-white-50 small p-2 text-body"
              >
                <LinkedInIcon />
              </Nav.Link>
            </Nav.Item>
          </Nav>
        </Col>
      </Row>
      <Row>
        <Col sm={12}>
          <a href="/" className="navbar-brand p-0 d-none d-md-block">
            <h1 className="m-0 display-4 text-uppercase text-primary">
              The<span className="text-secondary font-weight-normal">News</span>
            </h1>
          </a>
        </Col>
      </Row>
    </>
  );
};

export default TopBar;
