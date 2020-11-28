import {useState} from 'react'
import { Link,useLocation } from 'react-router-dom'

export default function NavBar() {
    const [toggle,setToggle]=useState(false)
    let location=useLocation()

    const activeNavLink=(path)=>{
        return location.pathname===path ? `font-bold text-yellow-500` : ''
    }

    const toggleMenu=()=>{
        setToggle(!toggle)
    }
    return (
        <header>
            <div className="w-full py-4 px-5 bg-gray-800">
                <div className="container mx-auto flex flex-row justify-between items-center ">
                    <div className="font-bold text-xl text-white">
                            {/* <Link to="/"> */}
                            <span className="font-extrabold">Go</span>Cooking
                            {/* <img src={Logo} alt="logo" className="w-32" /> */}
                            {/* </Link> */}
                    </div>
                    <nav className="">
                        <ul className="hidden lg:flex items-center font text-white">
                            <li className={`mx-3 ${activeNavLink('/')}`}><Link to="/">Home</Link></li>
                            <li className={`mx-3 ${activeNavLink('/recipes')}`}><Link to="/recipes">Recipes</Link></li>
                            <li className={`mx-3 ${activeNavLink('/saved-recipes')}`}><Link to="/saved-recipes">My Recipes</Link></li>
                            <li className={`mx-3 ${activeNavLink('/about')}`}><Link to="/about">About</Link></li>
                        </ul>
                        <button className="block lg:hidden" onClick={()=>toggleMenu()}>
                            <svg className=" h-6 w-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        </button>
                    </nav>
                </div>
            </div>
            {
                toggle ?
                <div className="px-5 block lg:hidden w-full bg-gray-800 h-auto ">
                    <ul className="container mx-auto flex flex-col font text-white">
                        <li className={`py-2 ${activeNavLink('/')}`}><Link to="/">Home</Link></li>
                        <li className={`py-2 ${activeNavLink('/recipes')}`}><Link to="/recipes">Recipes</Link></li>
                        <li className={`py-2 ${activeNavLink('/saved-recipes')}`}><Link to="/saved-recipes">My Recipes</Link></li>
                        <li className={`pb-3 ${activeNavLink('/about')}`}><Link to="/about">About</Link></li>
                    </ul>
                </div> :null
            }
            
        </header>
    )
}
