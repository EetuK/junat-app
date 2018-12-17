import React, { Component } from "react";
import { Box, Grommet, ResponsiveContext } from "grommet";
import { Provider } from "react-redux";
import store from "./store";

import AppBar from "./components/AppBar";
import TrainView from "./components/TrainView";

const theme = {
  global: {
    colors: {
      brand: "rgb(89,161,39)",
      white: "rgb(255,255,255)",
      disabled: "rgb(120,120,120)",
      red: "rgb(220,10,10)",
      lightGray: "rgb(220,220,220)"
    },
    font: {
      family: "Arial",
      size: "14px",
      height: "20px"
    }
  }
};

class App extends Component {
  state = {};
  render() {
    return (
      <Provider store={store}>
        <Grommet theme={theme} full>
          <ResponsiveContext.Consumer>
            {size => (
              <Box fill>
                <AppBar title="Aseman junatiedot" />
                <Box justify="center" fill="horizontal" direction="row" flex>
                  <TrainView />
                </Box>
              </Box>
            )}
          </ResponsiveContext.Consumer>
        </Grommet>
      </Provider>
    );
  }
}

export default App;
