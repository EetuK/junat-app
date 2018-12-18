import React, { Component } from "react";
import { Navbar, Row, Col } from "react-bootstrap";
import "./AppBar.css";

class AppBar extends Component {
  constructor(props) {
    super();
    this.state = {};
  }
  render() {
    return (
      <Row>
        <Col xs={12}>
          <Navbar fluid={true}>
            <Navbar.Header>
              <Navbar.Brand>Aseman junatiedot</Navbar.Brand>
            </Navbar.Header>
          </Navbar>
        </Col>
      </Row>
    );
  }
}

export default AppBar;
