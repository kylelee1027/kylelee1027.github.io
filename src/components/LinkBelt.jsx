import React from 'react'
import { DiGithubBadge } from "react-icons/di";
import { MdEmail } from 'react-icons/md';
import { BsFillTelephoneFill } from "react-icons/bs";
import { Link } from "react-router-dom";
export function LinkBelt() {
  return (
    <>
    <div className="container">
        <nav className="flex">
            <ul className="inline-flex px-10 space-x-4">
                <a target="_blank" rel="noopener" href="https://www.github.com/kylelee1027"><DiGithubBadge className="w-8 h-8 opacity-50 transition-opacity duration-300 ease-in-out hover:opacity-100"/></a>
                <a href="mailto:kylejlee@umich.edu"><MdEmail className="w-6 h-6 mt-1 opacity-50 transition-opacity duration-300 ease-in-out hover:opacity-100"/></a>
                <a href="tel:2487670716"><BsFillTelephoneFill className="w-5 h-5 mt-1.5 ml-2 opacity-50 transition-opacity duration-300 ease-in-out hover:opacity-100"/></a>
            </ul>
        </nav>
    </div>

    </>

  )
}

export default LinkBelt;