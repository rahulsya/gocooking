import { Link,useLocation } from 'react-router-dom'

export default function NavBar() {
    let location=useLocation()
    const activeNavLink=(path)=>{
        return location.pathname===path ? `font-bold text-yellow-500` : ''
    }

    return (
        <header>
            <div className="py-4 px-5 bg-gray-800">
                <div className="container mx-auto flex justify-between items-center">
                    <div className="font-bold text-xl text-white">
                            {/* <Link to="/"> */}
                            <span className="font-extrabold">Go</span>Cooking
                            {/* <img src={Logo} alt="logo" className="w-32" /> */}
                            {/* </Link> */}
                    </div>
                    <nav className="">
                        <ul className="flex items-center font text-white">
                            <li className={`mx-3 ${activeNavLink('/')}`}><Link to="/">Home</Link></li>
                            <li className={`mx-3 ${activeNavLink('/recipes')}`}><Link to="/recipes">Recipes</Link></li>
                            <li className={`mx-3 ${activeNavLink('/about')}`}><Link to="/about">About</Link></li>
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
    )
}
