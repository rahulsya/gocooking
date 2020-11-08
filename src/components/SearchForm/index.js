import {useState} from 'react'
import {Link} from 'react-router-dom'
import {BounceLoader} from 'react-spinners'

import {searchRecipe} from '../../api/index'

const statusList={
    idle:'idle',
    process:'process',
    success:'success',
    error:'error'
}

export default function SearchForm() {
    const [active,setActive]=useState(false)
    const [status,setStatus]=useState(statusList.idle)

    const [keyword,setKeyword]=useState('')
    const [results,setResult]=useState([])
    

    const handleChange=(e)=>{
        setKeyword(e.target.value)
        setActive(false)
    }

    const handleSearch=()=>{
        (async()=>{
            try {
                // active the box result
                setActive(true)

                // do get api
                setStatus(statusList.process)
                setResult([]) // set if result there a length
                let response=await searchRecipe(keyword)
                setResult(response.data.results.slice(0,10))
                setStatus(statusList.success)
            } catch (error) {
                setStatus(statusList.error)
                console.log(error.message)
            }
        })()
    }
    return (
        <div className="container mx-auto px-5">
            <div className="flex flex-row justify-center">
                <input 
                    type="text"
                    name="key"
                    onChange={handleChange}
                    className="w-full lg:w-112 py-4 px-5 shadow-xl rounded font-semibold"
                    placeholder="Rendang..."/>
                <button 
                className="
                ml-2 py-2 px-3 text-gray-100 bg-yellow-600 rounded"
                onClick={handleSearch}>Search</button>
            </div>
                {/* result */}
                    {/* <button className="py-1 px-2 mt-2 bg-yellow-600 font-semibold text-gray-100" onClick={()=>setActive(!active)}>Toggle Result</button> */}
                
                    {active ?
                    <div>
                        <div 
                        className="
                        relative z-10 w-full h-64 lg:w-3/4 py-3 px-3 mt-4 
                        mx-auto 
                        overflow-y-auto bg-gray-100 shadow-lg
                        rounded 
                        ">
                            <div className="flex flex justify-between ">
                                <p className="capitalize">Hasil Pencarian {keyword}</p>
                                <button className="px-2 bg-red-500 text-gray-100" onClick={()=>setActive(false)}>X</button>
                            </div>
                        
                            {status===statusList.process && (
                                <div className="flex justify-center py-12">
                                    <BounceLoader
                                    color="black"
                                    size={50}/>
                                </div>
                            )}

                            {results.length === 0 && status===statusList.success ? (
                                <div className="text-center text-3xl py-12">{keyword} Tidak ditemukan</div>
                            ) :''}

                            {results.map((result,index)=>{
                                return (
                                <div key={index} className="flex items-center py-2 px-2 border-b-2">
                                    <img className="w-20 h-12 object-cover rounded-md" src={result.thumb} alt="food-example"/>
                                    <Link to={`detail-recipes/${result.key}`}>
                                        <div className="pl-4 w-88 font-semibold hover:text-gray-500">
                                            {result.title}
                                        </div>
                                    </Link>
                                </div>
                                )
                            })}
                        </div>
                    </div> : '' }
                        {/* end result */}
        </div>
    )
}
