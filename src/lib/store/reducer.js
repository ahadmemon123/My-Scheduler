import React, { createContext, useContext, useReducer } from 'react';

// Define initial state
const initialState = {
    count: 0
};

// Define actions
const actionTypes = {
    INCREMENT: 'INCREMENT',
    DECREMENT: 'DECREMENT'
};

// Define reducer function
export const reducer = (state, action) => {
    switch (action.type) {
        case actionTypes.INCREMENT:
            return { ...state, count: state.count + 1 };
        case actionTypes.DECREMENT:
            return { ...state, count: state.count - 1 };
        default:
            return state;
    }
};

