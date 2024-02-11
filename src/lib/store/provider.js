import React, { useEffect, useReducer } from "react";
import { StoreContext } from "./context";
import { defaultProps, initialStore } from "./default";
import { reducer } from "./reducer";

const StoreProvider = ({ children, initial }) => {
  const [state, dispatch] = useReducer(reducer, {
    ...initialStore,
    ...defaultProps(initial),
  });

  useEffect(() => {
    dispatch({
      type: "SETEVENTS",
      payload: initial.events,
    });
  }, [initial.events]);

  return (
    <StoreContext.Provider value={{ state, dispatch }}>
      {children}
    </StoreContext.Provider>
  );
};

export default StoreProvider;
