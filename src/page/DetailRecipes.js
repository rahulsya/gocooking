import { useEffect, useState } from 'react'
import {useRouteMatch} from 'react-router-dom'

import {detailRecipe} from '../api/index'

import Navbar from '../components/navbar'
import Footer from '../components/Footer'
import Foodex from '../assets/images/food-ex.jpg'

export default function DetailRecipes() {
    let {params}=useRouteMatch()
    const [recipes,setRecipes]=useState('')
    const [ingredient,setIngredient]=useState([])
    const [step,setStep]=useState([])
    
    useEffect(()=>{
        detailRecipe(params?.key)
        .then(res=>{
            let {title,thumb,desc,servings,times,dificulty}=res.data.results
            setRecipes({title,thumb,desc,servings,times,dificulty})
            setIngredient(res.data.results.ingredient)
            setStep(res.data.results.step)
        })
        .catch(err=>console.log(err.message))
    },[params])
    return (
        <div className="h-full w-full">
            <Navbar/>
            <div className="container mx-auto px-5">
                <div className="text-xl lg:text-3xl font-semibold mt-5 w-full">
                {recipes.title}
                </div>
                <div className="w-full">
                {recipes.desc}
                </div>
                <img src={recipes.thumb ? recipes.thumb : Foodex} 
                className="mt-4 mb-5 
                w-full h-auto object-cover
                rounded-md shadow-lg"
                alt="ayam kecap"/>
                <div className="flex flex-col-reverse lg:flex-row justify-between mb-5">
                    <div className="flex flex-col">
                        <div>
                            <div className="text-2xl font-semibold mb-2">Bahan - Bahan</div>
                            {ingredient.map((item,index)=>{
                                return (
                                    <div key={index} className="pl-3 text-xl font-light">
                                        {item}
                                    </div>
                                )
                            })}
                        </div>
                        <div>
                            <div className="text-2xl font-semibold mb-2">Cara Masak</div>
                            {step.map((item,index)=>{
                                return (
                                    <div key={index} className="pl-3 text-xl font-light">
                                        {item}
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                    <div 
                    className="flex flex-row justify-between lg:flex-col items-center text-center 
                    px-5 py-6 
                    mb-5
                    h-auto lg:h-64
                    shadow-lg bg-gray-100">
                        <div className="flex flex-col lg:mb-4">
                            <p className="text-sm text-gray-500">Waktu Masak</p>
                            <p className="font-semibold">{recipes.times}</p>
                        </div>
                        <div className="flex flex-col lg:mb-4">
                            <p className="text-sm text-gray-500">Porsi</p>
                            <p className="font-semibold">{recipes.servings}</p>
                        </div>
                        <div className="flex flex-col">
                            <p className="text-sm text-gray-500">Level</p>
                            <p className="font-semibold">{recipes.dificulty}</p>
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    )
}
