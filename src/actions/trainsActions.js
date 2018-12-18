import axios from "axios";

import {
  GET_STATIONS,
  GET_ARRIVING_TRAINS_BY_STATION,
  GET_DEPARTING_TRAINS_BY_STATION,
  TRAINS_LOADING,
  STATIONS_LOADING,
  GET_TRAINS_BY_STATION
} from "../actions/types";

////////////////////////////////////
// STATIONS

// Set stations loading
export const setStationsLoading = () => {
  return {
    type: STATIONS_LOADING
  };
};

// Get stations
export const getStations = () => dispatch => {
  dispatch(setStationsLoading());
  axios
    .post("https://rata.digitraffic.fi/api/v1/graphql/graphiql/?", {
      query: `{
        viewer {
          getStationsUsingGET(where:"[*passengerTraffic=true]") {
            stationName
            stationShortCode
          }
        }
      }`
    })
    .then(res => {
      dispatch({
        type: GET_STATIONS,
        payload: res.data.data.viewer.getStationsUsingGET
      });
    })
    .catch(err => {
      dispatch({
        type: GET_STATIONS,
        payload: {}
      });
      dispatch(setStationsLoading());
    });
};

///////////////////////////////////
// TRAINS

// Set trains loading
export const setTrainsLoading = () => {
  return {
    type: TRAINS_LOADING
  };
};

// Get trains by station
export const getTrainsByStation = stationShortCode => dispatch => {
  dispatch(setTrainsLoading());
  axios
    .get(
      "https://rata.digitraffic.fi/api/v1/live-trains/station/" +
        stationShortCode,
      {
        params: {
          minutes_before_departure: 120,
          minutes_after_departure: 1,
          minutes_before_arrival: 120,
          minutes_after_arrival: 1
        }
      }
    )
    .then(res => {
      dispatch({
        type: GET_TRAINS_BY_STATION,
        payload: res.data
      });
    })
    .catch(err => {
      dispatch({
        type: GET_STATIONS,
        payload: {}
      });
      dispatch(setStationsLoading());
    });
};
