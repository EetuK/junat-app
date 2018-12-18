// Libraries / Depedencies
import React, { Component } from "react";
import { Grid } from "react-bootstrap";
import { Provider } from "react-redux";
import store from "./store";
import "./App.css";

// Components
import AppBar from "./components/AppBar/AppBar";
import TrainView from "./components/TrainView/TrainView";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Grid>
          <AppBar title="Aseman junatiedot" />
          <TrainView />
        </Grid>
      </Provider>
    );
  }
}

export default App;
