import React, { createContext, useContext, useReducer } from "react";

// Define actions
const actionTypes = {
  ONCELLCLICK: "ONCELLCLICK",
  SETEVENTS: "SETEVENTS",
  SETSTATE: "SETSTATE",
};

// Define reducer function
export const reducer = (state, action) => {
  switch (action.type) {
    case actionTypes.SETEVENTS:
      return { ...state, events: action.payload };
    case actionTypes.SETSTATE:
      return { ...state, [action.payload.name]: action.payload.value };
    default:
      return state;
  }
};
