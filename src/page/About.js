import React from 'react'

import Navbar from '../components/navbar'
import Footer from '../components/Footer'

import {ReactComponent as Member} from '../assets/images/user.svg'

const members=[
    {
        nama:'Rahul',
        npm:15118829
    },
]

export default function About() {
    return (
        <>
        <Navbar/>
            <div className="min-h-screen container mx-auto px-5">
                <div className="text-2xl font-bold mt-5">
                    # Tentang Go Cooking
                </div>
                <div>
                    <p className="mt-3 capitalize text-lg">Go cooking adalah web pencarian makanan ,selain pencarian makanan user juga dapat menyimapan resep pada device user. <br/>
                     data resep yang disedikan berasal dari api unofficial masak apa hari ini 
                    </p>
                </div>
                <div className="text-2xl font-bold mt-5">
                    # Team Kami
                </div>
                <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
                    {members.map((member,index)=>{
                        return(
                            <div key={index} className="flex flex-col items-center mt-2">
                                <Member/>
                                <p className="mt-4">{member.nama}</p>
                                <p>{member.npm}</p>
                            </div>
                        )
                    })}
                </div>
            </div>
            <Footer/>
        </>
    )
}
