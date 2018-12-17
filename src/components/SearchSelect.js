import React, { Component } from "react";
import { Select, Heading, Box, Text, Button } from "grommet";

class SearchSelect extends Component {
  constructor(props) {
    super();
    this.state = { option: "", options: [], value: "" };
  }

  componentDidMount = () => {
    this.setState({
      options: this.props.stations,
      stations: this.props.stations
    });
  };

  render() {
    const { option, options, value } = this.state;
    return (
      <Box>
        <Heading level="4">Hae aseman nimellä</Heading>
        <Select
          placeholder="Aseman nimi"
          dropHeight="medium"
          emptySearchMessage="Ei hakutuloksia"
          focusIndicator={false}
          options={options}
          value={value}
          children={(option, index, options, state) => {
            return <Text>{option.stationName}</Text>;
          }}
          onSearch={searchText => {
            const regexp = new RegExp(searchText, "i");
            this.setState({
              options: this.state.stations.filter(o =>
                o.stationName.match(regexp)
              )
            });
          }}
          onChange={event => {
            this.setState({
              value: event.value.stationName,
              option: event.option
            });
            this.props.setStation(event.value);
          }}
        />
      </Box>
    );
  }
}

export default SearchSelect;
