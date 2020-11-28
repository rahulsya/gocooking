import {createContext, useState,useEffect} from 'react'
import {getRecipes} from '../api/index'

export const recipesContext=createContext()

const statusList={
    idle: "idle",
    process: "process",
    success: "success",
    error: "error",
}

export const RecipesContextProvider=({children})=>{
    const [recipes,setRecipes]=useState([])
    const [status,setStatus]=useState(statusList.idle)
    const [saveRecipes,setSaveRecipes]=useState(
        localStorage.getItem("recipes") ? JSON.parse(localStorage.getItem("recipes")) : [])

    useEffect(()=>{
        (async()=>{
            try {
                setStatus(statusList.process)
                
                let response=await getRecipes()
                setRecipes(response.data.results)

                setStatus(statusList.success)
            } catch (error) {
                console.error(error.message)
                setStatus(statusList.error)
            }
        })()
    },[])
    
    useEffect(()=>{
        if (saveRecipes) {
            localStorage.setItem("recipes",JSON.stringify(saveRecipes))
        }
    },[saveRecipes])

    const handleSave=(recipe)=>{
        if (saveRecipes.find(item=> item.key===recipe.key)) {
            setSaveRecipes([...saveRecipes])
        }else{
            setSaveRecipes([...saveRecipes,recipe])
        }
    }

    const handleRemoveItem=(key)=>{
        setSaveRecipes(recipes=>{
            return recipes.filter(item=>item.key !== key)
        })
    }

    return(
        <recipesContext.Provider value={{
            recipes,
            status,
            handleSave,
            saveRecipes,
            handleRemoveItem}}>
            {children}
        </recipesContext.Provider>
    )
}