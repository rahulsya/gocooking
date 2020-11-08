import {useEffect, useState} from 'react'
import {Link} from 'react-router-dom'
import {BeatLoader} from 'react-spinners'

import NavBar from '../components/navbar'
import SearchForm from '../components/SearchForm'
import Footer from '../components/Footer'

import {getRecipes} from '../api'

const statusList={
  idle: "idle",
  process: "process",
  success: "success",
  error: "error",
}

export default function Home() {
    
    const [items,setItems]=useState([''])
    const [status,setStatus]=useState(statusList.idle)
    
    useEffect(()=>{
        (async()=>{
            try {
                setStatus(statusList.process)
                let response=await getRecipes()
                setItems(response.data.results)
                setStatus(statusList.success)
            } catch (error) {
                console.error(error.message)
                setStatus(statusList.error)
            }
        })()
    },[])
    return (
        <div className="h-screen w-full ">
            <NavBar/>
            <div className="w-full h-112 bg-cover bg-center bg-gray-200" style={{backgroundImage:`url('https://source.unsplash.com/wMzx2nBdeng/1600x900')`}}>
                <div className="flex flex-col items-center">
                    <div className="text-3xl font-semibold capitalize mt-32">search your recipies</div>
                    <div className="mt-4 w-full">
                        <SearchForm/>
                    </div>
                </div>
            </div>
            <div className="container mx-auto px-5 mt-5 mb-5 text-gray-800">
                <div className="text-2xl font-semibold">Masak Apa Hari Ini ? </div>
                {status === statusList.success ?
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 ">
                    {items.map((item,index)=>{
                        return (
                            <Link key={index}  to={`detail-recipes/${item.key}`}>
                            <div className="h-auto px-2 py-3 bg-gray-100 shadow-lg rounded-md">
                    <img className="h-40 w-full object-cover rounded-md" src={item.thumb} alt={item.key}/>
                    <div className="text-center w-full pt-4 font-semibold">
                        {item.title}
                    </div>
                    <div className="divide-y divide-gray-400">
                        <div className="text-center py-2"></div>
                        <div className="text-center py-2"></div>
                    </div>
                    <div className="flex flex-row justify-between items-center text-center px-5 mb-4  font-semibold">
                        <div className="flex flex-col">
                            <div className="text-sm text-gray-500">Waktu Masak</div>
                            <div>{item.times}</div>
                        </div>
                        <div className="flex flex-col">
                            <div className="text-sm text-gray-500">Porsi</div>
                            <div>{item.portion}</div>
                        </div>
                        <div className="flex flex-col">
                            <div className="text-sm text-gray-500">Level</div>
                            <div>{item.dificulty}</div>
                        </div>
                    </div>
                </div>
                            </Link>
                        )
                    })}
            </div>
                :<div className="text-4xl text-center mt-12 mb-12">
                    <BeatLoader
                    color="black"
                    margin={5}
                    size={25}
                    />
                </div>
                }
            </div>

            <Footer/>
        </div>
    )
}
