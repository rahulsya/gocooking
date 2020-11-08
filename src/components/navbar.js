import { Link } from 'react-router-dom'

export default function navbar() {
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
                        <ul className="flex items-center font-semibold text-white">
                        <li className="mx-3">
                            <Link to="/">Home</Link>
                        </li>
                        {/* <li className="mx-3">
                            <Link to="/detail-recipes/1">About</Link>
                        </li> */}
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
    )
}