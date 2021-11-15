import React from "react";
import { Col, Container, Nav, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

import "./Footer.css";

function Footer() {
  return (
    <Container className="footer__area">
      <Row className="g-4 mt-5 mb-5">
        <Col sm={12} md={4} className="footer__intro">
          <img className="brand__logo" src="https://demo.vehica.com/wp-content/uploads/2021/09/vehica-logo-dark-retina.png" alt="" />
          <p>
            The  Rolls-Royce special model Dawn "Silver Bullet", which as usual includes three individualisation main areas.
          </p>
        </Col>
        <Col sm={12} md={4}>
          <h3>Usefull Links</h3>
          <Nav.Link className="nav__link footer__link" as={Link} to="/">
            Home
          </Nav.Link>
          <Nav.Link className="nav__link footer__link" as={Link} to="/products">
            Products
          </Nav.Link>
          <Nav.Link
            className="nav__link footer__link"
            as={Link}
            to="/dashboard"
          >
            Dashboard
          </Nav.Link>
        </Col>
        <Col md={4} className="footer__subscribe">
          <h3 className="ps-3">SIGN UP</h3>
          <p className="ps-3">
            Receive our latest updates about <br />
            our news and blogs.
          </p>
          <div className="input-group mb-3 mt-3 ps-3">
            <input className="input__email" type="text" />
            <button className="btn button" type="button">
              Submit
            </button>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;
