import React from 'react'

function Navbar() {
    return (
        <nav className="fixed w-full bg-white bg-opacity-90 shadow-md z-50">
            <div className="container mx-auto px-4 sm:px-6 py-3">
                <div className="flex justify-between items-center">
                    <a href="#" className="text-xl sm:text-2xl font-bold gradient-text">Neuro Detect</a>
                    <div className="hidden md:flex space-x-4">
                        <a id="nav-about" href="#about" className="nav-link hover:text-purple-500 transition">About</a>
                        <a id="nav-tumors" href="#tumors" className="nav-link hover:text-purple-500 transition">Tumor Types</a>
                        <a id="nav-detection" href="#detection" className="nav-link hover:text-purple-500 transition">Detection</a>
                        <a id="nav-model" href="#model" className="nav-link hover:text-purple-500 transition">Our Model</a>
                    </div>
                    <div className="md:hidden flex items-center">
                        <button className="outline-none mobile-menu-button">
                            <svg className="w-6 h-6 text-gray-500 hover:text-purple-500"
                                x-show="!showMenu"
                                fill="none"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path d="M4 6h16M4 12h16M4 18h16"></path>
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
            <div className="hidden mobile-menu">
                <ul className="">
                    <li><a href="#intro" className="block text-sm px-2 py-4 hover:bg-purple-500 hover:text-white transition duration-300">Home</a></li>
                    <li><a href="#about" className="block text-sm px-2 py-4 hover:bg-purple-500 hover:text-white transition duration-300">About</a></li>
                    <li><a href="#tumors" className="block text-sm px-2 py-4 hover:bg-purple-500 hover:text-white transition duration-300">Tumor Types</a></li>
                    <li><a href="#detection" className="block text-sm px-2 py-4 hover:bg-purple-500 hover:text-white transition duration-300">Detection</a></li>
                    <li><a href="#model" className="block text-sm px-2 py-4 hover:bg-purple-500 hover:text-white transition duration-300">Our Model</a></li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar