import React, { Component } from "react";
import Select from "react-select";

class SearchSelect extends Component {
  constructor(props) {
    super();
    this.state = { options: [] };
  }

  // Restructure stations list from api to option list for select component
  restructureOptions = options => {
    return options.map((option, i) => {
      return {
        label: option.stationName,
        value: option.stationName,
        stationShortCode: option.stationShortCode
      };
    });
  };

  componentDidMount = () => {
    this.setState({
      options: this.restructureOptions(this.props.stations)
    });
  };

  render() {
    const { options } = this.state;
    return (
      <div>
        <h5>Hae aseman nimellä</h5>
        <Select
          className="basic-single"
          classNamePrefix="select"
          isClearable={true}
          isSearchable={true}
          openMenuOnClick={false}
          openMenuOnFocus={false}
          name="Asemat"
          placeholder="Valitse asema..."
          options={options}
          onChange={val => {
            this.props.setStation(val);
          }}
        />
      </div>
    );
  }
}

export default SearchSelect;
