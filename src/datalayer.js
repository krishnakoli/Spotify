import {React,useContext,createContext, useReducer} from 'react';

export const Datalayercontext=createContext();

export const Datalayer=({initialState,reducer,children})=>(
            <Datalayercontext.Provider value={useReducer(reducer,initialState)}>
                {children}
            </Datalayercontext.Provider>
);


export const useDatalayervalue=()=>useContext(Datalayercontext);
