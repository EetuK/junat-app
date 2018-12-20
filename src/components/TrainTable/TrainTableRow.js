import React, { Component } from "react";
import PropTypes from "prop-types";

/*
<TableRow>
        <TableCell verticalAlign="middle">{trainNumber}</TableCell>
        <TableCell verticalAlign="middle">{departureStation}</TableCell>
        <TableCell verticalAlign="middle">{destinationStation}</TableCell>
        <TableCell verticalAlign="middle">
          aika <br /> aika
        </TableCell>
      </TableRow>
*/

class TrainTableRow extends Component {
  constructor() {
    super();
    this.state = {};
  }

  dateToTime = date => {
    return new Date(date).toLocaleTimeString("fi-FI", {
      hour: "2-digit",
      minute: "2-digit"
    });
  };

  render() {
    const {
      trainNumber,
      departureStation,
      destinationStation,
      scheduledTime,
      liveEstimateTime,
      cancelled
    } = this.props;

    let trainTableRow;

    if (cancelled) {
      trainTableRow = (
        <tr className="text-muted">
          <td>
            <del>{trainNumber}</del>
          </td>
          <td>
            <del>{departureStation}</del>
          </td>
          <td>
            <del>{destinationStation}</del>
          </td>
          <td className="red-font">Cancelled</td>
        </tr>
      );
    } else {
      trainTableRow = (
        <tr>
          <td>{trainNumber}</td>
          <td>{departureStation}</td>
          <td>{destinationStation}</td>

          {new Date(liveEstimateTime) >
          new Date(scheduledTime).setMinutes(
            new Date(scheduledTime).getMinutes() + 1
          ) ? (
            <td>
              <span className="red-font">
                {this.dateToTime(liveEstimateTime)}
              </span>
              <br />
              <small>({this.dateToTime(scheduledTime)})</small>
            </td>
          ) : (
            <td>{this.dateToTime(scheduledTime)}</td>
          )}
        </tr>
      );
    }

    return trainTableRow;
  }
}

TrainTableRow.propTypes = {
  key: PropTypes.number.isRequired,
  trainNumber: PropTypes.string.isRequired,
  departureStation: PropTypes.string.isRequired,
  destinationStation: PropTypes.string.isRequired,
  scheduledTime: PropTypes.string.isRequired,
  liveEstimateTime: PropTypes.string,
  actualTime: PropTypes.string,
  cancelled: PropTypes.bool
};

export default TrainTableRow;
