import React, { Component } from "react";
import Select from "react-select";
import "./SearchSelect.css";

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

    const customStyles = {
      control: (base, state) => ({
        ...base,
        boxShadow: "none"
        // You can also use state.isFocused to conditionally style based on the focus state
      })
    };

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
          styles={{
            control: (base, state) => ({
              ...base,
              "&:hover": { borderColor: "rgb(89, 161, 39)" }, // border style on hover
              border: "1px solid gray", // default border color
              boxShadow: "none" // no box-shadow
            }),
            option: (provided, state) => ({
              ...provided,
              color: "black",
              backgroundColor: state.isFocused
                ? "rgba(89, 161, 39, 0.3)"
                : "white",
              ":active": {
                backgroundColor: "rgba(89, 161, 39, 0.7)"
              }
            })
          }}
        />
      </div>
    );
  }
}

export default SearchSelect;
