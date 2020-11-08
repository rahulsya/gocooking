import {createContext, useState} from 'react'

export const recipesContext=createContext()

export const RecipesContextProvider=({children})=>{
    const [state,setState]=useState('from context')
    
    return(
        <recipesContext.Provider value={{setState,state}}>
            {children}
        </recipesContext.Provider>
    )
}