import React, { Component } from "react";
import { Navbar, Row, Col } from "react-bootstrap";
import PropTypes from "prop-types";
import "./AppBar.css";

class AppBar extends Component {
  constructor(props) {
    super();
    this.state = {};
  }
  render() {
    const { title } = this.props;
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
  }
}

AppBar.propTypes = {
  title: PropTypes.string.isRequired
};

export default AppBar;
