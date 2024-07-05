import React from 'react';
import { Typewriter } from './Typewriter.jsx';
import selfie from '../assets/selfie.png';
import { LinkBelt } from './LinkBelt.jsx';
import { DisplayProjects } from './DisplayProjects.jsx';

export function Home() {
  return (
    <>
        <div className="container mx-auto my-32">
            <div className="flex inline mt-20 grid grid-cols-2">
                <div className="grid-rows-2">
                    <h1 className="flex-inline text-3xl font-bold"> <Typewriter text="Hi I'm Kyle and I study Computer Science" delay={30} /></h1>
                    <div className="mt-12 text-slate-600">I am an aspiring full-stack developer with a passion for creating intuitive and insightful web and mobile apps.
                        Currently, I am pursuing an BS in Computer Science at the University of Michigan (Go Blue!) </div>
                    <div className="mt-4 text-slate-600">With coursework spanning from the essential data structures and algorithms to complex topics such as artificial intelligence and web systems, 
                        I've developed proficiency in multiple languages and technologies, such as C++, Python, JavaScript, React, Node.js, and SQL.</div>
                    <div className="mt-4 text-slate-600"> My goal is to secure an internship or entry-level software engineering role where I can contribute directly to product development!</div>
                </div>
                <div className="ml-48 h-96 w-96">
                    <img src={selfie} alt="selfie" className="rounded-3xl overflow-hidden object-scale-down"/>
                </div>
            </div>
            <LinkBelt/>
        </div>
        <DisplayProjects/>
    </>
  )
}

export default Home;