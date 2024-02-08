import React, { useReducer } from 'react'
import { StoreContext } from './context'
import { defaultProps, initialStore } from './default';
import { reducer } from './reducer';

const StoreProvider = ({ children, initial }) => {
    const [state, dispatch] = useReducer(reducer, { ...initialStore, ...defaultProps(initial) });

    return <StoreContext.Provider value={{ state, dispatch }}>{children}</StoreContext.Provider>
}

export default StoreProvider 