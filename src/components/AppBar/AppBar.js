import React from "react";
import { Navbar, Row, Col } from "react-bootstrap";
import PropTypes from "prop-types";
import "./AppBar.css";

const AppBar = props => {
  const { title } = props;
  return (
    <Row>
      <Col xs={12}>
        <Navbar fluid={true}>
          <Navbar.Header>
            <Navbar.Brand>{title}</Navbar.Brand>
          </Navbar.Header>
        </Navbar>
      </Col>
    </Row>
  );
};

AppBar.propTypes = {
  title: PropTypes.string.isRequired
};

export default AppBar;
