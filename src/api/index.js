import Axios from 'axios'

const CORS_URL='https://cors-anywhere.herokuapp.com/'
const BASE_URL="https://masak-apa.vercel.app/api/"

export const getCategories=async()=>{
    return await Axios.get(`${CORS_URL}${BASE_URL}/categorys/recipes`)
}

export const getCategoriesBykey=async(key)=>{
    return await Axios.get(`${CORS_URL}${BASE_URL}/categorys/recipes/${key}`)
}
export const searchRecipe=async(keyword)=>{
    return await Axios.get(`${CORS_URL}${BASE_URL}/search/?q=${keyword}`)
}

export const detailRecipe=async(key)=>{
    return await Axios.get(`${CORS_URL}${BASE_URL}/recipe/${key}`)
}

export const getRecipes=async()=>{
    return await Axios.get(`${CORS_URL}${BASE_URL}/recipes`)
}