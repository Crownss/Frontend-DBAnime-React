import { NavLink, useLocation } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faFilm, faInfoCircle, faSearch, faClock} from '@fortawesome/free-solid-svg-icons'

export default function Navbar() {
    const { pathname } = useLocation()
    return (
        <div>
            <nav className="flex container justify-between flex-nowrap p-6">
                <div className="order-first">
                    <span className="font-bold text-xl tracking-wide underline underline-offset-4">DBAnime</span>
                </div>
                {/* <div className="order-last">
                    <input type="text" className="rounded" placeholder="Search..." />
                </div> */}
                <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
                </div>
            </nav>
            <div className="min-w-screen min-h-screen fixed items-center justify-center px-5 pt-7 pb-24">
                <div className="w-full max-w-md mx-auto fixed bottom-0 right-0 left-0">
                    <div className="bg-black rounded-3xl">
                        <div className="flex">
                            <div className="flex-1 group">
                                <NavLink to="/movie">
                                    <button className={pathname==="/movie" ? ("flex items-end justify-center text-center mx-auto px-4 pt-2 w-full text-gray-400 text-indigo-500"):("flex items-end justify-center text-center mx-auto px-4 pt-2 w-full text-gray-400 group-hover:text-indigo-500")}>
                                        <span className="block px-1 pt-1 pb-1">
                                            <FontAwesomeIcon icon={faFilm} />
                                            <span className="block text-xs pb-2 capitalize">Movie</span>
                                            <span className={pathname==="/movie" ? ("block w-5 mx-auto h-1 bg-indigo-500 rounded-full"):("block w-5 mx-auto h-1 group-hover:bg-indigo-500 rounded-full")}></span>
                                        </span>
                                    </button>
                                </NavLink>
                            </div>
                            <div className="flex-1 group">
                                <NavLink to="/schedule">
                                    <button className={pathname==="/schedule" ? ("flex items-end justify-center text-center mx-auto px-4 pt-2 w-full text-gray-400 text-indigo-500"):("flex items-end justify-center text-center mx-auto px-4 pt-2 w-full text-gray-400 group-hover:text-indigo-500")}>
                                        <span className="block px-1 pt-1 pb-1">
                                            <FontAwesomeIcon icon={faClock} />
                                            <span className="block text-xs pb-2 capitalize">Schedule</span>
                                            <span className={pathname==="/schedule" ? ("block w-5 mx-auto h-1 bg-indigo-500 rounded-full"):("block w-5 mx-auto h-1 group-hover:bg-indigo-500 rounded-full")}></span>
                                        </span>
                                    </button>
                                </NavLink>
                            </div>
                            <div className="flex-1 group">
                                <NavLink to="/">
                                    <button className={pathname==="/" ? ("flex items-end justify-center text-center mx-auto px-4 pt-2 w-full text-gray-400 text-indigo-500"):("flex items-end justify-center text-center mx-auto px-4 pt-2 w-full text-gray-400 group-hover:text-indigo-500")}>
                                        <span className="block px-1 pt-1 pb-1">
                                        <FontAwesomeIcon icon={faHome} />
                                            <span className="block text-xs pb-2 capitalize">Home</span>
                                            <span className={pathname==="/" ? ("block w-5 mx-auto h-1 bg-indigo-500 rounded-full"):("block w-5 mx-auto h-1 group-hover:bg-indigo-500 rounded-full")}></span>
                                        </span>
                                    </button>
                                </NavLink>
                            </div>
                            {/* <div className="flex-1 group">
                                <NavLink to="login">
                                    <button className={pathname==="/" ? ("flex items-end justify-center text-center mx-auto px-4 pt-2 w-full text-gray-400 text-indigo-500"):("flex items-end justify-center text-center mx-auto px-4 pt-2 w-full text-gray-400 group-hover:text-indigo-500")}>
                                        <span className="block px-1 pt-1 pb-1">
                                            <FontAwesomeIcon icon={faUserLock} />
                                            <span className="block text-xs pb-2">Season</span>
                                            <span className={pathname==="/" ? ("block w-5 mx-auto h-1 bg-indigo-500 rounded-full"):("block w-5 mx-auto h-1 group-hover:bg-indigo-500 rounded-full")}></span>
                                        </span>
                                    </button>
                                </NavLink>
                            </div> */}
                            <div className="flex-1 group">
                                <NavLink to="/about">
                                    <button className={pathname==="/about" ? ("flex items-end justify-center text-center mx-auto px-4 pt-2 w-full text-gray-400 text-indigo-500"):("flex items-end justify-center text-center mx-auto px-4 pt-2 w-full text-gray-400 group-hover:text-indigo-500")}>
                                        <span className="block px-1 pt-1 pb-1">
                                            <FontAwesomeIcon icon={faInfoCircle} />
                                            <span className="block text-xs pb-2 capitalize">About</span>
                                            <span className={pathname==="/about" ? ("block w-5 mx-auto h-1 bg-indigo-500 rounded-full"):("block w-5 mx-auto h-1 group-hover:bg-indigo-500 rounded-full")}></span>
                                        </span>
                                    </button>
                                </NavLink>
                            </div>
                            <div className="flex-1 group">
                                <NavLink to="/search">
                                    <button className={pathname==="/search" ? ("flex items-end justify-center text-center mx-auto px-4 pt-2 w-full text-gray-400 text-indigo-500"):("flex items-end justify-center text-center mx-auto px-4 pt-2 w-full text-gray-400 group-hover:text-indigo-500")}>
                                        <span className="block px-1 pt-1 pb-1">
                                            <FontAwesomeIcon icon={faSearch} />
                                            <span className="block text-xs pb-2 capitalize">search</span>
                                            <span className={pathname==="/search" ? ("block w-5 mx-auto h-1 bg-indigo-500 rounded-full"):("block w-5 mx-auto h-1 group-hover:bg-indigo-500 rounded-full")}></span>
                                        </span>
                                    </button>
                                </NavLink>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

