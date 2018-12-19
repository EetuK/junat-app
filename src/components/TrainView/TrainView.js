import React, { Component } from "react";
import { Tabs, Tab, Col, Row } from "react-bootstrap";
import { connect } from "react-redux";
import "./TrainView.css";

import { getStations, getTrainsByStation } from "../../actions/trainsActions";
import SearchSelect from "../SearchSelect/SearchSelect";
import TrainTable from "../TrainTable/TrainTable";

class TrainView extends Component {
  constructor(props) {
    super();
    this.state = { selectedStation: "Tampere", selectedStationCode: "TPE" };
  }
  componentDidMount = () => {
    this.props.getStations();
  };

  setSelectedStation = station => {
    if (station) {
      this.setState({
        selectedStation: station.value,
        selectedStationCode: station.stationShortCode
      });
      this.props.getTrainsByStation(station.stationShortCode);
    }
  };

  render() {
    const { stationsLoading, stations } = this.props;
    const { selectedStation, selectedStationCode } = this.state;
    let trainView;
    if (stationsLoading || stations === null) {
      trainView = <h2> Loading..</h2>;
    } else {
      trainView = (
        <div>
          <Row>
            <Col lg={3} md={4} sm={5} xs={10}>
              <SearchSelect
                stations={stations}
                setStation={this.setSelectedStation}
              />
            </Col>
          </Row>
          <Row className="top30">
            <Col lg={8} md={9} sm={9}>
              <Tabs defaultActiveKey={1} id="Junat">
                <Tab eventKey={1} title="Saapuvat">
                  <TrainTable
                    trains={this.props.trains}
                    stations={stations}
                    stationShortCode={selectedStationCode}
                    stationName={selectedStation}
                    type="ARRIVAL"
                  />
                </Tab>
                <Tab eventKey={2} title="Lähtevät">
                  <TrainTable
                    trains={this.props.trains}
                    stations={stations}
                    stationShortCode={selectedStationCode}
                    stationName={selectedStation}
                    type="DEPARTURE"
                  />
                </Tab>
              </Tabs>
            </Col>
          </Row>
        </div>
      );
    }

    return <div>{trainView}</div>;
  }
}

const mapStateToProps = state => ({
  stations: state.data.stations,
  stationsLoading: state.data.stationsLoading,
  trains: state.data.trains
});

export default connect(
  mapStateToProps,
  { getStations, getTrainsByStation }
)(TrainView);
