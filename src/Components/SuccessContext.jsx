import React,{ useState, createContext } from 'react';

export const SuccessContext = createContext()

export const SuccessProvider = props => {

    let [success, setSuccess] = useState(false)

    return (
        <SuccessContext.Provider value={[success, setSuccess]}>
            {props.children}
        </SuccessContext.Provider>
    )
}