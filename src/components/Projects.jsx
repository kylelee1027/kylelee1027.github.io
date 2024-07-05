import React from 'react';
import { Typewriter } from './Typewriter.jsx';
import { DisplayProjects } from './DisplayProjects.jsx';

export function Projects() {
  return (
        <div className="container mx-auto my-32">
            <div className="w-full flex inline mt-20 w-96">
                <div className="grid-rows-3">
                    <h1 className="flex-inline text-3xl font-bold"> <Typewriter text="Things that I've made in pursuit of wanting to learn more" delay={30} /></h1>
                    <div className="my-12 text-slate-600 leading-8">
                        Although my skillset is generally centered around Web Development, I like to dabble in different technologies and concepts.
                        I've done a multitude of different projects that involve LLMs, Computer Vision, Machine Learning, etc. but I decided to show some of the projects that I had the most fun working on recently!
                    </div>
                    <DisplayProjects/>
                </div>
            </div>
        </div>
  )
}

export default Projects;