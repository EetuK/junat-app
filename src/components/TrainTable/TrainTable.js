import React, { Component } from "react";
import { Table } from "react-bootstrap";
import PropTypes from "prop-types";
import "./TrainTable.css";

// Components
import TrainTableRow from "./TrainTableRow";

class TrainTable extends Component {
  constructor(props) {
    super();
  }

  renderRows = (trains, stations, stationShortCode, stationName, type) => {
    if (trains !== null) {
      let trainRows = trains.map((train, i) => {
        // Only get trains which are Long-distance or Commuter trains.
        if (
          train.trainCategory === "Long-distance" ||
          train.trainCategory === "Commuter"
        ) {
          let error = false;

          // Get selected station's row from list of stations where train stops
          let stop = train.timeTableRows.filter(
            row =>
              row.stationShortCode === stationShortCode && row.type === type
          );
          if (stop.length < 1) {
            error = true;
          } else {
            stop = stop[0];
          }

          // Train name/code
          let trainCode;
          if (train.trainCategory === "Commuter") {
            trainCode = "Commuter Train " + train.commuterLineID;
          } else trainCode = train.trainType + " " + train.trainNumber;

          // Get final destination shortcode and find the real name from station list.
          const destStationShortCode =
            train.timeTableRows[train.timeTableRows.length - 1]
              .stationShortCode;

          let destinationStation = stations.filter(
            station => station.stationShortCode === destStationShortCode
          );
          // If train isn't found from the station list, it will not show on the table
          if (
            !destinationStation[0] ||
            destinationStation[0].stationName === undefined
          ) {
            destinationStation = destStationShortCode;
            error = true;
          } else {
            destinationStation = destinationStation[0].stationName;
          }

          // If this is the trains final destination, error
          if (destStationShortCode === stationShortCode) error = true;

          if (!error)
            return (
              <TrainTableRow
                key={i}
                trainNumber={trainCode}
                departureStation={stationName}
                destinationStation={destinationStation}
                scheduledTime={stop.scheduledTime}
                liveEstimateTime={stop.liveEstimateTime}
                actualTime={stop.actualTime}
                cancelled={stop.cancelled}
              />
            );
        }
        return undefined;
      });

      // Sort array of components by date
      return trainRows.sort((a, b) => {
        return (
          new Date(a.props.scheduledTime) - new Date(b.props.scheduledTime)
        );
      });
    }
  };

  render() {
    return (
      <Table striped>
        <thead>
          <tr>
            <th>
              <small className="text-muted ">Juna</small>
            </th>
            <th>
              <small className="text-muted ">Lähtöasema</small>
            </th>
            <th>
              <small className="text-muted ">Pääteasema</small>
            </th>
            <th>
              <small className="text-muted ">Aika</small>
            </th>
          </tr>
        </thead>
        <tbody>
          {this.renderRows(
            this.props.trains,
            this.props.stations,
            this.props.stationShortCode,
            this.props.stationName,
            this.props.type
          )}
        </tbody>
      </Table>
    );
  }
}

TrainTable.propTypes = {
  trains: PropTypes.array,
  stations: PropTypes.array.isRequired,
  stationShortCode: PropTypes.string.isRequired,
  stationName: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired
};

export default TrainTable;
