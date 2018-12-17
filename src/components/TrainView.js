import React, { Component } from "react";
import { Box, Tabs, Tab, Heading } from "grommet";
import { connect } from "react-redux";

import { getStations, getTrainsByStation } from "../actions/trainsActions";
import SearchSelect from "./SearchSelect";
import TrainTable from "./TrainTable/TrainTable";

class TrainView extends Component {
  constructor(props) {
    super();
    this.state = { selectedStation: "", selectedStationCode: "" };
  }
  componentDidMount = () => {
    this.props.getStations();
  };

  setSelectedStation = station => {
    this.setState({
      selectedStation: station.stationName,
      selectedStationCode: station.stationShortCode
    });
    this.props.getTrainsByStation(station.stationShortCode);
  };

  render() {
    const { stationsLoading, stations } = this.props;
    const { selectedStation, selectedStationCode } = this.state;
    let trainView;
    if (stationsLoading || stations === null) {
      trainView = <Heading> Loading..</Heading>;
    } else {
      trainView = (
        <Box gap="large">
          <SearchSelect
            outline="brand"
            stations={stations}
            setStation={this.setSelectedStation}
          />
          <Tabs>
            <Tab title="Saapuvat">Saapuvat</Tab>
            <Tab title="Lähtevät">
              <Heading>
                {selectedStation}
                {selectedStationCode}
              </Heading>
              <TrainTable />
            </Tab>
          </Tabs>
        </Box>
      );
    }

    return <Box alignSelf="start">{trainView}</Box>;
  }
}

const mapStateToProps = state => ({
  stations: state.data.stations,
  stationsLoading: state.data.stationsLoading
});

export default connect(
  mapStateToProps,
  { getStations, getTrainsByStation }
)(TrainView);
