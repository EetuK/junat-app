import React, { Component } from "react";
import {
  Box,
  Table,
  TableBody,
  TableCell,
  TableFooter,
  TableHeader,
  TableRow,
  Text
} from "grommet";

class TrainTableRow extends Component {
  constructor() {
    super();
    this.state = {};
  }
  render() {
    const { trainNumber, departureStation, destinationStation } = this.props;
    return (
      <TableRow>
        <TableCell verticalAlign="middle">{trainNumber}</TableCell>
        <TableCell verticalAlign="middle">{departureStation}</TableCell>
        <TableCell verticalAlign="middle">{destinationStation}</TableCell>
        <TableCell verticalAlign="middle">
          aika <br /> aika
        </TableCell>
      </TableRow>
    );
  }
}

// TODO: proptypes

export default TrainTableRow;
