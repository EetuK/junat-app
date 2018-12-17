import React, { Component } from "react";
import { Box, Text } from "grommet";

class AppBar extends Component {
  constructor(props) {
    super();
    this.state = {};
  }
  render() {
    return (
      <Box
        tag="header"
        direction="row"
        align="center"
        justify="between"
        background="brand"
        pad={{ left: "medium", right: "small", vertical: "small" }}
        elevation="medium"
        style={{ zIndex: "1" }}
        {...this.props}
      >
        <Text color="white" margin="none">
          {this.props.title}
        </Text>
      </Box>
    );
  }
}

export default AppBar;
