import { FutureEatsContext } from "./context.js";
import {useState} from 'react';


export const FutureEatsProvider = (props) => { 

    return (
        <FutureEatsContext.Provider value={{}}>
            {props.children}
        </FutureEatsContext.Provider>
    )

}