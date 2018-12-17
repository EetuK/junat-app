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

import TrainTableRow from "./TrainTableRow";

const trains = []

class TrainTable extends Component {
  render() {
    return (
      <Box>
        <Table>
          <TableHeader>
            <TableRow>
              <TableCell verticalAlign="middle">Juna</TableCell>
              <TableCell verticalAlign="middle">Lähtöasema</TableCell>
              <TableCell verticalAlign="middle">Pääteasema</TableCell>
              <TableCell verticalAlign="middle">Aika</TableCell>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TrainTableRow colored />
            <TrainTableRow />
          </TableBody>
        </Table>
      </Box>
    );
  }
}

export default TrainTable;
