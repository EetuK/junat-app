import React, { Component } from "react";

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
      actualTime,
      cancelled
    } = this.props;

    console.log(liveEstimateTime);

    let trainTableRow;

    if (cancelled) {
      trainTableRow = (
        <tr>
          <td>{trainNumber}</td>
          <td>{departureStation}</td>
          <td>{destinationStation}</td>
          <td>{this.dateToTime(scheduledTime)}</td>
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

// TODO: proptypes

export default TrainTableRow;
