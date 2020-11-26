import React from 'react'
import ImageHero from '../assets/images/hero.jpg'

export default function Hero() {
    return (
        <div className="container mx-auto px-5">
            <div className="mt-16 lg:mt-24 flex flex-col lg:flex-row lg:justify-between ">
                    <div className="text-3xl lg:text-5xl text-gray-800 text-center lg:text-left font-bold capitalize">
                        <p>eat what you cook </p>
                        <p className="mb-4">with us, Together!</p>
                        <p className="mb-4 text-lg font-light lg:w-3/4">When you eat something that cooked by yourself, the happiness is priceless.</p>
                        <button className="px-3 py-2 font-bold text-lg rounded bg-yellow-500 text-white inline">
                            Mari Masak!!!
                        </button>
                    </div>
                    <div className="hidden lg:block">
                        <img 
                        src={ImageHero} 
                        alt="ingredient"/>
                    </div>
                </div>
        </div>
    )
}
