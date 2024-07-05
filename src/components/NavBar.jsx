import React from 'react'
import { Link } from 'react-router-dom'
export function NavBar() {
  return (
    <div className="w-full mx-auto my-6 font-sans text-sm">
        <div className="fixed top-6 w-full">
            <nav className="flex justify-center">
                <div className="rounded-2xl shadow-lg bg-white">
                    <ul className="inline-flex px-7 py-2 space-x-10">
                        <Link className="text-slate-700 transition-colors duration-300 ease-in-out hover:text-sky-500 active:text-sky-500"to="/"> Home</Link>
                        <Link className="text-slate-700 transition-colors duration-300 ease-in-out hover:text-sky-500 active:text-sky-500" to="/about">About</Link>
                        <Link className="text-slate-700 transition-colors duration-300 ease-in-out hover:text-sky-500 active:text-sky-500" to="/projects">Projects</Link>
                        <Link className="text-slate-700 transition-colors duration-300 ease-in-out hover:text-sky-500 active:text-sky-500" to="/contact">Contact</Link>
                    </ul>
                </div>
            </nav>
        </div>

    </div>
  )
}

export default NavBar;