import {
  GET_STATIONS,
  GET_ARRIVING_TRAINS_BY_STATION,
  GET_DEPARTING_TRAINS_BY_STATION,
  TRAINS_LOADING,
  STATIONS_LOADING,
  GET_TRAINS_BY_STATION
} from "../actions/types";

const initialState = {
  stations: null,
  trains: null,
  arrivingTrains: null,
  departingTrains: null,
  stationsLoading: false,
  trainsLoading: false
};

export default function(state = initialState, action) {
  switch (action.type) {
    case STATIONS_LOADING:
      return {
        ...state,
        stationsLoading: true
      };

    case TRAINS_LOADING:
      return {
        ...state,
        trainsLoading: true
      };
    case GET_STATIONS:
      return {
        ...state,
        stations: action.payload,
        stationsLoading: false
      };

    case GET_TRAINS_BY_STATION:
      return {
        ...state,
        trains: action.payload,
        trainsLoading: false
      };

    case GET_ARRIVING_TRAINS_BY_STATION:
      return {
        ...state,
        trains: null,
        trainsLoading: false
      };

    case GET_DEPARTING_TRAINS_BY_STATION:
      return {
        ...state,
        trains: null,
        trainsLoading: false
      };
    default:
      return state;
  }
}
