import { SET_ALERT, REMOVE_ALERT } from "../constants/alertConstants";

const initialState = [];

export const alerts =  (state = initialState, action) =>  {
    const {type, payload} = action;


  switch (type) {
    case SET_ALERT:
      return [...state, payload];
    case REMOVE_ALERT:
      return state.filter((cur) => cur.id !== payload);
    default:
      return state;
  }
}
